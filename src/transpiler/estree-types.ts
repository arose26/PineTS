/* eslint-disable @typescript-eslint/no-empty-interface */
// --- Basic ESTree Node Interfaces ---

/**
 * Base interface for all ESTree nodes.
 */
export interface BaseNode {
    type: string;
    range?: [number, number]; // Optional range property (start and end offsets)
    loc?: SourceLocation | null; // Optional location property (standard ESTree)
}

/**
 * Represents a position in the source code.
 */
export interface Position {
    line: number; // 1-based
    column: number; // 0-based
    offset: number; // 0-based character offset
}

/**
 * Represents a location span in the source code.
 */
export interface SourceLocation {
    source?: string | null; // Optional source file name
    start: Position;
    end: Position;
}

/**
 * Base interface for patterns used in assignments and declarations.
 */
export interface Pattern extends BaseNode { }

/**
 * Represents an array pattern, e.g., `[a, b] = arr;`
 */
export interface ArrayPattern extends Pattern {
    type: 'ArrayPattern';
    elements: (Pattern | null)[];
}

/**
 * Represents a spread element, e.g., `...rest`.
 */
export interface SpreadElement extends BaseNode {
    type: 'SpreadElement';
    argument: Expression;
}

/**
 * The top-level node representing the entire script.
 */
export interface Program extends BaseNode {
    type: 'Program';
    body: Statement[];
    sourceType: 'script' | 'module';
}

/**
 * Base interface for all statements.
 */
export interface Statement extends BaseNode { }

/**
 * Base interface for all expressions.
 */
export interface Expression extends BaseNode { }

/**
 * A statement consisting of a single expression.
 */
export interface ExpressionStatement extends Statement {
    type: 'ExpressionStatement';
    expression: Expression;
}

/**
 * A variable declaration statement (`var`, `let`, `const`).
 */
export interface VariableDeclaration extends Statement {
    type: 'VariableDeclaration';
    declarations: VariableDeclarator[];
    kind: 'var' | 'let' | 'const';
}

/**
 * An identifier (variable name, function name, etc.).
 */
export interface Identifier extends Expression, Pattern {
    type: 'Identifier';
    name: string;
}

/**
 * A literal value (string, number, boolean, null, RegExp, BigInt).
 */
export interface Literal extends Expression {
    type: 'Literal';
    value: string | number | boolean | null | RegExp | bigint;
    raw: string; // The raw source text of the literal
}

/**
 * Represents a function or method call.
 */
export interface CallExpression extends Expression {
    type: 'CallExpression';
    callee: Expression; // The function being called
    arguments: (Expression | Property | SpreadElement)[]; // Arguments passed
    optional?: boolean; // For optional chaining `?.()`
}

/**
 * Represents an assignment operation.
 */
export interface AssignmentExpression extends Expression {
    type: 'AssignmentExpression';
    operator: string; // Assignment operator (e.g., '=', '+=')
    left: Identifier | MemberExpression | Pattern; // Left-hand side of assignment
    right: Expression; // Right-hand side of assignment
}

/**
 * Represents accessing a property of an object (`obj.prop` or `obj[prop]`).
 */
export interface MemberExpression extends Expression, Pattern {
    type: 'MemberExpression';
    object: Expression; // The object being accessed
    property: Identifier | Expression; // The property being accessed
    computed: boolean; // `true` if using bracket notation `[]`
    optional?: boolean; // For optional chaining `?.`
}

/**
 * Operators used in binary expressions.
 */
export type BinaryOperator =
    | '==' | '!=' | '===' | '!=='
    | '<' | '<=' | '>' | '>='
    | '<<' | '>>' | '>>>'
    | '+' | '-' | '*' | '/' | '%'
    | '|' | '^' | '&' | 'in'
    | 'instanceof';

/**
 * Represents a binary operation (e.g., `a + b`, `a === b`).
 */
export interface BinaryExpression extends Expression {
    type: 'BinaryExpression';
    operator: BinaryOperator | string; // Allow string for potential non-standard ops
    left: Expression;
    right: Expression;
}

/**
 * Operators used in unary expressions.
 */
export type UnaryOperator = '-' | '+' | '!' | '~' | 'typeof' | 'void' | 'delete';

/**
 * Represents a unary operation (e.g., `-a`, `!b`, `typeof c`).
 */
export interface UnaryExpression extends Expression {
    type: 'UnaryExpression';
    operator: UnaryOperator | string; // Allow string for non-standard
    argument: Expression;
    prefix: boolean; // `true` if operator comes before argument
}

/**
 * Represents a conditional (ternary) operation (`test ? consequent : alternate`).
 */
export interface ConditionalExpression extends Expression {
    type: 'ConditionalExpression';
    test: Expression;
    consequent: Expression;
    alternate: Expression;
}

/**
 * A single declarator within a variable declaration.
 */
export interface VariableDeclarator extends BaseNode {
    type: 'VariableDeclarator';
    id: Identifier | Pattern; // The variable/pattern being declared
    init: Expression | null; // The initializer expression, if any
}

/**
 * Operators used in logical expressions.
 */
export type LogicalOperator = '&&' | '||';

/**
 * Represents a logical operation (`a && b`, `a || b`).
 */
export interface LogicalExpression extends Expression {
    type: 'LogicalExpression';
    operator: LogicalOperator;
    left: Expression;
    right: Expression;
}

/**
 * Represents a property in an object literal or pattern.
 * Also used for named arguments in function calls.
 */
export interface Property extends BaseNode {
    type: 'Property';
    key: Expression | PrivateIdentifier; // Property key/name
    value: Expression | Pattern;        // Property value
    kind: 'init' | 'get' | 'set';      // Kind of property
    method: boolean;                   // If the property is a method
    shorthand: boolean;                // If using shorthand `{x}` syntax
    computed: boolean;                 // If the key is computed `{[key]: val}`
}

/**
 * Represents a private identifier (e.g., `#privateField`).
 */
interface PrivateIdentifier extends BaseNode {
    type: 'PrivateIdentifier';
    name: string;
}

/**
 * Represents an `if` statement.
 */
export interface IfStatement extends Statement {
    type: 'IfStatement';
    test: Expression;                 // The condition
    consequent: Statement;            // The block executed if condition is true
    alternate: Statement | null;     // The `else` block, if any
}

/**
 * Represents a block of statements `{ ... }`.
 */
export interface BlockStatement extends Statement {
    type: 'BlockStatement';
    body: Statement[]; // The list of statements in the block
}

/**
 * Represents a function declaration.
 */
export interface FunctionDeclaration extends Statement {
    type: 'FunctionDeclaration';
    id: Identifier | null; // Function name (null for default exports)
    params: Pattern[];     // List of parameters
    body: BlockStatement;  // Function body
    generator: boolean;    // If it's a generator function (`function*`)
    async: boolean;        // If it's an async function (`async function`)
    expression: boolean;   // If the body is an expression (arrow function shorthand)
}

/**
 * Represents a `return` statement.
 */
export interface ReturnStatement extends Statement {
    type: 'ReturnStatement';
    argument: Expression | null; // The value being returned, if any
    implicit?: boolean; // Flag to indicate if this was implicit
}

/**
 * Represents an assignment pattern, typically used for default parameter values.
 */
export interface AssignmentPattern extends Pattern {
    type: 'AssignmentPattern';
    left: Identifier; // The parameter identifier
    right: Expression; // The default value expression
}

/**
 * Represents a `break` statement.
 */
export interface BreakStatement extends Statement {
    type: 'BreakStatement';
    label: Identifier | null; // Optional label to break to
}

/**
 * Represents a `continue` statement.
 */
export interface ContinueStatement extends Statement {
    type: 'ContinueStatement';
    label: Identifier | null; // Optional label to continue at
}

/**
 * Represents a standard `for` loop.
 */
export interface ForStatement extends Statement {
    type: 'ForStatement';
    init: VariableDeclaration | Expression | null; // Initialization part
    test: Expression | null;                      // Condition part
    update: Expression | null;                    // Update part
    body: Statement;                              // Loop body
}

/**
 * Represents a `for...in` loop.
 */
export interface ForInStatement extends Statement {
    type: 'ForInStatement';
    left: VariableDeclaration | Pattern; // Left-hand side (variable or pattern)
    right: Expression;                  // Object being iterated over
    body: Statement;                    // Loop body
    each: boolean; // Typically false for `for...in`
}

/**
 * Represents a `while` loop.
 */
export interface WhileStatement extends Statement {
    type: 'WhileStatement';
    test: Expression; // Loop condition
    body: Statement;  // Loop body
}

/**
 * Represents an array literal `[...]`.
 */
export interface ArrayExpression extends Expression {
    type: 'ArrayExpression';
    elements: (Expression | SpreadElement | null)[]; // Elements in the array
}

/**
 * Represents an update expression (`++a`, `a--`).
 */
export interface UpdateExpression extends Expression {
    type: 'UpdateExpression';
    operator: '++' | '--'; // Increment or decrement operator
    argument: Expression;   // Expression being updated
    prefix: boolean;        // `true` if operator is before the argument
}

/**
 * Represents a sequence of expressions, evaluated left-to-right,
 * with the result being the last expression.
 */
export interface SequenceExpression extends Expression {
    type: 'SequenceExpression';
    expressions: Expression[]; // Expressions in the sequence
}

/**
 * Represents an empty statement (`;`).
 */
export interface EmptyStatement extends Statement {
    type: 'EmptyStatement';
}

/**
 * A union type representing any possible ESTree node generated by this visitor.
 */
export type ESTreeNode =
    | Program
    | Statement
    | Expression
    | Pattern
    | VariableDeclarator
    | Property
    | SpreadElement
    | BaseNode; // Include BaseNode for safety, though specific types are preferred 