import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { ParserRuleContext, Token } from 'antlr4ts';

// Import the generated visitor interface
import { PinescriptParserVisitor } from './generated/grammar/PinescriptParserVisitor';

// Import ANTLR Parser contexts needed in this core file or for temporary methods
import {
    StartContext,
    Start_scriptContext,
    StatementsContext,
    StatementContext,
    Simple_statementContext,
    Compound_statement_with_blockContext,
    // Contexts needed for delegated methods
    Expression_statementContext,
    Import_statementContext,
    Break_statementContext,
    Continue_statementContext,
    Structure_statementContext,
    StructureContext,
    If_structureContext,
    If_structure_elifContext,
    If_structure_elseContext,
    Elif_structureContext,       // Already imported for previous temp methods
    Elif_structure_elifContext,
    Elif_structure_elseContext,
    Else_blockContext,           // Already imported
    For_structureContext,
    For_structure_toContext,
    For_structure_inContext,
    While_structureContext,
    Switch_structureContext,
    Switch_casesContext,
    Switch_pattern_caseContext,
    Switch_default_caseContext,
    Local_blockContext           // Already imported
} from './generated/grammar/PinescriptParser';

// Import the generated lexer for token types
import { PinescriptLexer } from './generated/grammar/PinescriptLexer';

// Import the extracted ESTree types
import {
    // Base types
    BaseNode, Position, SourceLocation, Pattern,
    // Core nodes
    Program, Statement, Expression, Identifier, Literal, BlockStatement,
    // Statements
    ExpressionStatement, VariableDeclaration, IfStatement, BreakStatement, ContinueStatement,
    ForStatement, ForInStatement, WhileStatement, ReturnStatement, EmptyStatement,
    // Expressions
    CallExpression, AssignmentExpression, MemberExpression, BinaryExpression, UnaryExpression,
    ConditionalExpression, LogicalExpression, ArrayExpression, UpdateExpression, SequenceExpression,
    // Declarators/Helpers
    VariableDeclarator, ArrayPattern, SpreadElement, Property, AssignmentPattern,
    FunctionDeclaration,
    // Operator types
    BinaryOperator, LogicalOperator,
    // Union type
    ESTreeNode
} from './estree-types';

// Import the statement visitor implementation functions
import {
    visitStatementImpl,
    visitSimpleStatementImpl,
    visitCompoundStatementWithBlockImpl,
    visitExpressionStatementImpl,
    visitImportStatementImpl,
    visitBreakStatementImpl,
    visitContinueStatementImpl,
    visitStructureStatementImpl,
    visitStructureImpl,
    visitIfStructureImpl,
    visitIfStructureElifImpl,
    visitIfStructureElseImpl,
    visitElifStructureImpl,
    visitElifStructureElifImpl,
    visitElifStructureElseImpl,
    visitElseBlockImpl,
    buildIfStatementImpl,
    visitForStructureImpl,
    visitForStructureToImpl,
    visitForStructureInImpl,
    getForIteratorInfoImpl, // Note: This is a helper, not a direct visitor method
    visitWhileStructureImpl,
    visitSwitchStructureImpl,
    visitSwitchCasesImpl,
    visitSwitchPatternCaseImpl,
    visitSwitchDefaultCaseImpl,
    visitLocalBlockImpl
    // Add other statement-related imports here
} from './visitor/statement-visitors';

// Import the expression visitor implementation functions
import {
    visitExpressionImpl,
    visitConditionalExpressionImpl,
    visitConditionalExpressionRuleImpl,
    visitDisjunctionExpressionImpl,
    visitDisjunctionExpressionRuleImpl,
    visitConjunctionExpressionImpl,
    visitConjunctionExpressionRuleImpl,
    visitEqualityExpressionImpl,
    visitInequalityExpressionImpl,
    visitAdditiveExpressionImpl,
    visitMultiplicativeExpressionImpl,
    visitUnaryExpressionImpl,
    visitPrimaryExpressionAttributeImpl,
    visitPrimaryExpressionCallImpl,
    visitPrimaryExpressionSubscriptImpl,
    visitPrimaryExpressionFallbackImpl,
    visitArgumentDefinitionImpl,
    visitSubscriptSliceImpl,
    visitAtomicExpressionImpl,
    visitLiteralExpressionImpl,
    visitLiteralNumberImpl,
    visitLiteralStringImpl,
    visitLiteralBoolImpl,
    visitLiteralColorImpl,
    visitGroupedExpressionImpl,
    visitTupleExpressionImpl,
    // Add other expression-related imports here
} from './visitor/expression-visitors';

// Import necessary ANTLR Contexts for expression visitors
import {
    ExpressionContext,
    Conditional_expressionContext,
    Conditional_expression_ruleContext,
    Disjunction_expressionContext,
    Disjunction_expression_ruleContext,
    Conjunction_expressionContext,
    Conjunction_expression_ruleContext,
    Equality_expressionContext,
    Inequality_expressionContext,
    Additive_expressionContext,
    Multiplicative_expressionContext,
    Unary_expressionContext,
    Primary_expressionContext, // Needed if visitPrimary_expression is implemented
    Primary_expression_attributeContext,
    Primary_expression_callContext,
    Primary_expression_subscriptContext,
    Primary_expression_fallbackContext,
    Argument_definitionContext,
    Subscript_sliceContext,
    Atomic_expressionContext,
    Literal_expressionContext,
    Literal_numberContext,
    Literal_stringContext,
    Literal_boolContext,
    Literal_colorContext,
    Grouped_expressionContext,
    Tuple_expressionContext,
    // Add other expression-related contexts
} from './generated/grammar/PinescriptParser';

// Import the declaration/assignment visitor implementation functions
import {
    visitVarDeclarationStmtImpl,
    visitTupleDeclarationImpl,
    visitCompoundAssignmentImpl,
    visitCompoundVariableInitializationImpl,
    visitCompoundNameInitializationImpl,
    visitCompoundTupleInitializationImpl,
    visitCompoundReassignmentImpl,
    visitCompoundAugassignmentImpl,
    visitAssignmentTargetImpl,
    visitAssignmentTargetAttributeImpl,
    visitAssignmentTargetSubscriptImpl,
    visitAssignmentTargetNameImpl,
    visitAssignmentTargetGroupImpl,
    visitNameImpl,
    visitNameLoadImpl,
    visitNameStoreImpl,
    visitFunctionDeclarationImpl,
    visitParameterDefinitionImpl
    // Add other declaration/assignment imports here
} from './visitor/declaration-assignment-visitors';

// Import necessary ANTLR Contexts for declaration/assignment visitors
import {
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
    NameContext,
    Name_loadContext,
    Name_storeContext,
    Function_declarationContext,
    Parameter_definitionContext
    // Add other declaration/assignment contexts
} from './generated/grammar/PinescriptParser';

// --- Visitor Implementation ---
export class ESTreeVisitor extends AbstractParseTreeVisitor<BaseNode | null> implements PinescriptParserVisitor<BaseNode | null> {

    // Make helpers public (or protected) so implementation functions can access them
    protected defaultResult(): BaseNode | null {
        return null;
    }

    // Make createNode public
    public createNode<T extends BaseNode>(
        type: T['type'],
        properties: Omit<T, 'type' | 'range' | 'loc'>,
        ctxOrToken?: ParserRuleContext | Token
    ): T | null {
        const node = { type } as Partial<T>;
        if (ctxOrToken) {
            if (ctxOrToken instanceof ParserRuleContext) {
                 node.loc = this.getRuleLocation(ctxOrToken);
                 node.range = [ctxOrToken.start.startIndex, (ctxOrToken.stop ?? ctxOrToken.start).stopIndex + 1];
            } else { // Token
                 node.loc = this.getTokenLocation(ctxOrToken);
                 node.range = [ctxOrToken.startIndex, ctxOrToken.stopIndex + 1];
            }
        }
        for (const key in properties) {
            const propKey = key as keyof Omit<T, 'type' | 'range' | 'loc'>;
            if (properties[propKey] !== undefined && properties[propKey] !== null) {
                (node as any)[propKey] = properties[propKey];
            }
        }
        return node as T;
    }

    // Make location helpers public
    public getRuleLocation(ctx: ParserRuleContext): SourceLocation {
        const startToken = ctx.start;
        const stopToken = ctx.stop ?? startToken;
        return {
            start: {
                line: startToken.line,
                column: startToken.charPositionInLine,
                offset: startToken.startIndex
            },
            end: {
                line: stopToken.line,
                column: stopToken.charPositionInLine + (stopToken.text?.length ?? 1),
                offset: stopToken.stopIndex + 1
            }
        };
    }

     public getTokenLocation(token: Token): SourceLocation {
         return {
             start: {
                 line: token.line,
                 column: token.charPositionInLine,
                 offset: token.startIndex
             },
             end: {
                 line: token.line,
                 column: token.charPositionInLine + (token.text?.length ?? 1),
                 offset: token.stopIndex + 1
             }
         };
     }

    // Make type guards public
    public isStatement(node: any): node is Statement {
        return node && typeof node === 'object' && 'type' in node && (
            node.type.endsWith('Statement') ||
            node.type.endsWith('Declaration')
        );
    }

    public isExpression(node: any): node is Expression {
        return node && typeof node === 'object' && 'type' in node &&
               !this.isStatement(node) &&
               (node.type.endsWith('Expression') || node.type === 'Identifier' || node.type === 'Literal');
    }


    // --- Core Visitor Methods (Start, Top-Level Statements) ---
    visitStart(ctx: StartContext): Program | null {
        const scriptCtx = ctx.start_script();
        return scriptCtx ? this.visitStart_script(scriptCtx) : null;
    }

    visitStart_script(ctx: Start_scriptContext): Program | null {
        let body: Statement[] = [];
        const statementsCtx = ctx.statements();
        if (statementsCtx) {
            // visitStatements is now public
            const blockNode = this.visitStatements(statementsCtx);
            if (blockNode && blockNode.type === 'BlockStatement') {
                 body = blockNode.body;
            }
        }
        return this.createNode('Program', { body: body, sourceType: 'script' }, ctx);
    }

    // Make visitStatements public so it can be called by visitLocalBlockImpl
    public visitStatements(ctx: StatementsContext): BlockStatement | null {
        const statements: Statement[] = [];
        for (const statementCtx of ctx.statement()) {
            // Delegate visitStatement call
            const visitedNode = this.visitStatement(statementCtx);
            if (visitedNode && this.isStatement(visitedNode)) {
                statements.push(visitedNode);
            } else if (visitedNode && this.isExpression(visitedNode)) {
                const exprStmt = this.createNode('ExpressionStatement', { expression: visitedNode }, statementCtx);
                if (exprStmt) statements.push(exprStmt);
            } else if (visitedNode) {
                 // Safe type access
                 const typeInfo = (visitedNode as any)?.type ?? 'unknown';
                 console.warn(`visitStatement returned non-Statement/non-Expression node: ${typeInfo}`);
            }
        }
        return this.createNode('BlockStatement', { body: statements }, ctx);
    }

    // --- Delegate Statement Visitor Methods ---

    visitStatement(ctx: StatementContext): Statement | Expression | null {
        return visitStatementImpl(this, ctx);
    }

    visitSimple_statement(ctx: Simple_statementContext): Statement | Expression | null {
         // Note: The implementation function might return Expression or Statement
         // The caller (visitStatement) needs to handle wrapping Expression in ExpressionStatement if needed
         return visitSimpleStatementImpl(this, ctx);
    }

    visitCompound_statement_with_block(ctx: Compound_statement_with_blockContext): Statement | null {
        return visitCompoundStatementWithBlockImpl(this, ctx);
    }

    visitExpression_statement(ctx: Expression_statementContext): Expression | null {
        // This method returns Expression | null, caller wraps if needed
        return visitExpressionStatementImpl(this, ctx);
    }

    visitImport_statement(ctx: Import_statementContext): BaseNode | null {
        return visitImportStatementImpl(this, ctx);
    }

    visitBreak_statement(ctx: Break_statementContext): BreakStatement | null {
        return visitBreakStatementImpl(this, ctx);
    }

    visitContinue_statement(ctx: Continue_statementContext): ContinueStatement | null {
        return visitContinueStatementImpl(this, ctx);
    }

    visitStructure_statement(ctx: Structure_statementContext): Statement | null {
        return visitStructureStatementImpl(this, ctx);
    }

    visitStructure(ctx: StructureContext): Statement | null {
        return visitStructureImpl(this, ctx);
    }

    visitIf_structure(ctx: If_structureContext): IfStatement | null {
        return visitIfStructureImpl(this, ctx);
    }

    visitIf_structure_elif(ctx: If_structure_elifContext): IfStatement | null {
        return visitIfStructureElifImpl(this, ctx);
    }

    visitIf_structure_else(ctx: If_structure_elseContext): IfStatement | null {
        return visitIfStructureElseImpl(this, ctx);
    }

    visitElif_structure(ctx: Elif_structureContext): IfStatement | null {
        return visitElifStructureImpl(this, ctx);
    }

    visitElif_structure_elif(ctx: Elif_structure_elifContext): IfStatement | null {
        return visitElifStructureElifImpl(this, ctx);
    }

    visitElif_structure_else(ctx: Elif_structure_elseContext): IfStatement | null {
        return visitElifStructureElseImpl(this, ctx);
    }

    visitElse_block(ctx: Else_blockContext): BlockStatement | null {
        return visitElseBlockImpl(this, ctx);
    }

    // Note: buildIfStatementImpl is a helper, not a direct visitor method
    // It's called by other visit*Impl functions

    visitFor_structure(ctx: For_structureContext): ForStatement | ForInStatement | null {
        return visitForStructureImpl(this, ctx);
    }

    visitFor_structure_to(ctx: For_structure_toContext): ForStatement | null {
        return visitForStructureToImpl(this, ctx);
    }

    visitFor_structure_in(ctx: For_structure_inContext): ForInStatement | null {
        return visitForStructureInImpl(this, ctx);
    }
    
    // Note: getForIteratorInfoImpl is a helper

    visitWhile_structure(ctx: While_structureContext): WhileStatement | null {
        return visitWhileStructureImpl(this, ctx);
    }

    visitSwitch_structure(ctx: Switch_structureContext): Statement | null {
        return visitSwitchStructureImpl(this, ctx);
    }

    visitSwitch_cases(ctx: Switch_casesContext): any {
        return visitSwitchCasesImpl(this, ctx);
    }

    visitSwitch_pattern_case(ctx: Switch_pattern_caseContext): any {
        return visitSwitchPatternCaseImpl(this, ctx);
    }

    visitSwitch_default_case(ctx: Switch_default_caseContext): any {
        return visitSwitchDefaultCaseImpl(this, ctx);
    }

    visitLocal_block(ctx: Local_blockContext): BlockStatement | null {
        return visitLocalBlockImpl(this, ctx);
    }
    
    // visitBlock if needed (assuming Python-style func defs need it)
    // visitBlock(ctx: BlockContext): BlockStatement | null {
    //     return visitBlockImpl(this, ctx);
    // }

    // --- Delegate Expression Visitor Methods ---

    visitExpression(ctx: ExpressionContext): Expression | null {
        return visitExpressionImpl(this, ctx);
    }

    visitConditional_expression(ctx: Conditional_expressionContext): Expression | null {
        return visitConditionalExpressionImpl(this, ctx);
    }

    visitConditional_expression_rule(ctx: Conditional_expression_ruleContext): ConditionalExpression | null {
        return visitConditionalExpressionRuleImpl(this, ctx);
    }

    visitDisjunction_expression(ctx: Disjunction_expressionContext): Expression | null {
        return visitDisjunctionExpressionImpl(this, ctx);
    }

    visitDisjunction_expression_rule(ctx: Disjunction_expression_ruleContext): Expression | null {
        return visitDisjunctionExpressionRuleImpl(this, ctx);
    }

    visitConjunction_expression(ctx: Conjunction_expressionContext): Expression | null {
        return visitConjunctionExpressionImpl(this, ctx);
    }

    visitConjunction_expression_rule(ctx: Conjunction_expression_ruleContext): Expression | null {
        return visitConjunctionExpressionRuleImpl(this, ctx);
    }

    visitEquality_expression(ctx: Equality_expressionContext): Expression | null {
        return visitEqualityExpressionImpl(this, ctx);
    }

    visitInequality_expression(ctx: Inequality_expressionContext): Expression | null {
        return visitInequalityExpressionImpl(this, ctx);
    }

    visitAdditive_expression(ctx: Additive_expressionContext): Expression | null {
        return visitAdditiveExpressionImpl(this, ctx);
    }

    visitMultiplicative_expression(ctx: Multiplicative_expressionContext): Expression | null {
        return visitMultiplicativeExpressionImpl(this, ctx);
    }

    visitUnary_expression(ctx: Unary_expressionContext): Expression | null {
        return visitUnaryExpressionImpl(this, ctx);
    }

    // Primary expression delegation
    // visitPrimary_expression(ctx: Primary_expressionContext): Expression | null { ... }

    visitPrimary_expression_attribute(ctx: Primary_expression_attributeContext): MemberExpression | null {
        return visitPrimaryExpressionAttributeImpl(this, ctx);
    }

    visitPrimary_expression_call(ctx: Primary_expression_callContext): CallExpression | null {
        return visitPrimaryExpressionCallImpl(this, ctx);
    }

    visitPrimary_expression_subscript(ctx: Primary_expression_subscriptContext): MemberExpression | null {
        return visitPrimaryExpressionSubscriptImpl(this, ctx);
    }

    visitPrimary_expression_fallback(ctx: Primary_expression_fallbackContext): Expression | null {
        return visitPrimaryExpressionFallbackImpl(this, ctx);
    }

    visitArgument_definition(ctx: Argument_definitionContext): Expression | Property | null {
        return visitArgumentDefinitionImpl(this, ctx);
    }

    visitSubscript_slice(ctx: Subscript_sliceContext): Expression | null {
        return visitSubscriptSliceImpl(this, ctx);
    }

    visitAtomic_expression(ctx: Atomic_expressionContext): Expression | null {
        return visitAtomicExpressionImpl(this, ctx);
    }

    visitLiteral_expression(ctx: Literal_expressionContext): Literal | null {
        return visitLiteralExpressionImpl(this, ctx);
    }

    visitLiteral_number(ctx: Literal_numberContext): Literal | null {
        return visitLiteralNumberImpl(this, ctx);
    }

    visitLiteral_string(ctx: Literal_stringContext): Literal | null {
        return visitLiteralStringImpl(this, ctx);
    }

    visitLiteral_bool(ctx: Literal_boolContext): Literal | null {
        return visitLiteralBoolImpl(this, ctx);
    }

    visitLiteral_color(ctx: Literal_colorContext): Literal | null {
        return visitLiteralColorImpl(this, ctx);
    }

    visitGrouped_expression(ctx: Grouped_expressionContext): Expression | null {
        return visitGroupedExpressionImpl(this, ctx);
    }

    visitTuple_expression(ctx: Tuple_expressionContext): ArrayExpression | null {
        return visitTupleExpressionImpl(this, ctx);
    }

    // --- Delegate Declaration/Assignment Visitor Methods ---

    visitVar_declaration_stmt(ctx: Var_declaration_stmtContext): VariableDeclaration | null {
        return visitVarDeclarationStmtImpl(this, ctx);
    }

    visitTuple_declaration(ctx: Tuple_declarationContext): ArrayPattern | null {
        return visitTupleDeclarationImpl(this, ctx);
    }

    visitCompound_assignment(ctx: Compound_assignmentContext): VariableDeclaration | AssignmentExpression | null {
        return visitCompoundAssignmentImpl(this, ctx);
    }

    visitCompound_variable_initialization(ctx: Compound_variable_initializationContext): VariableDeclaration | null {
        return visitCompoundVariableInitializationImpl(this, ctx);
    }

    visitCompound_name_initialization(ctx: Compound_name_initializationContext): VariableDeclaration | null {
        return visitCompoundNameInitializationImpl(this, ctx);
    }

    visitCompound_tuple_initialization(ctx: Compound_tuple_initializationContext): VariableDeclaration | null {
        return visitCompoundTupleInitializationImpl(this, ctx);
    }

    visitCompound_reassignment(ctx: Compound_reassignmentContext): AssignmentExpression | null {
        return visitCompoundReassignmentImpl(this, ctx);
    }

    visitCompound_augassignment(ctx: Compound_augassignmentContext): AssignmentExpression | null {
        return visitCompoundAugassignmentImpl(this, ctx);
    }

    visitAssignment_target(ctx: Assignment_targetContext): Identifier | MemberExpression | null {
        return visitAssignmentTargetImpl(this, ctx);
    }

    visitAssignment_target_attribute(ctx: Assignment_target_attributeContext): MemberExpression | null {
        return visitAssignmentTargetAttributeImpl(this, ctx);
    }

    visitAssignment_target_subscript(ctx: Assignment_target_subscriptContext): MemberExpression | null {
        return visitAssignmentTargetSubscriptImpl(this, ctx);
    }

    visitAssignment_target_name(ctx: Assignment_target_nameContext): Identifier | null {
        return visitAssignmentTargetNameImpl(this, ctx);
    }

    visitAssignment_target_group(ctx: Assignment_target_groupContext): Identifier | MemberExpression | null {
        return visitAssignmentTargetGroupImpl(this, ctx);
    }

    visitName(ctx: NameContext): Identifier | null {
        return visitNameImpl(this, ctx);
    }

    visitName_load(ctx: Name_loadContext): Identifier | null {
        return visitNameLoadImpl(this, ctx);
    }

    visitName_store(ctx: Name_storeContext): Identifier | null {
        return visitNameStoreImpl(this, ctx);
    }

    visitFunction_declaration(ctx: Function_declarationContext): FunctionDeclaration | null {
        return visitFunctionDeclarationImpl(this, ctx);
    }

    visitParameter_definition(ctx: Parameter_definitionContext): Pattern | null {
        return visitParameterDefinitionImpl(this, ctx);
    }

    // --- Other visitor methods (Declarations) will be added/delegated later ---
    visitTerminal(node: TerminalNode): BaseNode | null {
        return null;
    }

    visitErrorNode(node: ErrorNode): BaseNode | null {
        console.error("Visiting Error Node:", node.text);
        return null;
    }

} // End of ESTreeVisitor class
