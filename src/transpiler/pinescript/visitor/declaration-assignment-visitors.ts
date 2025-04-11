// src/visitor/declaration-assignment-visitors.ts
import {
    // Contexts for declarations, assignments, names
    Var_declaration_stmtContext,
    Tuple_declarationContext,
    Compound_assignmentContext,
    Compound_variable_initializationContext,
    Compound_name_initializationContext,
    Compound_tuple_initializationContext,
    Compound_reassignmentContext,
    Compound_augassignmentContext,
    Assignment_targetContext,
    Assignment_target_attributeContext,
    Assignment_target_subscriptContext,
    Assignment_target_nameContext,
    Assignment_target_groupContext,
    Augassign_opContext,
    NameContext,
    Name_loadContext,
    Name_storeContext,
    Function_declarationContext,
    Parameter_definitionContext,
    Parameter_listContext, // Assuming this holds parameter_definition list
    Local_blockContext, // For function body
    Type_specificationContext,
    Type_qualifierContext,
    Declaration_modeContext,
    ExpressionContext, // For initializers, default params, assignment RHS
    Structure_expressionContext, // For assignment RHS
    Primary_expressionContext, // For assignment target attribute/subscript base
    Subscript_sliceContext, // For assignment target subscript
    // Python-style function def (if needed, add context)
    // Function_def_stmtContext, 
    // BlockContext
} from '../generated/grammar/PinescriptParser';
import { ParserRuleContext, Token } from 'antlr4ts';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

// Import ESTree types
import {
    BaseNode, Statement, Expression, Identifier, Literal, BlockStatement,
    VariableDeclaration, VariableDeclarator, AssignmentExpression, MemberExpression,
    FunctionDeclaration, Pattern, ArrayPattern, AssignmentPattern, Property, // Added Property
    SourceLocation, // Added SourceLocation
    ExpressionStatement
} from '../estree-types';

// Import the main visitor class type
import { ESTreeVisitor } from '../ESTreeVisitor';

// --- Exported Declaration/Assignment Visitor Implementation Functions ---

// --- Variable Declarations & Initialization ---

export function visitVarDeclarationStmtImpl(visitor: ESTreeVisitor, ctx: Var_declaration_stmtContext): VariableDeclaration | null {
    // This usually represents the declaration part `var x` or `const int y`
    // The initializer is typically handled by a parent assignment rule.
    const varInfo = getVarDeclInfoImpl(visitor, ctx); // Use helper
    if (!varInfo) {
         console.error("Failed to get declaration info in visitVarDeclarationStmtImpl");
         return null;
    }
    // Cast result of createNode
    const declarator = visitor.createNode('VariableDeclarator', { id: varInfo.id as Pattern, init: null }) as VariableDeclarator | null;
    if (!declarator) return null;
    return visitor.createNode('VariableDeclaration', { declarations: [declarator], kind: varInfo.kind }, ctx);
}

export function visitTupleDeclarationImpl(visitor: ESTreeVisitor, ctx: Tuple_declarationContext): ArrayPattern | null {
    const elements: (Identifier | null)[] = [];
    for (const nameStoreCtx of ctx.name_store()) {
        const id = visitNameStoreImpl(visitor, nameStoreCtx); // Delegate
        if (id) {
            elements.push(id);
        } else {
            console.error("Invalid element (name_store) in tuple declaration:", nameStoreCtx.text);
            return null; // Fail-fast
        }
    }
    // Ensure all elements are valid Identifiers before creating pattern
    const validElements = elements.filter(el => el?.type === 'Identifier') as Identifier[];
    if (validElements.length !== elements.length) {
         console.error("Error processing tuple declaration elements.");
         return null;
    }
    return visitor.createNode('ArrayPattern', { elements: validElements }, ctx);
}

// --- Compound Assignment Rules (Dispatchers) ---

export function visitCompoundAssignmentImpl(visitor: ESTreeVisitor, ctx: Compound_assignmentContext): VariableDeclaration | AssignmentExpression | null {
    if (ctx.compound_variable_initialization()) {
        return visitCompoundVariableInitializationImpl(visitor, ctx.compound_variable_initialization()!); // Returns VariableDeclaration
    } else if (ctx.compound_reassignment()) {
        return visitCompoundReassignmentImpl(visitor, ctx.compound_reassignment()!); // Returns AssignmentExpression
    } else if (ctx.compound_augassignment()) {
        return visitCompoundAugassignmentImpl(visitor, ctx.compound_augassignment()!); // Returns AssignmentExpression
    } else {
        console.warn("Unknown child in Compound_assignmentContext");
        return null;
    }
}

export function visitCompoundVariableInitializationImpl(visitor: ESTreeVisitor, ctx: Compound_variable_initializationContext): VariableDeclaration | null {
    if (ctx.compound_name_initialization()) {
        return visitCompoundNameInitializationImpl(visitor, ctx.compound_name_initialization()!); // Returns VariableDeclaration
    } else if (ctx.compound_tuple_initialization()) {
        return visitCompoundTupleInitializationImpl(visitor, ctx.compound_tuple_initialization()!); // Returns VariableDeclaration
    } else {
        console.warn("Unknown child in Compound_variable_initializationContext");
        return null;
    }
}

// --- Specific Initializations ---

export function visitCompoundNameInitializationImpl(visitor: ESTreeVisitor, ctx: Compound_name_initializationContext): VariableDeclaration | null {
    // Handles var_declaration_stmt EQUAL (expression | structure_expression)
    const varDeclStmtCtx = ctx.var_declaration_stmt();
    if (!varDeclStmtCtx) return null;

    const varInfo = getVarDeclInfoImpl(visitor, varDeclStmtCtx); // Use helper
    if (!varInfo) { /* error */ return null; }

    let rhsNode: Expression | null = null;
    if (ctx.expression()) {
        rhsNode = visitor.visit(ctx.expression()!) as Expression | null;
    } else if (ctx.structure_expression()) {
        console.warn("Structure expression as RHS not implemented in visitCompound_name_initialization");
        // Assuming visitStructure_expression exists on visitor
        rhsNode = visitor.visit(ctx.structure_expression()!) as Expression | null;
        if (rhsNode && !visitor.isExpression(rhsNode)) { rhsNode = null; }
    }
    // rhsNode can be null for declarations like `var x`

    // Cast result of createNode
    const declarator = visitor.createNode('VariableDeclarator', { id: varInfo.id as Pattern, init: rhsNode }) as VariableDeclarator | null;
    if (!declarator) return null;
    return visitor.createNode('VariableDeclaration', { declarations: [declarator], kind: varInfo.kind }, ctx);
}

export function visitCompoundTupleInitializationImpl(visitor: ESTreeVisitor, ctx: Compound_tuple_initializationContext): VariableDeclaration | null {
    // Handles tuple_declaration EQUAL (expression | structure_expression)
    const tupleDeclCtx = ctx.tuple_declaration();
    if (!tupleDeclCtx) return null;
    const arrayPattern = visitTupleDeclarationImpl(visitor, tupleDeclCtx); // Delegate
    if (!arrayPattern) return null;

    let rhsNode: Expression | null = null;
    if (ctx.expression()) {
        rhsNode = visitor.visit(ctx.expression()!) as Expression | null;
    } else if (ctx.structure_expression()) {
         console.warn("Structure expression as RHS not implemented in visitCompound_tuple_initialization");
         rhsNode = visitor.visit(ctx.structure_expression()!) as Expression | null;
         if (rhsNode && !visitor.isExpression(rhsNode)) { rhsNode = null; }
    }
    if (!rhsNode) { 
        console.error("Missing RHS for tuple initialization");
        return null; 
    }

    // Cast result of createNode
    const declarator = visitor.createNode('VariableDeclarator', { id: arrayPattern as Pattern, init: rhsNode }) as VariableDeclarator | null;
    if (!declarator) return null;
    // Assume 'let' kind for tuples
    return visitor.createNode('VariableDeclaration', { declarations: [declarator], kind: 'let' }, ctx);
}

// --- Reassignment & Augmented Assignment ---

export function visitCompoundReassignmentImpl(visitor: ESTreeVisitor, ctx: Compound_reassignmentContext): AssignmentExpression | null {
    // assignment_target COLONEQUAL (expression | structure_expression)
    const targetNode = visitAssignmentTargetImpl(visitor, ctx.assignment_target()); // Delegate
    if (!targetNode || !['Identifier', 'MemberExpression'].includes(targetNode.type)) { 
        console.error("Invalid target for reassignment");
        return null; 
    }
    const leftNode = targetNode as Identifier | MemberExpression;

    let rhsNode: Expression | null = null;
    if (ctx.expression()) {
        rhsNode = visitor.visit(ctx.expression()!) as Expression | null;
    } else if (ctx.structure_expression()) {
        console.warn("Structure expression as RHS not implemented in visitCompound_reassignment");
        rhsNode = visitor.visit(ctx.structure_expression()!) as Expression | null;
        if(rhsNode && !visitor.isExpression(rhsNode)) { rhsNode = null; }
    }
    if (!rhsNode) { 
        console.error("Missing RHS for reassignment");
        return null; 
    }

    return visitor.createNode('AssignmentExpression', {
        operator: '=', // PineScript ':=' maps to '='
        left: leftNode,
        right: rhsNode
    }, ctx);
}

export function visitCompoundAugassignmentImpl(visitor: ESTreeVisitor, ctx: Compound_augassignmentContext): AssignmentExpression | null {
    // assignment_target augassign_op (expression | structure_expression)
    const targetNode = visitAssignmentTargetImpl(visitor, ctx.assignment_target()); // Delegate
    const operatorNode = ctx.augassign_op();

    if (!targetNode || !['Identifier', 'MemberExpression'].includes(targetNode.type)) { 
        /* error */ return null; 
    }
    const leftNode = targetNode as Identifier | MemberExpression;
    if (!operatorNode) { /* error */ return null; }
    const operator = operatorNode.text;

    let rhsNode: Expression | null = null;
    if (ctx.expression()) {
        rhsNode = visitor.visit(ctx.expression()!) as Expression | null;
    } else if (ctx.structure_expression()) {
         console.warn("Structure expression as RHS not implemented in visitCompound_augassignment");
         rhsNode = visitor.visit(ctx.structure_expression()!) as Expression | null;
         if (rhsNode && !visitor.isExpression(rhsNode)) { rhsNode = null; }
    }
    if (!rhsNode) { /* error */ return null; }

    return visitor.createNode('AssignmentExpression', {
        operator: operator, // Use the augmented operator directly
        left: leftNode,
        right: rhsNode
    }, ctx);
}

// --- Assignment Target Handling ---

export function visitAssignmentTargetImpl(visitor: ESTreeVisitor, ctx: Assignment_targetContext): Identifier | MemberExpression | null {
    if (ctx.assignment_target_attribute()) return visitAssignmentTargetAttributeImpl(visitor, ctx.assignment_target_attribute()!);
    if (ctx.assignment_target_subscript()) return visitAssignmentTargetSubscriptImpl(visitor, ctx.assignment_target_subscript()!);
    if (ctx.assignment_target_name()) return visitAssignmentTargetNameImpl(visitor, ctx.assignment_target_name()!);
    if (ctx.assignment_target_group()) return visitAssignmentTargetGroupImpl(visitor, ctx.assignment_target_group()!);
    console.error("Unknown Assignment_target type:", ctx.text);
    return null;
}

export function visitAssignmentTargetAttributeImpl(visitor: ESTreeVisitor, ctx: Assignment_target_attributeContext): MemberExpression | null {
    // primary_expression DOT name_store
    const object = visitor.visit(ctx.primary_expression()) as Expression | null;
    const propertyNameCtx = ctx.name_store()?.name();
    if (!object || !propertyNameCtx) { /* error */ return null; }
    const property = visitNameImpl(visitor, propertyNameCtx); // Delegate
    if (!property || property.type !== 'Identifier') { /* error */ return null; }
    return visitor.createNode('MemberExpression', { object: object, property: property, computed: false, optional: false }, ctx);
}

export function visitAssignmentTargetSubscriptImpl(visitor: ESTreeVisitor, ctx: Assignment_target_subscriptContext): MemberExpression | null {
    // primary_expression LSQB subscript_slice RSQB
    const object = visitor.visit(ctx.primary_expression()) as Expression | null;
    const sliceCtx = ctx.subscript_slice();
    if (!object || !sliceCtx) { /* error */ return null; }
    // Assumes visitSubscript_slice exists (in expression visitors)
    const propertyExpr = visitor.visit(sliceCtx) as Expression | null;
    if (!propertyExpr) { /* error */ return null; }
    return visitor.createNode('MemberExpression', { object: object, property: propertyExpr, computed: true, optional: false }, ctx);
}

export function visitAssignmentTargetNameImpl(visitor: ESTreeVisitor, ctx: Assignment_target_nameContext): Identifier | null {
    // name_store
    return visitNameStoreImpl(visitor, ctx.name_store()); // Delegate
}

export function visitAssignmentTargetGroupImpl(visitor: ESTreeVisitor, ctx: Assignment_target_groupContext): Identifier | MemberExpression | null {
    // LPAR assignment_target RPAR
    return visitAssignmentTargetImpl(visitor, ctx.assignment_target()); // Recursive delegation
}

// --- Name Handling ---

export function visitNameImpl(visitor: ESTreeVisitor, ctx: NameContext): Identifier | null {
    const nameToken = ctx.NAME()?.symbol;
    if (!nameToken) {
        console.error("NameContext is missing NAME terminal node:", ctx.text);
        return null;
    }
    return visitor.createNode('Identifier', { name: nameToken.text ?? '' }, nameToken);
}

export function visitNameLoadImpl(visitor: ESTreeVisitor, ctx: Name_loadContext): Identifier | null {
    // name
    const nameCtx = ctx.name();
    return nameCtx ? visitNameImpl(visitor, nameCtx) : null;
}

export function visitNameStoreImpl(visitor: ESTreeVisitor, ctx: Name_storeContext): Identifier | null {
    // name
    const nameCtx = ctx.name();
    return nameCtx ? visitNameImpl(visitor, nameCtx) : null;
}

// --- Function Declaration & Parameters ---

export function visitFunctionDeclarationImpl(visitor: ESTreeVisitor, ctx: Function_declarationContext): FunctionDeclaration | null {
    const idCtx = ctx.name();
    const paramListCtx = ctx.parameter_list();
    const bodyCtx = ctx.local_block(); // Function body block

    if (!idCtx || !paramListCtx || !bodyCtx) {
        console.error("Missing required parts for function declaration");
        return null;
    }

    const funcId = visitNameImpl(visitor, idCtx);
    if (!funcId || funcId.type !== 'Identifier') {
        console.error("Invalid function name identifier");
        return null;
    }

    const params: Pattern[] = [];
    for (const paramDefCtx of paramListCtx.parameter_definition()) {
        const paramNode = visitParameterDefinitionImpl(visitor, paramDefCtx);
        if (paramNode) {
            params.push(paramNode);
        } else {
            console.error("Failed to process parameter definition");
            return null;
        }
    }

    // Visit the function body block
    let bodyBlock = visitor.visit(bodyCtx) as BlockStatement | null;
    if (!bodyBlock || bodyBlock.type !== 'BlockStatement') {
        console.error("Function body did not generate a valid BlockStatement");
        return null;
    }

    // --- Add Implicit Return Logic --- //
    if (bodyBlock.body && bodyBlock.body.length > 0) {
        const lastStatementIndex = bodyBlock.body.length - 1;
        const lastStatement = bodyBlock.body[lastStatementIndex];

        if (lastStatement && lastStatement.type === 'ExpressionStatement') {
            // Assert type before accessing expression
            const exprStatement = lastStatement as ExpressionStatement;
            const returnArgument = exprStatement.expression;

            // Create return statement, setting implicit flag
            const returnStatement = visitor.createNode('ReturnStatement', {
                argument: returnArgument,
                implicit: true // Mark as implicit
            }, ctx); // Use overall function context ctx

            if (returnStatement) {
                // Create new BlockStatement using original function's context for location
                bodyBlock = visitor.createNode('BlockStatement', {
                    body: [
                        ...bodyBlock.body.slice(0, lastStatementIndex),
                        returnStatement
                    ]
                }, ctx) ?? bodyBlock; // Use overall function context ctx & fallback
            } else {
                 console.error("Failed to create implicit ReturnStatement node");
            }
        }
    }
    // --- End Implicit Return Logic --- //

    return visitor.createNode('FunctionDeclaration', {
        id: funcId,
        params: params,
        body: bodyBlock, // Use the potentially modified bodyBlock
        generator: false,
        async: false,
        expression: false
    }, ctx);
}

export function visitParameterDefinitionImpl(visitor: ESTreeVisitor, ctx: Parameter_definitionContext): Pattern | null {
    // type_specification? name_store (EQUAL expression)?;
    const nameStoreCtx = ctx.name_store();
    if (!nameStoreCtx) { /* error */ return null; }
    const identifier = visitNameStoreImpl(visitor, nameStoreCtx); // Delegate
    if (!identifier) { /* error */ return null; }

    const exprCtx = ctx.expression();
    if (exprCtx) {
        const defaultValue = visitor.visit(exprCtx) as Expression | null;
        if (defaultValue) {
            return visitor.createNode('AssignmentPattern', {
                left: identifier,
                right: defaultValue
            }, ctx);
        } else {
            console.error("Failed to visit default value expression for parameter:", identifier.name);
            return null;
        }
    }
    // If no default value, return the Identifier directly
    return identifier;
}

// Potentially add visitParameter_listImpl if needed, though loop in visitFunctionDeclarationImpl might suffice

// --- Helpers ---

// Helper to get variable kind ('var', 'let', 'const')
function getDeclarationKindImpl(ctx: Var_declaration_stmtContext): 'var' | 'let' | 'const' {
    let kind: 'var' | 'let' | 'const' = 'let';
    const modeCtx = ctx.declaration_mode();
    if (modeCtx) {
        const modeText = modeCtx.text;
        if (modeText.toLowerCase() === 'var' || modeText.toLowerCase() === 'varip') {
            kind = 'var';
        }
    }
    const typeSpecCtx = ctx.type_specification();
    if (typeSpecCtx?.type_qualifier()?.CONST()) {
         kind = 'const';
    }
    return kind;
}

// Helper to get variable id and kind
function getVarDeclInfoImpl(visitor: ESTreeVisitor, ctx: Var_declaration_stmtContext): { id: Identifier, kind: "var" | "let" | "const" } | null {
    const nameStoreCtx = ctx.name_store();
    if (!nameStoreCtx) return null;
    const id = visitNameStoreImpl(visitor, nameStoreCtx); // Delegate
    if (!id) return null;
    const kind = getDeclarationKindImpl(ctx);
    return { id, kind };
} 