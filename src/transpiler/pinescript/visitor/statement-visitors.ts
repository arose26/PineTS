// src/visitor/statement-visitors.ts
import {
    // Import necessary ANTLR contexts for statements
    StatementContext,
    Simple_statementContext,
    Compound_statement_with_blockContext,
    Expression_statementContext,
    Import_statementContext,
    Break_statementContext,
    Continue_statementContext,
    If_structureContext,
    If_structure_elifContext,
    If_structure_elseContext,
    Elif_structureContext,
    Elif_structure_elifContext,
    Elif_structure_elseContext,
    Else_blockContext,
    For_structureContext,
    For_structure_toContext,
    For_structure_inContext,
    For_iteratorContext,
    While_structureContext,
    Switch_structureContext,
    Switch_casesContext,
    Switch_pattern_caseContext,
    Switch_default_caseContext,
    Local_blockContext,
    StatementsContext,
    ExpressionContext,
    Var_declaration_stmtContext,
    Type_declarationContext,
    Function_declarationContext,
    Structure_statementContext,
    StructureContext,
    Tuple_declarationContext,
    Name_storeContext,
    // BlockContext, // Removed if not exported
} from '../generated/grammar/PinescriptParser';
import { PinescriptLexer } from '../generated/grammar/PinescriptLexer';
import { ParserRuleContext, Token } from 'antlr4ts';
// Import TerminalNode from tree submodule
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

// Import ESTree types
import {
    BaseNode, Statement, Expression, Identifier, Literal, BlockStatement,
    ExpressionStatement, VariableDeclaration, IfStatement, BreakStatement, ContinueStatement,
    ForStatement, ForInStatement, WhileStatement, EmptyStatement, ArrayPattern, UpdateExpression,
    Pattern,
    SourceLocation,
    // Added missing types used in implementations
    UnaryExpression, BinaryExpression, AssignmentExpression
} from '../estree-types';

// Import the main visitor class type for the first argument
import type { ESTreeVisitor } from '../ESTreeVisitor';

// --- Exported Statement Visitor Implementation Functions ---

export function visitStatementImpl(visitor: ESTreeVisitor, ctx: StatementContext): Statement | Expression | null {
    if (ctx.simple_statement()) {
        return visitor.visit(ctx.simple_statement()!);
    }
    if (ctx.compound_statement_with_block()) {
        return visitor.visit(ctx.compound_statement_with_block()!);
    }

    for (let i = 0; i < ctx.childCount; i++) {
        const child = ctx.getChild(i);
        if (child instanceof TerminalNode) {
            // Rely only on text comparison for semicolon check
            if (child.text === ';') {
                return visitor.createNode('EmptyStatement', {}, child.symbol);
            }
            continue;
        }
        if (child instanceof ParserRuleContext) {
            if (child === ctx.simple_statement() || child === ctx.compound_statement_with_block()) {
                continue;
            }
            const result = visitor.visit(child);
            if (result) {
                if (visitor.isStatement(result) || visitor.isExpression(result)) {
                    return result;
                } else {
                    // Safe type access using 'as any'
                    const typeInfo = (result as any)?.type ?? 'unknown';
                    console.warn(`visitStatement child (${child.constructor.name}) returned unexpected node type: ${typeInfo}`);
                }
            }
        }
    }
    if (ctx.exception) { console.error("Parse error in statement:", ctx.exception); }
    else if (ctx.childCount > 0 && !ctx.simple_statement() && !ctx.compound_statement_with_block()) {
        // Log error only if there are children that weren't handled above
        console.error("Unhandled StatementContext structure:", ctx.toStringTree());
    }
    return null;
}

export function visitSimpleStatementImpl(visitor: ESTreeVisitor, ctx: Simple_statementContext): Statement | Expression | null {
    if (ctx.expression_statement()) {
        // Delegate to visitExpressionStatementImpl
        return visitExpressionStatementImpl(visitor, ctx.expression_statement()!); // Return Expression
    } else if (ctx.import_statement()) {
        return visitImportStatementImpl(visitor, ctx.import_statement()!); // Return ImportDeclaration | null
    } else if (ctx.break_statement()) {
        return visitBreakStatementImpl(visitor, ctx.break_statement()!); // Return BreakStatement | null
    } else if (ctx.continue_statement()) {
        return visitContinueStatementImpl(visitor, ctx.continue_statement()!); // Return ContinueStatement | null
    } else {
        console.warn("Unknown child in Simple_statementContext:", ctx.text);
        return null;
    }
}

export function visitCompoundStatementWithBlockImpl(visitor: ESTreeVisitor, ctx: Compound_statement_with_blockContext): Statement | null {
    if (ctx.function_declaration()) {
        // Assume visitFunction_declaration exists on visitor (will be imported from another module later)
        const funcDecl = visitor.visit(ctx.function_declaration()!); 
        return funcDecl as Statement | null;
    } else if (ctx.type_declaration()) {
        console.warn("Type declaration handling not implemented.");
        return null;
    } else if (ctx.structure_statement()) {
        return visitStructureStatementImpl(visitor, ctx.structure_statement()!); // Delegate
    } else {
        console.warn("Unknown child in Compound_statement_with_blockContext:", ctx.text);
        return null;
    }
}

export function visitExpressionStatementImpl(visitor: ESTreeVisitor, ctx: Expression_statementContext): Expression | null {
    const expressionCtx = ctx.expression();
    if (expressionCtx) {
        return visitor.visit(expressionCtx); // Return the raw expression
    }
    console.error("Expression_statement context does not contain expression");
    return null;
}

export function visitImportStatementImpl(visitor: ESTreeVisitor, ctx: Import_statementContext): BaseNode | null { // Should be ImportDeclaration
    console.warn("visitImport_statement not implemented");
    return null;
}

export function visitBreakStatementImpl(visitor: ESTreeVisitor, ctx: Break_statementContext): BreakStatement | null {
     return visitor.createNode('BreakStatement', { label: null }, ctx);
}

export function visitContinueStatementImpl(visitor: ESTreeVisitor, ctx: Continue_statementContext): ContinueStatement | null {
     return visitor.createNode('ContinueStatement', { label: null }, ctx);
}

// --- Structure Statement Handling ---

export function visitStructureStatementImpl(visitor: ESTreeVisitor, ctx: Structure_statementContext): Statement | null {
    if (ctx.structure()) {
        const structureNode = visitor.visit(ctx.structure());
        if (structureNode && visitor.isStatement(structureNode)) {
            return structureNode;
        }
        const typeInfo = (structureNode as any)?.type ?? 'unknown';
        console.warn(`visitStructure did not return a valid Statement, got: ${typeInfo}`);
    }
    console.error("Structure_statement missing inner structure");
    return null;
}

export function visitStructureImpl(visitor: ESTreeVisitor, ctx: StructureContext): Statement | null {
    if (ctx.if_structure()) return visitIfStructureImpl(visitor, ctx.if_structure()!); // Delegate
    if (ctx.for_structure()) return visitForStructureImpl(visitor, ctx.for_structure()!); // Delegate
    if (ctx.while_structure()) return visitWhileStructureImpl(visitor, ctx.while_structure()!); // Delegate
    if (ctx.switch_structure()) {
        console.warn("Switch structure handling not implemented.");
        return visitSwitchStructureImpl(visitor, ctx.switch_structure()!); // Delegate
    }
    console.error("Unknown structure type in visitStructure:", ctx.text);
    return null;
}

// --- If/Elif/Else Handling ---

export function visitIfStructureImpl(visitor: ESTreeVisitor, ctx: If_structureContext): IfStatement | null {
    if (ctx.if_structure_elif()) return visitIfStructureElifImpl(visitor, ctx.if_structure_elif()!);
    if (ctx.if_structure_else()) return visitIfStructureElseImpl(visitor, ctx.if_structure_else()!);
    console.warn("Unknown If_structure subtype");
    return null;
}

export function visitIfStructureElifImpl(visitor: ESTreeVisitor, ctx: If_structure_elifContext): IfStatement | null {
    const testExpr = visitor.visit(ctx.expression()) as Expression | null;
    const consequentBlock = visitLocalBlockImpl(visitor, ctx.local_block()); // Delegate
    const alternateNode = visitElifStructureImpl(visitor, ctx.elif_structure()); // Delegate
    return buildIfStatementImpl(visitor, testExpr, consequentBlock, alternateNode, ctx);
}

export function visitIfStructureElseImpl(visitor: ESTreeVisitor, ctx: If_structure_elseContext): IfStatement | null {
    const testExpr = visitor.visit(ctx.expression()) as Expression | null;
    const consequentBlock = visitLocalBlockImpl(visitor, ctx.local_block()); // Delegate
    const elseCtx = ctx.else_block();
    const alternateNode = elseCtx ? visitElseBlockImpl(visitor, elseCtx) : null; // Delegate
    return buildIfStatementImpl(visitor, testExpr, consequentBlock, alternateNode, ctx);
}

export function visitElifStructureImpl(visitor: ESTreeVisitor, ctx: Elif_structureContext): IfStatement | null {
    if (ctx.elif_structure_elif()) return visitElifStructureElifImpl(visitor, ctx.elif_structure_elif()!);
    if (ctx.elif_structure_else()) return visitElifStructureElseImpl(visitor, ctx.elif_structure_else()!);
    console.warn("Unknown Elif_structure subtype");
    return null;
}

export function visitElifStructureElifImpl(visitor: ESTreeVisitor, ctx: Elif_structure_elifContext): IfStatement | null {
    const testExpr = visitor.visit(ctx.expression()) as Expression | null;
    const consequentBlock = visitLocalBlockImpl(visitor, ctx.local_block()); // Delegate
    const alternateNode = visitElifStructureImpl(visitor, ctx.elif_structure()); // Delegate
    return buildIfStatementImpl(visitor, testExpr, consequentBlock, alternateNode, ctx);
}

export function visitElifStructureElseImpl(visitor: ESTreeVisitor, ctx: Elif_structure_elseContext): IfStatement | null {
    const testExpr = visitor.visit(ctx.expression()) as Expression | null;
    const consequentBlock = visitLocalBlockImpl(visitor, ctx.local_block()); // Delegate
    const elseCtx = ctx.else_block();
    const alternateNode = elseCtx ? visitElseBlockImpl(visitor, elseCtx) : null; // Delegate
    return buildIfStatementImpl(visitor, testExpr, consequentBlock, alternateNode, ctx);
}

export function visitElseBlockImpl(visitor: ESTreeVisitor, ctx: Else_blockContext): BlockStatement | null {
    const blockCtx = ctx.local_block();
    const blockNode = blockCtx ? visitor.visit(blockCtx) : null;
    if (blockNode && blockNode.type === 'BlockStatement') {
        return blockNode as BlockStatement;
    }
    console.warn("visitElseBlockImpl did not return a BlockStatement");
    return null;
}

// Private helper made public for use by implementations
export function buildIfStatementImpl(visitor: ESTreeVisitor, testExpr: Expression | null, consequentBlock: Statement | null, alternateNode: Statement | null, nodeCtx?: ParserRuleContext): IfStatement | null {
    if (!testExpr) {
        console.error("Missing test expression for IfStatement construction");
        return null;
    }
    if (!consequentBlock || !visitor.isStatement(consequentBlock)) {
        const typeInfo = (consequentBlock as any)?.type ?? 'unknown';
        console.error(`Invalid consequent block for IfStatement construction: ${typeInfo}`);
        return null;
    }
    if (alternateNode && !visitor.isStatement(alternateNode)) {
        const typeInfo = (alternateNode as any)?.type ?? 'unknown';
        console.error(`Invalid alternate node for IfStatement construction: ${typeInfo}`);
        alternateNode = null;
    }
    return visitor.createNode('IfStatement', { test: testExpr, consequent: consequentBlock, alternate: alternateNode }, nodeCtx);
}

// --- Loop Structures --- //

export function visitForStructureImpl(visitor: ESTreeVisitor, ctx: For_structureContext): ForStatement | ForInStatement | null {
    if (ctx.for_structure_to()) return visitForStructureToImpl(visitor, ctx.for_structure_to()!);
    if (ctx.for_structure_in()) return visitForStructureInImpl(visitor, ctx.for_structure_in()!);
    console.warn("Unknown For_structure subtype");
    return null;
}

export function visitForStructureToImpl(visitor: ESTreeVisitor, ctx: For_structure_toContext): ForStatement | null {
    const iteratorCtx = ctx.for_iterator();
    const startExprCtx = ctx.expression(0);
    const endExprCtx = ctx.expression(1);
    const stepExprCtx = ctx.expression(2);
    const bodyCtx = ctx.local_block();

    if (!iteratorCtx || !startExprCtx || !endExprCtx || !bodyCtx) { 
        console.error("Missing required parts for for..to loop"); 
        return null; 
    }

    const iteratorInfo = getForIteratorInfoImpl(visitor, iteratorCtx); 
    if (!iteratorInfo || iteratorInfo.id.type !== 'Identifier') { 
        console.error("Invalid iterator for for..to loop");
        return null; 
    }
    const iteratorId = iteratorInfo.id as Identifier;
    const initValue = visitor.visit(startExprCtx) as Expression | null;
    if (!initValue) { 
        console.error("Invalid start value for for..to loop");
        return null; 
    }

    const declarator = visitor.createNode('VariableDeclarator', { id: iteratorId, init: initValue });
    if (!declarator) return null;
    const initDecl = visitor.createNode('VariableDeclaration', { declarations: [declarator], kind: 'let' });
    if (!initDecl) return null;

    const endValue = visitor.visit(endExprCtx) as Expression | null;
    if (!endValue) { 
        console.error("Invalid end value for for..to loop");
        return null; 
    }

    let stepExpr = stepExprCtx ? visitor.visit(stepExprCtx) as Expression : null;

    // Default step value is 1, handle potential null from createNode
    const defaultStepNode = visitor.createNode('Literal', { value: 1, raw: '1' });
    if (!defaultStepNode) {
         // This should ideally not happen for a simple literal
         console.error("Critical error: Failed to create default step node for loop.");
         return null; // Or throw an error
    }
    let stepValueNode: Expression = defaultStepNode;

    let isIncrementing = true;
    // Check stepExpr safely
    if (stepExpr && stepExpr.type === 'Literal') {
        stepValueNode = stepExpr;
        const literalValue = (stepExpr as Literal).value;
        // Check typeof *before* comparison and use the result
        if (typeof literalValue === 'number') {
            isIncrementing = literalValue >= 0; // Use >= 0 for standard check
        } else {
            // Handle non-numeric literal step values if necessary
            console.warn("Non-numeric literal used as for loop step value");
        }
    } else if (stepExpr) {
        // Handle non-literal step expressions if needed
        stepValueNode = stepExpr; // Use the expression node directly
        console.warn("Non-literal step expression used in for loop, assuming incrementing");
        isIncrementing = true; // Assume incrementing for complex steps, may need refinement
    }

    // Determine operator based on direction
    const operator = isIncrementing ? '<=' : '>=';

    const testExpr = visitor.createNode('BinaryExpression', { operator: operator, left: iteratorId, right: endValue });
    if (!testExpr) return null;
    const updateExpr = visitor.createNode('AssignmentExpression', { operator: '+=', left: iteratorId, right: stepValueNode });
    if (!updateExpr) return null;
    const body = visitLocalBlockImpl(visitor, bodyCtx); 
    if (!body || body.type !== 'BlockStatement') { 
        console.error("Invalid body for for..to loop");
        return null; 
    }

    return visitor.createNode('ForStatement', { init: initDecl, test: testExpr, update: updateExpr, body: body });
}

export function visitForStructureInImpl(visitor: ESTreeVisitor, ctx: For_structure_inContext): ForInStatement | null {
    const iteratorCtx = ctx.for_iterator();
    const iterableCtx = ctx.expression();
    const bodyCtx = ctx.local_block();

    if (!iteratorCtx || !iterableCtx || !bodyCtx) { 
        console.error("Missing required parts for for..in loop");
        return null; 
    }

    const iteratorInfo = getForIteratorInfoImpl(visitor, iteratorCtx); 
    if (!iteratorInfo || !['Identifier', 'ArrayPattern'].includes(iteratorInfo.id.type)) { 
        console.error("Invalid iterator for for..in loop");
        return null; 
    }
    const leftPattern = iteratorInfo.id as Identifier | ArrayPattern;

    const declarator = visitor.createNode('VariableDeclarator', { id: leftPattern, init: null });
    if (!declarator) return null;
    const leftDecl = visitor.createNode('VariableDeclaration', { declarations: [declarator], kind: 'let' }, iteratorCtx);
    if (!leftDecl) return null;

    const right = visitor.visit(iterableCtx) as Expression | null;
    const body = visitLocalBlockImpl(visitor, bodyCtx); 
    if (!right) { 
        console.error("Invalid iterable for for..in loop");
        return null; 
    }
    if (!body || body.type !== 'BlockStatement') { 
        console.error("Invalid body for for..in loop");
        return null; 
    }

    return visitor.createNode('ForInStatement', { left: leftDecl, right: right, body: body, each: false });
}

// Helper for for loops - made public
export function getForIteratorInfoImpl(visitor: ESTreeVisitor, ctx: For_iteratorContext): { id: Identifier | ArrayPattern, kind: 'let' } | null {
    if (ctx.name_store()) {
        // Assumes visitName_store exists on visitor (from declaration module)
        const identifier = visitor.visit(ctx.name_store()!) as Identifier | null;
        return identifier ? { id: identifier, kind: 'let' } : null;
    } else if (ctx.tuple_declaration()) {
        // Assumes visitTuple_declaration exists on visitor (from declaration module)
        const arrayPattern = visitor.visit(ctx.tuple_declaration()!) as ArrayPattern | null;
        return arrayPattern ? { id: arrayPattern, kind: 'let' } : null;
    } else {
        console.warn("Unknown for_iterator type");
        return null;
    }
}

export function visitWhileStructureImpl(visitor: ESTreeVisitor, ctx: While_structureContext): WhileStatement | null {
    const testExpr = visitor.visit(ctx.expression()) as Expression | null;
    const body = visitLocalBlockImpl(visitor, ctx.local_block()); // Delegate
    if (!testExpr) { /* error */ return null; }
    if (!body || body.type !== 'BlockStatement') { /* error */ return null; }
    return visitor.createNode('WhileStatement', { test: testExpr, body: body }, ctx);
}

// --- Switch Structure (Placeholders) ---

export function visitSwitchStructureImpl(visitor: ESTreeVisitor, ctx: Switch_structureContext): Statement | null { // Should be SwitchStatement
    console.warn("visitSwitch_structure not implemented");
    return null;
}

export function visitSwitchCasesImpl(visitor: ESTreeVisitor, ctx: Switch_casesContext): any { // Should be SwitchCase[]
    console.warn("visitSwitch_cases not implemented");
    return [];
}

export function visitSwitchPatternCaseImpl(visitor: ESTreeVisitor, ctx: Switch_pattern_caseContext): any { // Should be SwitchCase
    console.warn("visitSwitch_pattern_case not implemented");
    return null;
}

export function visitSwitchDefaultCaseImpl(visitor: ESTreeVisitor, ctx: Switch_default_caseContext): any { // Should be SwitchCase
    console.warn("visitSwitch_default_case not implemented");
    return null;
}

// --- Block Handling ---

export function visitLocalBlockImpl(visitor: ESTreeVisitor, ctx: Local_blockContext): BlockStatement | null {
    const statementsCtx = ctx.statements();
    if (statementsCtx) {
        // Delegate to the main visitStatements which should be public/protected on visitor
        const blockStmt = visitor.visitStatements(statementsCtx);
        return blockStmt;
    } else {
        console.warn("Local_block context missing statements. Assuming empty block.");
        return visitor.createNode('BlockStatement', { body: [] }, ctx);
    }
}

// Optional: If BlockContext is used elsewhere
// export function visitBlockImpl(visitor: ESTreeVisitor, ctx: BlockContext): BlockStatement | null {
//     console.warn("Visiting potentially redundant BlockContext");
//     const statementsCtx = ctx.statements();
//     if (statementsCtx) {
//         return visitor.visitStatements(statementsCtx); // Delegate
//     } else {
//         console.error("Block context missing statements. Assuming empty block.");
//         return visitor.createNode('BlockStatement', { body: [] }, ctx);
//     }
// } 