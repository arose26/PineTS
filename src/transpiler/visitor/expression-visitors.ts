// src/visitor/expression-visitors.ts
import {
    // Import necessary ANTLR contexts for expressions
    ExpressionContext,
    Conditional_expressionContext,
    Conditional_expression_ruleContext,
    Disjunction_expressionContext,
    Disjunction_expression_ruleContext,
    Conjunction_expressionContext,
    Conjunction_expression_ruleContext,
    Equality_expressionContext,
    Equality_expression_ruleContext,
    Inequality_expressionContext,
    Inequality_expression_ruleContext,
    Additive_expressionContext,
    Multiplicative_expressionContext,
    Unary_expressionContext,
    Unary_opContext,
    Primary_expressionContext,
    Primary_expression_attributeContext,
    Primary_expression_callContext,
    Primary_expression_subscriptContext,
    Primary_expression_fallbackContext,
    Argument_listContext,
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
    NameContext, // For visitName
    Name_loadContext, // For atomic_expression
    Name_storeContext, // For argument_definition name
} from '../generated/grammar/PinescriptParser';
import { ParserRuleContext, Token } from 'antlr4ts';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { PinescriptLexer } from '../generated/grammar/PinescriptLexer'; // Import lexer for COLON

// Import ESTree types
import {
    BaseNode, Statement, Expression, Identifier, Literal, BlockStatement,
    CallExpression, AssignmentExpression, MemberExpression, BinaryExpression, UnaryExpression,
    ConditionalExpression, LogicalExpression, ArrayExpression, UpdateExpression,
    SequenceExpression, Property, SpreadElement, Pattern, 
    VariableDeclarator, // Needed? Check usage
    IfStatement, ForStatement, ForInStatement, WhileStatement // Needed for StructureExpression
} from '../estree-types';

// Import the main visitor class type
import { ESTreeVisitor } from '../ESTreeVisitor';

// Import missing operator types
import {
    BinaryOperator,
    LogicalOperator
} from '../estree-types';

// --- Expression Helpers ---

/**
 * Helper to visit a list of left-associative binary/logical/comparison operators.
 * Returns a flat list: [operand1, operator1_text, operand2, operator2_text, operand3, ...]
 */
function visitLeftAssociativeList(visitor: ESTreeVisitor, ctx: RuleNode): (Expression | string)[] {
    const result: (Expression | string)[] = [];
    if (ctx.childCount === 0) return [];

    for (let i = 0; i < ctx.childCount; i++) {
        const child = ctx.getChild(i);
        if (i % 2 === 0) { // Operand (Expression)
            const operand = visitor.visit(child);
            if (operand && visitor.isExpression(operand)) {
                result.push(operand);
            } else {
                console.error(`Expected expression operand, got: ${(operand as any)?.type ?? 'non-node'} at index ${i} in context: ${ctx.text}`);
                return []; // Error
            }
        } else { // Operator (TerminalNode or specific context)
             if (child instanceof TerminalNode) {
                 result.push(child.text);
             } else if (child instanceof RuleNode && child.childCount === 1 && child.getChild(0) instanceof TerminalNode) {
                 result.push(child.getChild(0).text);
             } else {
                 console.warn("Using generic text for operator node:", child.constructor.name);
                 result.push(child.text);
             }
        }
    }
    // Basic validation removed here, handled by buildTree caller
    return result;
}

/**
 * Builds a left-associative tree from a flat list of operands and operators.
 */
function buildLeftAssociativeTree(
    visitor: ESTreeVisitor,
    items: (Expression | string)[],
    nodeType: 'BinaryExpression' | 'LogicalExpression'
): Expression | null {
    if (items.length === 0) return null;
    if (items.length === 1) {
        return visitor.isExpression(items[0]) ? items[0] : null;
    }

    if (!visitor.isExpression(items[0])) {
        console.error("Expected first item to be an expression, got:", items[0]);
        return null;
    }
    let left: Expression = items[0];

    for (let i = 1; i < items.length; i += 2) {
        const operator = items[i];
        const right = items[i + 1];

        if (typeof operator !== 'string' || !right || !visitor.isExpression(right)) {
             console.error(`Invalid operator/operand pair for ${nodeType}:`, operator, right);
             return null;
        }

        let esOperator: string = operator;
        if (nodeType === 'LogicalExpression') {
            if (operator.toUpperCase() === 'OR') esOperator = '||';
            else if (operator.toUpperCase() === 'AND') esOperator = '&&';
            else if (esOperator !== '||' && esOperator !== '&&') {
                console.error(`Invalid logical operator: ${operator}`);
                return null;
            }
        } else if (nodeType === 'BinaryExpression') {
             if (operator === 'EQEQUAL' || operator === '==') esOperator = '=='; 
             else if (operator === 'NOTEQUAL' || operator === '!=') esOperator = '!=';
             // Keep others like +, -, *, /, %, <, <=, >, >= as is (assuming grammar matches JS)
        }

        const newNode = visitor.createNode(nodeType, {
             operator: esOperator as any, // Cast needed due to string union complexity
             left: left,
             right: right,
        });
        if (!newNode) return null; // Propagate createNode failure
        left = newNode;
    }
    return left;
}

/**
 * Handles comparison chains like a < b < c.
 * Builds a nested BinaryExpression structure for left-to-right evaluation.
 */
function visitComparisonChain(visitor: ESTreeVisitor, ctx: RuleNode): Expression | null {
    if (ctx.childCount === 1) {
        return visitor.visit(ctx.getChild(0)) as Expression | null;
    }
    const items = visitLeftAssociativeList(visitor, ctx);
    if (!items || items.length === 0) {
         console.error("Failed to parse comparison chain items for:", ctx.text);
         return null;
    }
    if (items.length === 1 && visitor.isExpression(items[0])) {
         return items[0];
    }
    if (items.length < 3 || items.length % 2 === 0) {
         console.error("Invalid comparison chain structure:", items, "for", ctx.text);
         return null;
    }
    return buildLeftAssociativeTree(visitor, items, 'BinaryExpression');
}


// --- Exported Expression Visitor Implementation Functions ---

export function visitExpressionImpl(visitor: ESTreeVisitor, ctx: ExpressionContext): Expression | null {
    // Delegates down the precedence chain
    const conditionalCtx = ctx.conditional_expression();
    if (conditionalCtx) {
        return visitor.visit(conditionalCtx);
    }
    console.error("Expression context does not contain conditional_expression");
    return null;
}

export function visitConditionalExpressionImpl(visitor: ESTreeVisitor, ctx: Conditional_expressionContext): Expression | null {
    const ruleCtx = ctx.conditional_expression_rule();
    if (ruleCtx) {
        return visitConditionalExpressionRuleImpl(visitor, ruleCtx);
    }
    const disjunctionCtx = ctx.disjunction_expression();
    if (disjunctionCtx) {
         return visitor.visit(disjunctionCtx);
    }
    console.error("Conditional_expression context has neither rule nor disjunction");
    return null;
}

export function visitConditionalExpressionRuleImpl(visitor: ESTreeVisitor, ctx: Conditional_expression_ruleContext): ConditionalExpression | null {
    const test = visitor.visit(ctx.disjunction_expression()) as Expression | null;
    const consequent = visitor.visit(ctx.expression(0)) as Expression | null;
    const alternate = visitor.visit(ctx.expression(1)) as Expression | null;
    if (test === null || consequent === null || alternate === null) {
        console.error("Missing parts for ConditionalExpressionRule");
        return null;
    }
    return visitor.createNode('ConditionalExpression', { test: test, consequent: consequent, alternate: alternate }, ctx);
}

// --- Logical Expressions ---

export function visitDisjunctionExpressionImpl(visitor: ESTreeVisitor, ctx: Disjunction_expressionContext): Expression | null {
    const ruleCtx = ctx.disjunction_expression_rule();
    if (ruleCtx) {
        return visitDisjunctionExpressionRuleImpl(visitor, ruleCtx);
    }
    const conjunctionCtx = ctx.conjunction_expression();
    if (conjunctionCtx) {
        return visitor.visit(conjunctionCtx);
    }
    console.error("Disjunction_expression context has neither rule nor conjunction");
    return null;
}

export function visitDisjunctionExpressionRuleImpl(visitor: ESTreeVisitor, ctx: Disjunction_expression_ruleContext): Expression | null {
    const items = visitLeftAssociativeList(visitor, ctx);
    if (!items || items.length < 3) {
         console.error("Invalid structure for disjunction rule");
         return items?.length === 1 && visitor.isExpression(items[0]) ? items[0] : null;
    }
    return buildLeftAssociativeTree(visitor, items, 'LogicalExpression');
}

export function visitConjunctionExpressionImpl(visitor: ESTreeVisitor, ctx: Conjunction_expressionContext): Expression | null {
    const ruleCtx = ctx.conjunction_expression_rule();
    if (ruleCtx) {
        return visitConjunctionExpressionRuleImpl(visitor, ruleCtx);
    }
    const equalityCtx = ctx.equality_expression();
    if (equalityCtx) {
         return visitor.visit(equalityCtx);
    }
    console.error("Conjunction_expression context has neither rule nor equality");
    return null;
}

export function visitConjunctionExpressionRuleImpl(visitor: ESTreeVisitor, ctx: Conjunction_expression_ruleContext): Expression | null {
    const items = visitLeftAssociativeList(visitor, ctx);
     if (!items || items.length < 3) {
         console.error("Invalid structure for conjunction rule");
         return items?.length === 1 && visitor.isExpression(items[0]) ? items[0] : null;
    }
    return buildLeftAssociativeTree(visitor, items, 'LogicalExpression');
}

// --- Comparison Expressions ---

export function visitEqualityExpressionImpl(visitor: ESTreeVisitor, ctx: Equality_expressionContext): Expression | null {
    const ruleCtx = ctx.equality_expression_rule();
    if (ruleCtx) {
        // *** START CUSTOM LOGIC FOR EQUALITY RULE ***
        let leftOperand = visitor.visit(ruleCtx.inequality_expression()) as Expression | null;
        if (!leftOperand) return null;

        const trailingPairs = ruleCtx.equality_trailing_pair();
        for (const pair of trailingPairs) {
            let operator: BinaryOperator | LogicalOperator | null = null;
            let rightOperandCtx: Inequality_expressionContext | null = null;

            if (pair.equal_trailing_pair()) {
                operator = '=='; // NOTE: PineScript '==' might need mapping to '===' depending on desired JS behavior
                rightOperandCtx = pair.equal_trailing_pair()!.inequality_expression();
            } else if (pair.not_equal_trailing_pair()) {
                operator = '!='; // NOTE: PineScript '!=' might need mapping to '!=='
                rightOperandCtx = pair.not_equal_trailing_pair()!.inequality_expression();
            }

            if (!operator || !rightOperandCtx) {
                console.error("Failed to extract operator/operand from equality_trailing_pair");
                return null; // Or handle error appropriately
            }

            const rightOperand = visitor.visit(rightOperandCtx) as Expression | null;
            if (!rightOperand) return null;

            // Create BinaryExpression, making current leftOperand the left side
            // Add explicit type annotation for newNode
            const newNode: BinaryExpression | null = visitor.createNode('BinaryExpression', {
                operator: operator,
                left: leftOperand,
                right: rightOperand,
            }, pair); // Use pair context for location info

            if (!newNode) return null;
            leftOperand = newNode; // Result becomes the left operand for the next pair
        }
        return leftOperand; // Return the final built expression tree
        // *** END CUSTOM LOGIC FOR EQUALITY RULE ***
    }
    const inequalityCtx = ctx.inequality_expression();
    if (inequalityCtx) {
        return visitor.visit(inequalityCtx);
    }
    console.error("Equality_expression context has neither rule nor inequality");
    return null;
}

export function visitInequalityExpressionImpl(visitor: ESTreeVisitor, ctx: Inequality_expressionContext): Expression | null {
    const ruleCtx = ctx.inequality_expression_rule();
    if (ruleCtx) {
        // *** START CUSTOM LOGIC FOR INEQUALITY RULE ***
        let leftOperand = visitor.visit(ruleCtx.additive_expression()) as Expression | null;
        if (!leftOperand) return null;

        const trailingPairs = ruleCtx.inequality_trailing_pair();
        for (const pair of trailingPairs) {
            let operator: BinaryOperator | null = null;
            let rightOperandCtx: Additive_expressionContext | null = null;

            // Check each specific trailing pair type
            if (pair.less_than_equal_trailing_pair()) {
                operator = '<=';
                rightOperandCtx = pair.less_than_equal_trailing_pair()!.additive_expression();
            } else if (pair.less_than_trailing_pair()) {
                operator = '<';
                rightOperandCtx = pair.less_than_trailing_pair()!.additive_expression();
            } else if (pair.greater_than_equal_trailing_pair()) {
                operator = '>=';
                rightOperandCtx = pair.greater_than_equal_trailing_pair()!.additive_expression();
            } else if (pair.greater_than_trailing_pair()) {
                operator = '>';
                rightOperandCtx = pair.greater_than_trailing_pair()!.additive_expression();
            }

            if (!operator || !rightOperandCtx) {
                console.error("Failed to extract operator/operand from inequality_trailing_pair");
                return null; // Or handle error appropriately
            }

            const rightOperand = visitor.visit(rightOperandCtx) as Expression | null;
            if (!rightOperand) return null;

            // Create BinaryExpression, making current leftOperand the left side
            // Add explicit type annotation for newNode
            const newNode: BinaryExpression | null = visitor.createNode('BinaryExpression', {
                operator: operator,
                left: leftOperand,
                right: rightOperand,
            }, pair); // Use pair context for location info

            if (!newNode) return null;
            leftOperand = newNode; // Result becomes the left operand for the next pair
        }
        return leftOperand; // Return the final built expression tree
        // *** END CUSTOM LOGIC FOR INEQUALITY RULE ***
    }
    const additiveCtx = ctx.additive_expression();
    if (additiveCtx) {
        return visitor.visit(additiveCtx);
    }
    console.error("Inequality_expression context has neither rule nor additive");
    return null;
}

// --- Arithmetic Expressions ---

export function visitAdditiveExpressionImpl(visitor: ESTreeVisitor, ctx: Additive_expressionContext): Expression | null {
    const items = visitLeftAssociativeList(visitor, ctx);
     if (!items || items.length === 0) {
         console.error("Invalid structure for additive expression");
         return null;
     }
     if (items.length === 1 && visitor.isExpression(items[0])) {
         return items[0]; // Single operand
     }
    return buildLeftAssociativeTree(visitor, items, 'BinaryExpression');
}

export function visitMultiplicativeExpressionImpl(visitor: ESTreeVisitor, ctx: Multiplicative_expressionContext): Expression | null {
    const items = visitLeftAssociativeList(visitor, ctx);
    if (!items || items.length === 0) {
         console.error("Invalid structure for multiplicative expression");
         return null;
     }
    if (items.length === 1 && visitor.isExpression(items[0])) {
         return items[0]; // Single operand
    }
    return buildLeftAssociativeTree(visitor, items, 'BinaryExpression');
}

export function visitUnaryExpressionImpl(visitor: ESTreeVisitor, ctx: Unary_expressionContext): Expression | null {
    const opCtx = ctx.unary_op();
    if (opCtx) {
        const operatorText = opCtx.text;
        const jsOperator = operatorText === 'not' ? '!' : operatorText;
        if (jsOperator !== '+' && jsOperator !== '-' && jsOperator !== '!') {
             console.error(`Unsupported unary operator: ${operatorText}`);
             return null;
        }
        const argumentCtx = ctx.unary_expression();
        if (!argumentCtx) { /* error */ return null; }
        const argument = visitor.visit(argumentCtx) as Expression | null;
        if (!argument) { /* error */ return null; }

        // Handle ++/-- (prefix only for now)
        if ((jsOperator === '+' || jsOperator === '-') && argument.type === 'UnaryExpression') {
            const innerUnary = argument as UnaryExpression;
            if (innerUnary.operator === jsOperator) {
                 const updateOp = jsOperator === '+' ? '++' : '--';
                 return visitor.createNode('UpdateExpression', { operator: updateOp, argument: innerUnary.argument, prefix: true }, ctx);
            }
        }
        return visitor.createNode('UnaryExpression', { operator: jsOperator, argument: argument, prefix: true }, ctx);
    }
    const primaryCtx = ctx.primary_expression();
    if (primaryCtx) {
        return visitor.visit(primaryCtx);
    }
    console.error("Unary_expression context has neither operator nor primary");
    return null;
}

// --- Primary Expressions ---

export function visitPrimaryExpressionAttributeImpl(visitor: ESTreeVisitor, ctx: Primary_expression_attributeContext): MemberExpression | null {
    const object = visitor.visit(ctx.primary_expression()) as Expression | null;
    const nameLoadCtx = ctx.name_load();
    if (!object || !nameLoadCtx) { /* error */ return null; }
    const propertyName = nameLoadCtx.name();
    if (!propertyName) { /* error */ return null; }
    // Assumes visitName exists on visitor
    const property = visitor.visit(propertyName) as Identifier | null;
    if (!property || property.type !== 'Identifier') { /* error */ return null; }
    return visitor.createNode('MemberExpression', { object: object, property: property, computed: false, optional: false }, ctx);
}

export function visitPrimaryExpressionCallImpl(visitor: ESTreeVisitor, ctx: Primary_expression_callContext): CallExpression | null {
    const callee = visitor.visit(ctx.primary_expression()) as Expression | null;
    if (!callee) { /* error */ return null; }
    const argsCtx = ctx.argument_list();
    const args = argsCtx ? visitArgumentListImpl(visitor, argsCtx) : []; // Use helper
    // TODO: Handle template_spec_suffix?
    return visitor.createNode('CallExpression', { callee: callee, arguments: args, optional: false }, ctx);
}

export function visitPrimaryExpressionSubscriptImpl(visitor: ESTreeVisitor, ctx: Primary_expression_subscriptContext): MemberExpression | null {
    const object = visitor.visit(ctx.primary_expression()) as Expression | null;
    const sliceCtx = ctx.subscript_slice();
    if (!object || !sliceCtx) { /* error */ return null; }
    const propertyExpr = visitSubscriptSliceImpl(visitor, sliceCtx); // Delegate
    if (!propertyExpr) { /* error */ return null; }
    return visitor.createNode('MemberExpression', { object: object, property: propertyExpr, computed: true, optional: false }, ctx);
}

export function visitPrimaryExpressionFallbackImpl(visitor: ESTreeVisitor, ctx: Primary_expression_fallbackContext): Expression | null {
    const atomicCtx = ctx.atomic_expression();
    return atomicCtx ? visitor.visit(atomicCtx) : null;
}

// Helper for argument lists
function visitArgumentListImpl(visitor: ESTreeVisitor, ctx: Argument_listContext): (Expression | Property | SpreadElement)[] {
    const args: (Expression | Property | SpreadElement)[] = [];
    for (const argDefCtx of ctx.argument_definition()) {
        const argNode = visitArgumentDefinitionImpl(visitor, argDefCtx); // Delegate
        if (argNode) {
            args.push(argNode);
        }
    }
    return args;
}

export function visitArgumentDefinitionImpl(visitor: ESTreeVisitor, ctx: Argument_definitionContext): Expression | Property | null {
    const nameStoreCtx = ctx.name_store();
    const exprCtx = ctx.expression();
    if (!exprCtx) { /* error */ return null; }
    const valueExpr = visitor.visit(exprCtx) as Expression | null;
    if (!valueExpr) { /* error */ return null; }

    if (nameStoreCtx) {
        // Assumes visitName_store exists on visitor
        const keyIdentifier = visitor.visit(nameStoreCtx) as Identifier | null;
        if (!keyIdentifier || keyIdentifier.type !== 'Identifier') { /* error */ return null; }
        return visitor.createNode('Property', {
            key: keyIdentifier, value: valueExpr, kind: 'init',
            method: false, shorthand: false, computed: false
        }, ctx);
    } else {
        // TODO: Handle spread operator?
        return valueExpr;
    }
}

export function visitSubscriptSliceImpl(visitor: ESTreeVisitor, ctx: Subscript_sliceContext): Expression | null {
    const exprList = ctx.expression();
    if (!exprList || exprList.length === 0) { /* error */ return null; }
    // Check if a COLON terminal node exists among the children
    let hasColon = false;
    for(let i = 0; i < ctx.childCount; i++) {
        const child = ctx.getChild(i);
        if (child instanceof TerminalNode && child.symbol.type === PinescriptLexer.COLON) {
            hasColon = true;
            break;
        }
    }
    if (exprList.length > 1 || hasColon) {
        console.warn(`Complex subscript/slice not fully supported: ${ctx.text}. Using first expression only.`);
    }
    return visitor.visit(exprList[0]);
}

// --- Atomic Expressions ---

export function visitAtomicExpressionImpl(visitor: ESTreeVisitor, ctx: Atomic_expressionContext): Expression | null {
    if (ctx.name_load()) {
        // Assumes visitName_load exists
        return visitor.visit(ctx.name_load()!) as Identifier | null;
    } 
    if (ctx.literal_expression()) {
        return visitLiteralExpressionImpl(visitor, ctx.literal_expression()!); // Delegate
    } 
    if (ctx.grouped_expression()) {
        return visitGroupedExpressionImpl(visitor, ctx.grouped_expression()!); // Delegate
    }
    if (ctx.tuple_expression()) {
        return visitTupleExpressionImpl(visitor, ctx.tuple_expression()!); // Delegate
    }
    console.warn("Unknown atomic_expression type:", ctx.text);
    return null;
}

export function visitLiteralExpressionImpl(visitor: ESTreeVisitor, ctx: Literal_expressionContext): Literal | null {
    if (ctx.literal_number()) return visitLiteralNumberImpl(visitor, ctx.literal_number()!);
    if (ctx.literal_string()) return visitLiteralStringImpl(visitor, ctx.literal_string()!);
    if (ctx.literal_bool()) return visitLiteralBoolImpl(visitor, ctx.literal_bool()!);
    if (ctx.literal_color()) return visitLiteralColorImpl(visitor, ctx.literal_color()!);
    console.warn("Unknown literal_expression type");
    return null;
}

// Handles Literal_numberContext by looking for specific terminals
export function visitLiteralNumberImpl(visitor: ESTreeVisitor, ctx: Literal_numberContext): Literal | null {
    let rawValue = ctx.text;
    let value: number | null = null;
    let sourceToken: Token | undefined;

    // Assume Literal_numberContext primarily uses the NUMBER terminal
    const numNode = ctx.NUMBER();
    if (numNode) {
        sourceToken = numNode.symbol;
        try {
            value = parseFloat(rawValue);
            if (value === null || isNaN(value)) {
                console.error(`Parsed number resulted in NaN or null: ${rawValue}`);
                return null;
            }
        } catch (e) {
            console.error(`Error parsing number ${rawValue}:`, e);
            return null;
        }
    } else {
        // If NUMBER is not present, this context is structured unexpectedly
        console.error(`Literal_numberContext missing expected NUMBER terminal: ${rawValue}`);
        return null;
    }

    // We should have a sourceToken if numNode was found
    if (!sourceToken) {
         console.error("Consistency error: Found NUMBER node but no token?", rawValue);
         // Fallback: create node without location
         return visitor.createNode('Literal', { value: value, raw: rawValue }); 
    }

    return visitor.createNode('Literal', { value: value, raw: rawValue }, sourceToken);
}

export function visitLiteralStringImpl(visitor: ESTreeVisitor, ctx: Literal_stringContext): Literal | null {
    const strToken = ctx.STRING()?.symbol;
    if (!strToken) { /* error */ return null; }
    const raw = strToken.text ?? '';
    let value: string = '';
    try { value = JSON.parse(raw); }
    catch(e) { value = raw.length >= 2 ? raw.substring(1, raw.length - 1) : ''; }
    return visitor.createNode('Literal', { value: value, raw: raw }, strToken);
}

export function visitLiteralBoolImpl(visitor: ESTreeVisitor, ctx: Literal_boolContext): Literal | null {
    const boolToken = ctx.TRUE()?.symbol ?? ctx.FALSE()?.symbol;
    if (!boolToken) { /* error */ return null; }
    const raw = boolToken.text ?? '';
    return visitor.createNode('Literal', { value: (raw === 'true'), raw: raw }, boolToken);
}

export function visitLiteralColorImpl(visitor: ESTreeVisitor, ctx: Literal_colorContext): Literal | null {
    const colorToken = ctx.COLOR()?.symbol;
    if (!colorToken) { /* error */ return null; }
    const raw = colorToken.text ?? '';
    return visitor.createNode('Literal', { value: raw, raw: raw }, colorToken);
}

export function visitGroupedExpressionImpl(visitor: ESTreeVisitor, ctx: Grouped_expressionContext): Expression | null {
    const exprCtx = ctx.expression();
    return exprCtx ? visitor.visit(exprCtx) : null;
}

export function visitTupleExpressionImpl(visitor: ESTreeVisitor, ctx: Tuple_expressionContext): ArrayExpression | null {
    const elements: (Expression | SpreadElement | null)[] = [];
    for (const exprCtx of ctx.expression()) {
        const visitedExpr = visitor.visit(exprCtx) as Expression | null;
        // TODO: Handle spread elements if grammar supports `...` here
        elements.push(visitedExpr);
    }
    return visitor.createNode('ArrayExpression', { elements: elements }, ctx);
}

// --- Specific Expression Types Not Directly Tied to Grammar Rule Names ---

// visitNumber is likely not needed if visitLiteralNumberImpl handles terminals directly
// export function visitNumberImpl(visitor: ESTreeVisitor, ctx: NumberContext): Literal | null { ... }

// visitMethodCall assumes Method_callContext exists
// export function visitMethodCallImpl(visitor: ESTreeVisitor, ctx: Method_callContext): CallExpression | null { ... } 