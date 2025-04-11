import { ScopeManager, VariableKind, CONTEXT_NAME } from './ScopeManager';
import {
    BaseNode, Program, ExpressionStatement, VariableDeclaration, Identifier, Literal,
    FunctionDeclaration, VariableDeclarator, MemberExpression, CallExpression, AssignmentExpression,
    Pattern, AssignmentPattern, ArrayPattern, Expression, Statement, Property, BlockStatement,
    IfStatement, ConditionalExpression, BinaryExpression, LogicalExpression, UnaryExpression,
    ReturnStatement, ForStatement, WhileStatement, ForInStatement,
    ArrayExpression, /* ObjectExpression, */ UpdateExpression, SpreadElement,
    BreakStatement, ContinueStatement, EmptyStatement, SequenceExpression // Added remaining types
    // TODO: Add ObjectExpression type and import when supported
    // ObjectPattern // TODO: Add ObjectPattern if/when needed and defined in estree-types
    // Import specific expression/statement types as needed
} from './estree-types'; // Assuming types are in estree-types.ts

// Define a general Node type as a union of all relevant specific types
// This might need expansion as more node types are handled
type Node = Program | ExpressionStatement | VariableDeclaration | Identifier | Literal |
            FunctionDeclaration | VariableDeclarator | MemberExpression | CallExpression |
            AssignmentExpression | Pattern | AssignmentPattern | ArrayPattern | Expression |
            Statement | Property | BaseNode; // Include BaseNode for broader compatibility if needed

// Helper functions (ported from Python, adapted for TS and class context)
function js_context_member(kind: string, scoped_name: string): string {
    // Generates $.kind.scoped_name
    return `${CONTEXT_NAME}.${kind}.${scoped_name}`;
}

function js_context_member_access(kind: string, scoped_name: string, index: number | string = 0): string {
    // Generates $.kind.scoped_name[index]
    return `${CONTEXT_NAME}.${kind}.${scoped_name}[${index}]`;
}

function js_init_call(target_ref: string, init_expr_code: string, index_expr_code?: string): string {
    // Generates $.init(targetVarRef, initExpr) or $.init(targetVarRef, initObject, indexExpr)
    if (index_expr_code !== undefined) {
        return `${CONTEXT_NAME}.init(${target_ref}, ${init_expr_code}, ${index_expr_code})`;
    } else {
        return `${CONTEXT_NAME}.init(${target_ref}, ${init_expr_code})`;
    }
}

function js_param_call(namespace: string, arg_code: string, index_code: string | undefined, param_id: string): string {
    // Generates namespace.param(arg, index, paramId)
    const index_arg = index_code !== undefined ? index_code : "undefined";
    return `${namespace}.param(${arg_code}, ${index_arg}, ${param_id})`;
}


export class PineTSVisitor {
    private scope_manager: ScopeManager;
    private parent_stack: BaseNode[] = []; // Simplified parent stack type for now

    constructor() {
        this.scope_manager = new ScopeManager();
    }

    private get_parent(): BaseNode | null { // Return BaseNode, narrow later
        return this.parent_stack.length > 0 ? this.parent_stack[this.parent_stack.length - 1] : null;
    }

     // Revised helper using the visitor instance
     private _get_index_code(prop_node: Expression | null): string { // Type prop_node more specifically
        if (!prop_node) {
            return "undefined";
        }
        // Add type guard for Literal before accessing value
        if (prop_node.type === 'Literal') {
            // Assign to new typed variable
            const literalNode = prop_node as Literal;
            if (typeof literalNode.value === 'number') {
                return String(literalNode.value);
            } else {
                 // Handle other literal types if necessary, otherwise transform
                 return this._pass2_transform(prop_node);
            }
        } else {
            // Transform complex index expressions
            return this._pass2_transform(prop_node);
        }
    }

    // --- Public Visit Method ---
    visit(node: BaseNode): string {
        if (!node || !node.type) {
            return "";
        }

        // --- Pass 1: Registration ---
        this.scope_manager = new ScopeManager(); // Re-init for pass 1
        this._pass1_register(node);

        // --- Pass 2: Transformation ---
        // Re-init scope manager for Pass 2 to ensure clean state for transformation logic
        // and correct scoped name generation based *only* on pass 1 registration.
        this.scope_manager = new ScopeManager();
        this._pass1_register(node); // Re-run registration with the fresh scope manager

        // Reset counters needed for Pass 2 specifically
        // TODO: Add methods to ScopeManager to reset counters if recreating is inefficient
        // this.scope_manager.resetParamCounter();
        // this.scope_manager.resetCacheCounter();

        const js_code = this._pass2_transform(node);

        return js_code;
    }

    // --- Pass 1 Methods ---
    private _pass1_register(node: BaseNode): void {
        if (node.type === 'Program') {
            // Assign to new typed variable
            const programNode = node as Program;
            programNode.body.forEach((stmt: Statement) => {
                this._pass1_register_statement(stmt);
            });
        }
        // Handle other top-level types if needed
    }

    private _pass1_register_statement(stmt: Statement): void { // Use Statement type
        switch (stmt.type) {
            case 'FunctionDeclaration':
                // stmt known as FunctionDeclaration here
                this._pass1_register_function_declaration(stmt as FunctionDeclaration);
                break;
            case 'VariableDeclaration':
                 // stmt known as VariableDeclaration here
                this._pass1_register_variable_declaration(stmt as VariableDeclaration);
                break;
            // Handle other statement types if necessary
        }
    }

    private _pass1_register_function_declaration(node: FunctionDeclaration): void {
        // node is FunctionDeclaration
        if (node.id?.type === 'Identifier') {
             // Assign to new typed variable
            const idNode = node.id as Identifier;
            this.scope_manager.add_context_bound_var(idNode.name, false);
        }
        node.params.forEach(param => { // param is Pattern
            let identifier: Identifier | null = null;
            if (param.type === 'Identifier') {
                // Assign to new typed variable
                const idParam = param as Identifier;
                identifier = idParam;
            } else if (param.type === 'AssignmentPattern') {
                // Assign to new typed variable
                const assignPattern = param as AssignmentPattern;
                if (assignPattern.left.type === 'Identifier') {
                    // Assign to new typed variable
                    const idLeft = assignPattern.left as Identifier;
                    identifier = idLeft;
                }
            }
            // TODO: Handle ArrayPattern, ObjectPattern parameters if needed for registration

             // Check identifier is not null before accessing name
            if (identifier) {
                 // Don't mark function params as root params here
                this.scope_manager.add_context_bound_var(identifier.name, false);
            }
        });
        // Do NOT process the body in pass 1
    }

    private _pass1_register_variable_declaration(node: VariableDeclaration): void {
        // Register top-level variable names
        const kind = node.kind as VariableKind; // Assuming 'const', 'let', 'var'
        node.declarations.forEach(decl => {
             // Move name access inside the type check
            if (decl.id.type === 'Identifier') {
                // Assign to new typed variable
                const idNode = decl.id as Identifier;
                const varName = idNode.name;
                // Only register if it's NOT already context-bound (e.g., a function name)
                if (!this.scope_manager.is_context_bound(varName)) {
                   // Add variable returns the scoped name, but we don't need it here
                   this.scope_manager.add_variable(varName, kind);
                }
            } else if (decl.id.type === 'ArrayPattern') {
                 // TODO: Implement registration logic for ArrayPattern elements if necessary
                 console.warn("Pass 1 registration for ArrayPattern not implemented.");
            } else if (decl.id.type === 'ObjectPattern') {
                // TODO: Implement registration logic for ObjectPattern elements if necessary
                console.warn("Pass 1 registration for ObjectPattern not implemented.");
            }
             // Python version didn't seem to register pattern elements in pass 1
        });
    }

    // --- Pass 2 Methods ---
    private _pass2_transform(node: BaseNode | null): string {
        if (!node) {
            // console.warn("Encountered null node during transformation.");
            return "undefined"; // Or handle as appropriate, e.g., empty string?
        }

        // Dispatch based on node type
        // Using `as any` temporarily to bypass complex conditional type inference
        // A better approach might involve explicit type checks or a more structured visitor pattern
        const visitor_method_name = `_transform_${node.type}` as keyof this;
        const visitor_method = (this as any)[visitor_method_name];

        if (typeof visitor_method === 'function') {
            // Track parent node
            this.parent_stack.push(node);
            const result = visitor_method.call(this, node);
            this.parent_stack.pop();
            return result;
        } else {
            console.warn(`Warning: No transformation method found for node type: ${node.type}`);
            return `/* Unsupported Node: ${node.type} */`;
        }
    }

    // --- Transformation Visitor Methods (Implement one by one) ---

    private _transform_Program(node: Program): string {
        // Wrap the output in `$ => { ... }`
        const body_code_lines = node.body.map(stmt => this._pass2_transform(stmt)).filter(line => line); // Filter empty lines/semicolons
        const inner_code = body_code_lines.join('\n  '); // Indent body
        return `${CONTEXT_NAME} => {\n  ${inner_code}\n}`;
    }

    private _transform_ExpressionStatement(node: ExpressionStatement): string {
        // Expressions used as statements need a semicolon
        const expr_code = this._pass2_transform(node.expression);
        return expr_code ? `${expr_code};` : ""; // Avoid lone semicolons if expression is empty
    }

    private _transform_VariableDeclaration(node: VariableDeclaration): string {
        const generated_assignments: string[] = [];
        const kind = node.kind as VariableKind; // 'const' or 'let'

        for (const decl of node.declarations) {
            // TODO: Handle ArrayPattern/ObjectPattern destructuring (complex)
            if (decl.id.type !== 'Identifier') {
                console.warn(`Warning: Skipping non-Identifier declaration in VariableDeclaration: ${decl.id.type}`);
                continue;
            }

            // Assign to new typed variable
            const idNode = decl.id as Identifier;
            const var_name = idNode.name;

            // Get unique scoped name (was added in pass 1 for top-level, add now for local)
            const scoped_name = this.scope_manager.add_variable(var_name, kind);

            // Create the target reference string (e.g., '$.let.glb1_aa')
            const target_ref = js_context_member(kind, scoped_name);

            // Transform the initializer expression
            const init_node = decl.init; // Can be null | Expression
            const init_code = init_node ? this._pass2_transform(init_node) : 'undefined';

            // Check for array indexing in initializer (like Python version)
            let index_expr_code: string | undefined = undefined;
            let init_obj_code: string = init_code; // Default to full init_code

            // Check type before accessing .computed and .object/.property
            if (init_node?.type === 'MemberExpression') {
                // Assert init_node as MemberExpression before accessing properties
                const memberExpr = init_node as MemberExpression;
                if (memberExpr.computed) {
                    // If init is like `someVar[index]`, transform `someVar` and `index`
                    init_obj_code = this._pass2_transform(memberExpr.object); // Re-transform object part
                    index_expr_code = this._get_index_code(memberExpr.property); // Use helper
                }
                 // Note: If init_node.computed is false (e.g., obj.prop), we don't use the special init
            }

            // Generate the $.init call
            const right_side = js_init_call(target_ref, init_obj_code, index_expr_code);

            // Generate the assignment string (e.g., '$.let.glb1_aa = $.init($.let.glb1_aa, 10);')
            const assignment_str = `${target_ref} = ${right_side};`;
            generated_assignments.push(assignment_str);
        }

        return generated_assignments.join("\n");
    }

     // --- Identifier Transformation ---
    private _should_add_zero_access(identifier_node: Identifier): boolean {
        const parent = this.get_parent();
        if (!parent) return true; // Default to adding [0] if no parent context

        // Use assertions immediately within each case
        switch(parent.type) {
            case 'MemberExpression': {
                const parentMemExpr = parent as MemberExpression;
                if (parentMemExpr.computed && parentMemExpr.object === identifier_node) return false;
                if (!parentMemExpr.computed && parentMemExpr.object === identifier_node) return false;
                 if (!parentMemExpr.computed && parentMemExpr.property === identifier_node) return false;
                break;
            }
            case 'CallExpression': {
                const parentCallExpr = parent as CallExpression;
                if (parentCallExpr.callee === identifier_node) return false;
                break;
            }
            case 'AssignmentExpression': {
                const parentAssignExpr = parent as AssignmentExpression;
                if (parentAssignExpr.left === identifier_node) return false;
                break;
            }
            case 'Property': {
                const parentProp = parent as Property;
                if (parentProp.key === identifier_node && !parentProp.computed) return false;
                if (parentProp.shorthand && parentProp.value === identifier_node) return false;
                break;
            }
            case 'FunctionDeclaration': {
                const parentFuncDecl = parent as FunctionDeclaration;
                if (parentFuncDecl.id === identifier_node) return false;
                 // Type param `p` explicitly as Pattern
                 if (parentFuncDecl.params.some((p: Pattern) => { // Add type Pattern to p
                     // Check type of p before accessing properties
                     if (p.type === 'Identifier' && p === identifier_node) return true;
                     if (p.type === 'AssignmentPattern') {
                         const assignP = p as AssignmentPattern;
                         // Check left type before accessing
                         if (assignP.left.type === 'Identifier' && assignP.left === identifier_node) return true;
                     }
                     return false;
                 })) return false;
                break;
            }
            case 'VariableDeclarator': {
                 const parentVarDecl = parent as VariableDeclarator;
                 if (parentVarDecl.id === identifier_node) return false;
                 break;
            }
            case 'AssignmentPattern': {
                 const parentAssignPattern = parent as AssignmentPattern;
                 if (parentAssignPattern.left === identifier_node) return false;
                 break;
            }
        }
        return true;
    }

    private _handle_builtin_identifier(name: string): string | null {
        // Handles CONTEXT_NAME and JS built-ins.
        if (name === CONTEXT_NAME) return name;
        if (['Math', 'NaN', 'undefined', 'Infinity', 'null', 'console', 'JSON', 'Object', 'Array', 'String', 'Number', 'Boolean', 'Date'].includes(name)) return name;
        return null;
    }

    private _handle_pine_series_identifier(name: string): string | null {
         const pine_series = [
            'open', 'high', 'low', 'close', 'volume',
            'hl2', 'hlc3', 'ohlc4',
            'time', 'timenow',
            'bar_index' // Added bar_index as common series
            // Add more as needed
        ];
        if (pine_series.includes(name)) {
            // Return the name directly, preamble will handle it
            return name; // Previously: `${CONTEXT_NAME}.series.${name}`;
        }
        return null;
    }

     private _handle_pine_other_builtin_identifier(name: string): string | null {
         const pine_builtins = [
             // Functions (examples)
             'abs', 'acos', 'alert', 'alertcondition', 'alma', 'atr', 'avg',
             'barssince', 'beta', 'bool', 'ceil', 'change', 'color', 'correlation', 'cos',
             'cum', 'dayofmonth', 'dayofweek', 'dev', 'ema', 'exp', 'falling', 'fill', 'fixnan',
             'float', 'floor', 'highest', 'highestbars', 'hline', 'hour', 'iff', 'input', 'int',
             'kc', 'linreg', 'log', 'log10', 'lowest', 'lowestbars', 'max', 'min', 'minute',
             'month', 'na', 'nz', 'offset', 'pearsonr', 'percentrank', 'pivothigh', 'pivotlow',
             'plot', 'plotarrow', 'plotbar', 'plotcandle', 'plotchar', 'plotshape', 'pow', 'request',
             'rising', 'rma', 'round', 'rsi', 'second', 'sign', 'sin', 'sma', 'sqrt', 'stdev',
             'strategy', 'string', 'study', 'sum', 'swma', 'syminfo', 'tan', 'tickerid', 'timeframe',
             'timestamp', 'tr', 'valuewhen', 'variance', 'vwma', 'weekofyear', 'wma', 'year',
             'indicator', // Added indicator/study
             // Constants (examples)
             'true', 'false', 'strategy.direction.all', 'strategy.direction.long', 'strategy.direction.short',
             // ... (other constants might need checking if they are prefixed or not)
             // Color constants (e.g., color.red) might be objects handled by MemberExpression
             // Shape constants (e.g., shape.triangleup)
             'color', 'shape', // Namespace roots
         ];
         if (pine_builtins.includes(name)) {
             // Return the name directly, preamble will handle it
             return name; // Previously: `${CONTEXT_NAME}.builtins.${name}`;
         }
         // Handle potential namespace members like color.red, shape.diamond etc.
         // These should be transformed by MemberExpression, not here.
         return null;
     }

    private _transform_Identifier(node: Identifier): string {
        const name = node.name;

        // 1. Handle JS built-ins/keywords
        const js_builtin = this._handle_builtin_identifier(name);
        if (js_builtin) return js_builtin;

        // 2. Handle Pine Script built-in series variables (e.g., 'close', 'open')
        const pine_series = this._handle_pine_series_identifier(name);
        if (pine_series) {
             // pine_series is now just the name (e.g., 'close')
             return this._should_add_zero_access(node) ? `${pine_series}[0]` : pine_series;
        }

         // 3. Handle other Pine Script built-ins (functions, constants like 'plot', 'sma')
        const pine_builtin = this._handle_pine_other_builtin_identifier(name);
        if (pine_builtin) {
             // pine_builtin is now just the name (e.g., 'plot')
             return pine_builtin; // Built-in functions/constants don't get [0]
        }

        // 4. Handle loop variables (registered but not scoped/transformed typically)
        if (this.scope_manager.is_loop_variable(name)) {
            // Loop variables usually retain their original name in JS
            return this.scope_manager.get_loop_variable_name(name) || name;
        }

        // 5. Handle context-bound variables (function parameters, registered function names)
        if (this.scope_manager.is_context_bound(name)) {
            // Context-bound variables retain their original name
             // Add [0] for access if it's a root parameter (series-like), otherwise use directly
             const isRoot = this.scope_manager.is_root_param(name);
             const addZero = this._should_add_zero_access(node);
             if (isRoot && addZero) {
                 return `${name}[0]`; // e.g. a series input passed as parameter
             } else {
                 return name; // Regular parameter or function name
             }
        }

        // 6. Handle regular scoped variables
        const [scoped_name, kind] = this.scope_manager.get_variable(name);
        // If get_variable returned the original name, it wasn't found in scopes.
        // Treat as potentially undeclared or external (might need refinement).
        if (scoped_name === name) {
             console.warn(`Identifier '${name}' not found in scope, Pine builtins, or context. Assuming global/external.`);
             return name; // Return name, assume it's global or handled by PineTS runtime
        } else {
            // It's a managed variable, access via context $.kind.scoped_name
            const base_access = js_context_member(kind, scoped_name);
            // Add [0] for series access unless context dictates otherwise
            return this._should_add_zero_access(node) ? `${base_access}[0]` : base_access;
        }
    }

    private _transform_Literal(node: Literal): string {
        // Use JSON.stringify for robust conversion, including strings with quotes/escapes
        // Handles null, boolean, number, string. Regex needs special handling if used.
        if (node.value instanceof RegExp) {
           return node.value.toString(); // Convert RegExp object to literal /.../flags
        }
        if (typeof node.value === 'bigint') {
             return node.value.toString() + 'n'; // Append 'n' for BigInt literals in JS
        }
        return JSON.stringify(node.value);
    }

    private _transform_AssignmentPattern(node: AssignmentPattern): string {
        // Used for default function parameters: param = defaultValue
        const leftCode = this._pass2_transform(node.left); // Should be Identifier name
        const rightCode = this._pass2_transform(node.right); // Default value expression
        return `${leftCode} = ${rightCode}`;
    }

    private _transform_BlockStatement(node: BlockStatement, isFunctionBody: boolean = false): string {
        let needsScope = !isFunctionBody;
        if (needsScope) {
            this.scope_manager.push_scope('blk');
        }

        // Transform statements within the block
        const bodyLines = node.body
            .map((stmt: Statement) => this._pass2_transform(stmt)) // Added type Statement for stmt
            .filter((line: string) => line); // Added type string for line

        if (needsScope) {
            this.scope_manager.pop_scope();
        }

        // Indent lines within the block
        const innerCode = bodyLines.map((line: string) => `  ${line}`).join('\n'); // Added type string for line

        return `{\n${innerCode}\n}`; // Wrap in curly braces
    }

    private _transform_FunctionDeclaration(node: FunctionDeclaration): string {
        const funcName = node.id ? node.id.name : ""; // Use original name (registered in pass 1)
        if (!funcName && node.id) {
            // Handle cases where id is not Identifier but present?
            console.warn(`FunctionDeclaration with non-Identifier id type: ${node.id.type}`);
        } else if (!funcName) {
             // Handle anonymous or default export functions if necessary
             console.warn("FunctionDeclaration without name not fully handled.");
        }

        // Process parameters (Identifier or AssignmentPattern)
        const paramStrings = node.params.map(param => {
            // param is Pattern (Identifier | AssignmentPattern | etc)
            return this._pass2_transform(param);
        });

        // Transform the body BlockStatement
        const bodyCode = this._transform_BlockStatement(node.body, true); // Pass true for isFunctionBody

        const asyncKeyword = node.async ? "async " : "";
        const generatorStar = node.generator ? "*" : "";

        return `${asyncKeyword}function ${generatorStar}${funcName}(${paramStrings.join(', ')}) ${bodyCode}`;
    }

    /**
     * Transforms a Property node into a 'key: valueCode' string
     * for use within an object literal for named arguments.
     * The value itself is NOT wrapped by $.param here.
     */
    private _transform_Property_for_object(node: Property, namespace: string | null): string | null {
        // Check if key is an Identifier before accessing name
        if (node.key.type === 'Identifier') {
            const keyIdentifier = node.key as Identifier;
            const keyName = keyIdentifier.name;

            // The value is an Expression that needs *direct* transformation, no $.param wrap here.
            // Use _pass2_transform to get the standard JS representation.
            const valueCode = this._pass2_transform(node.value);

            // Return 'key: valueCode' string
            return `${keyName}: ${valueCode}`;
        } else {
            console.warn(`Unsupported key type in Property for named argument: ${node.key.type}`);
            return null;
        }
    }

    /**
     * Transforms a function argument, wrapping it with the appropriate
     * $.param or namespace.param call.
     */
    private _transform_function_argument(arg_node: BaseNode, namespace: string | null): string {
        const param_id = this.scope_manager.next_param_id_arg; // Get unique ID like "'p0'"
        let index_code: string | undefined = undefined;
        let arg_code: string;
        const ns = namespace || CONTEXT_NAME; // Default to CONTEXT_NAME ($)

        // Check if the argument itself is an array index access (MemberExpression with computed=true)
        if (arg_node.type === 'MemberExpression') {
            const memExpr = arg_node as MemberExpression;
            if (memExpr.computed) {
                arg_code = this._pass2_transform(memExpr.object);
                index_code = this._get_index_code(memExpr.property);
            } else {
                 arg_code = this._pass2_transform(arg_node);
            }
        } else {
            arg_code = this._pass2_transform(arg_node);
        }

        return js_param_call(ns, arg_code, index_code, param_id);
    }

    private _transform_CallExpression(node: CallExpression): string {
        const calleeCode = this._pass2_transform(node.callee);
        let namespace = CONTEXT_NAME; // Default namespace is '$'

        // Determine namespace (same logic as before)
        if (node.callee.type === 'MemberExpression') {
            const calleeMemExpr = node.callee as MemberExpression;
            if (calleeMemExpr.object.type === 'Identifier') {
                 const objId = calleeMemExpr.object as Identifier;
                 if (objId.name === CONTEXT_NAME) {
                    if (calleeMemExpr.property.type === 'Identifier') {
                         const propId = calleeMemExpr.property as Identifier;
                        namespace = `${CONTEXT_NAME}.${propId.name}`;
                    }
                 }
            }
        } // ... other namespace logic if needed ...

        // Separate and transform positional and named arguments
        const positionalArgStrings: string[] = [];
        const namedArgStrings: string[] = [];

        node.arguments.forEach(arg => {
            if (arg.type === 'Property') {
                // Named argument
                const namedArgCode = this._transform_Property_for_object(arg as Property, namespace);
                if (namedArgCode) {
                    namedArgStrings.push(namedArgCode);
                }
            } else if (arg.type === 'SpreadElement') {
                // TODO: How should spread elements interact with named args object?
                console.warn(`SpreadElement argument type in CallExpression not fully handled with named args: ${arg.type}`);
                // For now, treat as positional? Or throw error?
                positionalArgStrings.push(this._pass2_transform(arg));
            } else {
                // Positional argument (Expression)
                positionalArgStrings.push(this._transform_function_argument(arg as Expression, namespace));
            }
        });

        // Combine argument strings
        const finalArgStrings = [...positionalArgStrings];

        if (namedArgStrings.length > 0) {
            // Create the object literal string for named arguments
            const objectLiteralCode = `{ ${namedArgStrings.join(', ')} }`;
            // Wrap the *entire object literal* using $.param (or namespace.param)
            // It needs its own unique parameter ID.
            const param_id_for_object = this.scope_manager.next_param_id_arg;
            const ns = namespace || CONTEXT_NAME;
            const wrappedObjectLiteral = js_param_call(ns, objectLiteralCode, undefined, param_id_for_object);
            finalArgStrings.push(wrappedObjectLiteral);
        }

        // Construct the call string
        const optChain = node.optional ? '?.' : '';
        return `${calleeCode}${optChain}(${finalArgStrings.join(', ')})`;
    }

    private _transform_MemberExpression(node: MemberExpression): string {
        // Transform the object part
        const objectCode = this._pass2_transform(node.object);

        if (node.computed) {
            // Computed access: object[property]
            const propertyCode = this._pass2_transform(node.property);
            const indexCode = this._get_index_code(node.property); // Get potential literal index

            let useSeriesAccess = false;
             // Add type check before accessing name
            if (node.object.type === 'Identifier') {
                const idObject = node.object as Identifier;
                const idName = idObject.name;
                if (this._handle_pine_series_identifier(idName)) {
                    useSeriesAccess = true;
                }
                // Refined check: Only apply to known series, not other builtins
                // TODO: Need confirmation from PineTS runtime behaviour
            }

            const optChain = node.optional ? '?.' : '';

            if (useSeriesAccess) {
                console.warn('Using potentially incorrect $.seriesAccess call');
                return `${CONTEXT_NAME}.seriesAccess(${objectCode}, ${indexCode})`;
            } else {
                return `${objectCode}${optChain}[${propertyCode}]`;
            }

        } else {
            // Non-computed access: object.property
            // Assert property is Identifier before accessing name
            if (node.property.type === 'Identifier') {
                const propIdentifier = node.property as Identifier;
                 const optChain = node.optional ? '?.' : '';
                return `${objectCode}${optChain}.${propIdentifier.name}`;
            } else {
                console.error(`Invalid non-computed MemberExpression property type: ${node.property.type}`);
                return `${objectCode}. /* Invalid Property */`;
            }
        }
    }

    private _transform_IfStatement(node: IfStatement): string {
        const testCode = this._pass2_transform(node.test);
        const consequentCode = this._pass2_transform(node.consequent);
        const alternateCode = node.alternate ? this._pass2_transform(node.alternate) : null;

        // Ensure blocks are formatted correctly
        const consequentBlock = node.consequent.type === 'BlockStatement'
            ? consequentCode
            : `{\n  ${consequentCode}${consequentCode.endsWith(';') ? '' : ';'}\n}`; // Add semicolon if missing

        let result = `if (${testCode}) ${consequentBlock}`;

        if (alternateCode) {
            if (node.alternate?.type === 'IfStatement') {
                // Handle else if chains without extra nesting
                result += ` else ${alternateCode}`;
            } else {
                const alternateBlock = node.alternate?.type === 'BlockStatement'
                    ? alternateCode
                    : `{\n  ${alternateCode}${alternateCode.endsWith(';') ? '' : ';'}\n}`;
                result += ` else ${alternateBlock}`;
            }
        }
        return result;
    }

    private _transform_ConditionalExpression(node: ConditionalExpression): string {
        const testCode = this._pass2_transform(node.test);
        const consequentCode = this._pass2_transform(node.consequent);
        const alternateCode = this._pass2_transform(node.alternate);
        // Add parentheses for safety, especially when nested
        return `(${testCode} ? ${consequentCode} : ${alternateCode})`;
    }

    private _transform_BinaryExpression(node: BinaryExpression): string {
        const leftCode = this._pass2_transform(node.left);
        const rightCode = this._pass2_transform(node.right);
        // Operators should already be mapped correctly by ESTreeVisitor
        // Parentheses added for operator precedence safety
        return `(${leftCode} ${node.operator} ${rightCode})`;
    }

    private _transform_LogicalExpression(node: LogicalExpression): string {
        const leftCode = this._pass2_transform(node.left);
        const rightCode = this._pass2_transform(node.right);
        // Operator is guaranteed '&&' or '||'
        // Parentheses added for operator precedence safety
        return `(${leftCode} ${node.operator} ${rightCode})`;
    }

    private _transform_UnaryExpression(node: UnaryExpression): string {
        const argumentCode = this._pass2_transform(node.argument);
        const operator = node.operator;

        // Handle specific operators if needed, e.g., Pine's 'not' -> '!'
        // Assuming ESTreeVisitor produces standard JS operators like !, -, typeof

        if (node.prefix) {
            // Add space for operators like 'typeof', 'void', 'delete'
            const space = (operator.length > 1) ? ' ' : '';
            return `${operator}${space}${argumentCode}`;
        } else {
             // Postfix operators (rare in this context, e.g., hypothetical x!) - unlikely needed
             console.warn(`Unsupported postfix UnaryExpression: ${operator}`);
            return `${argumentCode}${operator}`;
        }
    }

    private _transform_AssignmentExpression(node: AssignmentExpression): string {
        // Handle assignments like a = b, a += b, etc.

        const rightCode = this._pass2_transform(node.right);
        let targetCode: string;
        let assignFunc = 'assign'; // Default runtime function
        let indexCode: string | undefined = undefined;

        // Determine the target code and if it's an indexed assignment
        if (node.left.type === 'Identifier') {
            const idLeft = node.left as Identifier;
            // Regular variable assignment
            // Need to get scoped name and kind for the target reference
            const [scoped_name, kind] = this.scope_manager.get_variable(idLeft.name);
            if (scoped_name === idLeft.name && !this.scope_manager.is_context_bound(idLeft.name)) {
                console.warn(`Assigning to potentially undeclared variable: ${idLeft.name}`);
                targetCode = idLeft.name; // Assign to original name if not found/bound
            } else if (this.scope_manager.is_context_bound(idLeft.name)){
                 // context bound vars (e.g. parameters) are assigned directly
                 targetCode = idLeft.name;
            } else {
                 // Managed variable, create the $.kind.scoped_name reference
                targetCode = js_context_member(kind, scoped_name);
            }
            // Default index is undefined for simple identifier assignment

        } else if (node.left.type === 'MemberExpression') {
            const memExprLeft = node.left as MemberExpression;
            // Assignment to a property or index (e.g., obj.prop = val, arr[idx] = val)
            if (memExprLeft.computed) {
                // Indexed assignment: arr[idx] = val
                targetCode = this._pass2_transform(memExprLeft.object); // Transform the base object (arr)
                indexCode = this._get_index_code(memExprLeft.property); // Get the index code
                assignFunc = 'assignIdx'; // Use the indexed assignment runtime function
            } else {
                 // Property assignment: obj.prop = val
                 // Transform the whole MemberExpression for the target
                targetCode = this._pass2_transform(memExprLeft);
                 // Index remains undefined
            }
        } else {
            // Assignment to a pattern (destructuring) - Not fully handled yet
            console.warn(`Unhandled assignment left-hand side type: ${node.left.type}`);
            targetCode = this._pass2_transform(node.left); // Attempt basic transform
        }

        // Map assignment operator if necessary (e.g., +=)
        // PineTS runtime likely handles combined operators within $.assign/$.assignIdx?
        // Or does it expect standard JS operators?
        // Assuming for now runtime handles standard operators passed to it.
        // TODO: Verify how PineTS runtime handles operators like +=, -= etc. in assign functions
        const operator = node.operator; // e.g., '=', '+='

        // Generate the runtime assignment call
        // $.assign(target, operator, value) or $.assignIdx(target, index, operator, value)
        // Example: $.assign($.let.glb1_a, '=', 10)
        // Example: $.assignIdx(myArr, 0, '=', 5)
        // Example: $.assign($.let.glb1_a, '+=', 1)
        if (assignFunc === 'assignIdx') {
            // $.assignIdx(targetObject, index, operator, value)
             return `${CONTEXT_NAME}.assignIdx(${targetCode}, ${indexCode}, '${operator}', ${rightCode})`;
        } else {
             // $.assign(targetVarRef, operator, value)
             return `${CONTEXT_NAME}.assign(${targetCode}, '${operator}', ${rightCode})`;
        }
    }

    private _transform_ReturnStatement(node: ReturnStatement): string {
        // Check if the return was implicitly generated
        if (node.implicit) {
            // Implicit return: just return the transformed argument
            const argumentCode = node.argument ? this._pass2_transform(node.argument) : 'undefined';
            return `return ${argumentCode};`;
        }

        // Explicit return: wrap with $.ret()
        if (node.argument) {
            const argumentCode = this._pass2_transform(node.argument);
            let indexCode: string | undefined = undefined;
            let valueCode = argumentCode;

            // Check type before accessing computed property
            if (node.argument.type === 'MemberExpression') {
                const memExprArg = node.argument as MemberExpression;
                if (memExprArg.computed) {
                    valueCode = this._pass2_transform(memExprArg.object);
                    indexCode = this._get_index_code(memExprArg.property);
                }
            }

            const indexArg = indexCode !== undefined ? indexCode : 'undefined';
            // Generate $.ret(value, index)
            return `return ${CONTEXT_NAME}.ret(${valueCode}, ${indexArg});`;
        } else {
            // Explicit return without a value (e.g., `return`) 
            // Still wrap with $.ret()
            return `return ${CONTEXT_NAME}.ret(undefined, undefined);`;
        }
    }

    private _transform_ForStatement(node: ForStatement): string {
        // Standard C-style for loop: for (init; test; update) { body }
        this.scope_manager.push_scope('blk'); // Loop body creates a scope

        let initCode = "";
        if (node.init) {
            // Init can be VariableDeclaration or Expression
            if (node.init.type === 'VariableDeclaration') {
                // Handle loop variable declaration specifically
                // Needs to register loop variables differently than standard ones
                const varDecl = node.init as VariableDeclaration;
                const declarations: string[] = [];
                for (const decl of varDecl.declarations) {
                    if (decl.id.type === 'Identifier') {
                        const idNode = decl.id as Identifier;
                        const originalName = idNode.name;
                        // Loop variables typically use their original name in JS
                        const transformedName = originalName; // No prefixing
                        // Register as loop variable
                        this.scope_manager.add_loop_variable(originalName, transformedName);
                        const initValCode = decl.init ? this._pass2_transform(decl.init) : 'undefined';
                        // Declare with standard JS let/const/var
                        declarations.push(`${transformedName} = ${initValCode}`);
                    } else {
                        console.warn('Non-identifier loop variable declaration not handled');
                    }
                }
                // Use the original kind (let/const/var) from the declaration
                initCode = `${varDecl.kind} ${declarations.join(', ')}`;
            } else {
                // Init is an Expression
                initCode = this._pass2_transform(node.init);
            }
        }

        const testCode = node.test ? this._pass2_transform(node.test) : "true";
        const updateCode = node.update ? this._pass2_transform(node.update) : "";

        // Transform body - use _transform_BlockStatement if it's a block
        let bodyCode: string;
        if (node.body.type === 'BlockStatement') {
            // Pass isFunctionBody=false so BlockStatement manages its own scope (redundant here?)
            // BlockStatement scope is nested inside loop scope
             bodyCode = this._transform_BlockStatement(node.body as BlockStatement, false);
        } else {
             bodyCode = `{\n  ${this._pass2_transform(node.body)};\n}`; // Wrap non-block body
        }

        this.scope_manager.pop_scope(); // Pop the loop scope

        return `for (${initCode}; ${testCode}; ${updateCode}) ${bodyCode}`;
    }

    private _transform_WhileStatement(node: WhileStatement): string {
        this.scope_manager.push_scope('blk'); // Loop creates a scope

        const testCode = this._pass2_transform(node.test);

        let bodyCode: string;
        if (node.body.type === 'BlockStatement') {
             bodyCode = this._transform_BlockStatement(node.body as BlockStatement, false);
        } else {
             bodyCode = `{\n  ${this._pass2_transform(node.body)};\n}`; // Wrap non-block body
        }

        this.scope_manager.pop_scope();

        return `while (${testCode}) ${bodyCode}`;
    }

    private _transform_ForInStatement(node: ForInStatement): string {
        // Note: PineScript's `for..in` might differ from JS `for...in`
        // JS `for...in` iterates over *keys* of an object.
        // PineScript `for..in` might be closer to `for...of` (iterating over values)?
        // Assuming ESTreeVisitor produces JS-compatible ForInStatement for now.
        // If Pine `for..in` is like `for..of`, ESTreeVisitor should produce ForOfStatement.

        this.scope_manager.push_scope('blk'); // Loop creates scope

        let leftCode = "";
        if (node.left.type === 'VariableDeclaration') {
            // Similar logic to ForStatement init for variable declaration
             const varDecl = node.left as VariableDeclaration;
             const declarations: string[] = [];
             for (const decl of varDecl.declarations) {
                 if (decl.id.type === 'Identifier') {
                     const idNode = decl.id as Identifier;
                     const originalName = idNode.name;
                     const transformedName = originalName; // Loop var
                     this.scope_manager.add_loop_variable(originalName, transformedName);
                     // Initializer is not allowed in for...in/of declaration head
                     declarations.push(transformedName);
                 } else {
                     console.warn('Non-identifier loop variable in for...in not handled');
                 }
             }
             leftCode = `${varDecl.kind} ${declarations.join(', ')}`;
        } else if (node.left.type === 'Identifier') {
             // Existing variable
             const idNode = node.left as Identifier;
             // Ensure it's registered as a loop variable if needed?
             // Or assume it's already declared?
             // Let's register it if not already known, treating it like a loop var.
             if (!this.scope_manager.is_loop_variable(idNode.name) && !this.scope_manager.is_context_bound(idNode.name)){
                 this.scope_manager.add_loop_variable(idNode.name, idNode.name);
             }
             leftCode = this._pass2_transform(idNode); // Transform identifier access

        } else {
            // Pattern destructuring? Complex.
             console.warn(`Unhandled left side type in for...in: ${node.left.type}`);
             leftCode = "/* unhandled left */";
        }

        const rightCode = this._pass2_transform(node.right);

         let bodyCode: string;
         if (node.body.type === 'BlockStatement') {
              bodyCode = this._transform_BlockStatement(node.body as BlockStatement, false);
         } else {
              bodyCode = `{\n  ${this._pass2_transform(node.body)};\n}`; // Wrap non-block body
         }

        this.scope_manager.pop_scope();

        // Using JS standard for...in syntax
        return `for (${leftCode} in ${rightCode}) ${bodyCode}`;
    }

    private _transform_ArrayExpression(node: ArrayExpression): string {
        // Handles array literals: [el1, el2, ...rest]
        const elementStrings = node.elements.map(element => {
            if (!element) {
                // Handle sparse arrays (empty slots) - typically represented by `null` in elements array
                return 'null'; // Or handle as per JS/PineTS expectation
            }
            // Handle SpreadElement (`...rest`) within array literals
            if (element.type === 'SpreadElement') {
                 // Assert element as SpreadElement before accessing argument
                 const spreadElement = element as SpreadElement;
                 console.warn('SpreadElement in ArrayExpression not fully implemented.');
                 // Transform the argument of the spread element
                 return `...${this._pass2_transform(spreadElement.argument)}`; // Basic spread syntax
            }
             // Otherwise, element is an Expression
            return this._pass2_transform(element as Expression);
        });

        return `[${elementStrings.join(', ')}]`;
    }

    // TODO: Implement _transform_ObjectExpression and _transform_Property when types are available

    private _transform_UpdateExpression(node: UpdateExpression): string {
        // Handles ++var, --var, var++, var--
        const argumentCode = this._pass2_transform(node.argument);
        const operator = node.operator; // '++' or '--'

        // PineTS likely requires wrapping updates with a runtime call, e.g., $.update()
        // Need to know the runtime function signature.
        // Assuming $.update(target, operator, prefix) for now.
        // TODO: Verify PineTS runtime function for updates.

        let targetCode = argumentCode;
        let indexCode: string | undefined = undefined;
        let updateFunc = 'update';

        // Check if the argument is an Identifier or MemberExpression for target/index
        if (node.argument.type === 'Identifier') {
            // Simple variable update: ++x
            const idArg = node.argument as Identifier;
            const [scoped_name, kind] = this.scope_manager.get_variable(idArg.name);
            if (scoped_name === idArg.name && !this.scope_manager.is_context_bound(idArg.name)) {
                 targetCode = idArg.name; // Use original if not found/bound
            } else if (this.scope_manager.is_context_bound(idArg.name)) {
                 targetCode = idArg.name; // Use original if context bound
            } else {
                targetCode = js_context_member(kind, scoped_name);
            }
        } else if (node.argument.type === 'MemberExpression') {
             // Update on property/index: obj.prop++ or arr[idx]++
            const memExprArg = node.argument as MemberExpression;
            if (memExprArg.computed) {
                // Indexed update: arr[idx]++
                targetCode = this._pass2_transform(memExprArg.object); // Base object
                indexCode = this._get_index_code(memExprArg.property); // Index
                updateFunc = 'updateIdx'; // Assume different runtime func for indexed update
            } else {
                 // Property update: obj.prop++
                 // Use the transformed member expression itself as the target?
                 // Or does $.update need the object and property separately?
                 // Assuming target is the full MemberExpression code for now.
                 targetCode = argumentCode; // argumentCode is transformed memExprArg
            }
        }

        const indexArg = indexCode !== undefined ? indexCode : 'undefined';
        const prefixArg = node.prefix ? 'true' : 'false';

        // Generate $.update(target, operator, prefix) or $.updateIdx(target, index, operator, prefix)
        if (updateFunc === 'updateIdx') {
             // TODO: Verify signature for $.updateIdx
             return `${CONTEXT_NAME}.updateIdx(${targetCode}, ${indexArg}, '${operator}', ${prefixArg})`;
        } else {
             // TODO: Verify signature for $.update
             return `${CONTEXT_NAME}.update(${targetCode}, '${operator}', ${prefixArg})`;
        }
    }

    private _transform_BreakStatement(node: BreakStatement): string {
        // Handles break statements, potentially with labels
        if (node.label) {
            return `break ${node.label.name};`;
        } else {
            return "break;";
        }
    }

    private _transform_ContinueStatement(node: ContinueStatement): string {
         // Handles continue statements, potentially with labels
         if (node.label) {
            return `continue ${node.label.name};`;
        } else {
            return "continue;";
        }
    }

    private _transform_EmptyStatement(node: EmptyStatement): string {
        // Handles empty statements (just a semicolon)
        return ";";
    }

    private _transform_SequenceExpression(node: SequenceExpression): string {
        // Handles comma operator: (expr1, expr2, expr3) -> returns expr3
        // We need to ensure all expressions are evaluated for side effects.
        const expressionCodes = node.expressions.map(expr => this._pass2_transform(expr));
        // Wrap in parentheses for safety
        return `(${expressionCodes.join(', ')})`;
    }

    // TODO: Implement other _transform_* methods (ObjectExpression, Property, etc.)
} 