// Port of PineTS/src/transpiler/ScopeManager.class.ts
// And transpiler2/scope_manager.py

export const CONTEXT_NAME = '$'; // Assuming this is constant

export type VariableKind = 'let' | 'const' | 'var'; // Extend as needed

export class ScopeManager {
    // Stores mappings from original name to transformed name for each scope level
    private scopes: Map<string, string>[] = [];
    // Tracks the type ('glb', 'fn', 'blk', etc.) of each active scope
    private scope_types: string[] = [];
    // Counts how many scopes of each type have been created (for unique naming)
    private scope_counts: Map<string, number> = new Map();
    // Set of variable names bound to the execution context (e.g., function parameters)
    private context_bound_vars: Set<string> = new Set();
    // Subset of context_bound_vars that are parameters of the root/main function
    private root_params: Set<string> = new Set();
    // Maps transformed variable names to their declaration kind ('let', 'const')
    private var_kinds: Map<string, VariableKind> = new Map();
    // Set of original loop variable names (e.g., 'i' in 'for i = 0 to ...')
    private loop_vars: Set<string> = new Set();
    // Maps original loop variable names to their (usually untransformed) names used in JS
    private loop_var_names: Map<string, string> = new Map();

    private param_id_counter: number = 0;
    private cache_id_counter: number = 0;
    private temp_var_counter: number = 0;

    constructor() {
        // Initialize global scope
        this.push_scope('glb');
    }

    // Returns the JS code string for the next param ID argument (e.g., "'p0'")
    get next_param_id_arg(): string {
        const id_num = this.param_id_counter++;
        return `'p${id_num}'`;
    }

    // Returns the JS code string for the next cache ID argument (e.g., "'cache_0'")
    get next_cache_id_arg(): string {
        const id_num = this.cache_id_counter++;
        return `'cache_${id_num}'`;
    }

    push_scope(type_str: string): void {
        this.scopes.push(new Map());
        this.scope_types.push(type_str);
        const current_count = this.scope_counts.get(type_str) || 0;
        this.scope_counts.set(type_str, current_count + 1);
    }

    pop_scope(): void {
        if (this.scopes.length > 0) {
            this.scopes.pop();
        }
        if (this.scope_types.length > 0) {
            // We don't decrement scope_counts, as they ensure uniqueness across calls
            this.scope_types.pop();
        }
    }

    get_current_scope_type(): string {
        return this.scope_types.length > 0 ? this.scope_types[this.scope_types.length - 1] : 'glb'; // Default to global
    }

    // Gets the count associated with the *instance* of the current scope type
    get_current_scope_count(): number {
        const currentType = this.get_current_scope_type();
        return this.scope_counts.get(currentType) || 1; // Should always exist after push_scope
    }

    add_context_bound_var(name: string, is_root_param: boolean = false): void {
        this.context_bound_vars.add(name);
        if (is_root_param) {
            this.root_params.add(name);
        }
    }

    is_context_bound(name: string): boolean {
        return this.context_bound_vars.has(name);
    }

    is_root_param(name: string): boolean {
        return this.root_params.has(name);
    }

    add_loop_variable(original_name: string, transformed_name: string): void {
        // Loop variables usually aren't transformed in JS, so transformed_name is often original_name
        this.loop_vars.add(original_name);
        this.loop_var_names.set(original_name, transformed_name);
    }

    get_loop_variable_name(name: string): string | undefined {
        return this.loop_var_names.get(name);
    }

    is_loop_variable(name: string): boolean {
        return this.loop_vars.has(name);
    }

    /**
     * Registers a regular variable in the current scope and returns its unique scoped name.
     * @param name The original variable name.
     * @param kind The declaration kind ('let' or 'const').
     * @returns The unique, scope-prefixed name (e.g., 'glb1_myVar', 'fn2_localVar').
     */
    add_variable(name: string, kind: VariableKind): string {
        if (this.is_context_bound(name) || this.is_loop_variable(name)) {
            // Should not transform context-bound or loop variables this way
            // They retain their original names in the generated code.
            return name;
        }

        if (this.scopes.length === 0) {
            throw new Error("Cannot add variable: No scope is active.");
        }
        const current_scope = this.scopes[this.scopes.length - 1];
        const scope_type = this.get_current_scope_type();
        const scope_count = this.get_current_scope_count(); // Use the count for this specific scope instance

        // Generate unique name (e.g., 'glb1_myVar', 'fn2_localVar')
        const new_name = `${scope_type}${scope_count}_${name}`;

        // Store mapping in the current scope's dictionary
        current_scope.set(name, new_name);
        // Store kind associated with the *transformed* name
        this.var_kinds.set(new_name, kind);
        return new_name;
    }

    /**
     * Searches scopes for the variable and returns its transformed name and kind.
     * @param name The original variable name to look up.
     * @returns A tuple [transformed_name: string, kind: VariableKind].
     *          Returns [name, 'let'] if the variable is context-bound, a loop variable, or not found.
     */
    get_variable(name: string): [string, VariableKind] {
        // Handle loop variables first
        if (this.is_loop_variable(name)) {
            const transformed_name = this.get_loop_variable_name(name);
            if (transformed_name) {
                // Loop variables are implicitly 'let' in JS for loops
                return [transformed_name, 'let'];
            }
        }

        // Handle context-bound variables (parameters, etc.)
        if (this.is_context_bound(name)) {
            // Context-bound variables aren't stored with a specific kind in this manager.
            // They exist directly in the JS function scope. Kind is often irrelevant
            // for lookup, as they aren't redeclared using the transformed name.
            // Default to 'let' if kind is needed.
            return [name, 'let'];
        }

        // Search scopes from current up to global
        for (let i = this.scopes.length - 1; i >= 0; i--) {
            const scope = this.scopes[i];
            if (scope.has(name)) {
                const scoped_name = scope.get(name)!; // Should exist if has(name) is true
                const kind = this.var_kinds.get(scoped_name) || 'let'; // Default to 'let' if kind not found
                return [scoped_name, kind];
            }
        }

        // Fallback: If not found, maybe it's an undeclared global or built-in?
        // Follow Python version's tentative approach: return original name.
        // The caller (PineTSVisitor) will likely handle built-ins separately.
        // console.warn(`Warning: Variable '${name}' not found in any scope or context. Returning as is.`);
        return [name, 'let']; // Default kind
    }

    /**
     * Generates a unique temporary variable name.
     * @returns A string like "temp_1", "temp_2".
     */
    generate_temp_var(): string {
        this.temp_var_counter++;
        return `temp_${this.temp_var_counter}`;
    }
} 