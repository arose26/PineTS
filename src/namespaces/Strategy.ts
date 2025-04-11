class Strategy {
    private _cache = {};
    constructor(private context: any) {}
    public long = 1;
    public short = -1;
    public percent_of_equity = 'percent_of_equity';
    public position_avg_price = 0;
    public position_size = 0;
    public orders = []; // Array to store orders placed by strategy.order

    /**
     * Places a market order to enter a position.
     * Mimics Pine Script's strategy.entry.
     * Uses the internal 'order' function; does not update state directly.
     */
    entry = (id: string, direction: any, qty?: number, comment?: string, when: boolean = true) => {
        if (!when) {
            return; // Do nothing if 'when' is false
        }

        // Default quantity to 1 if not specified (matching Pine Script behavior? Check this)
        // TODO: Verify default qty behavior and if it should support % equity etc.
        const entryQty = qty !== undefined && qty > 0 ? qty : 1;
        const entryComment = comment ? `${comment} (Entry ${id})` : `Entry ${id}`;

        // Use the internal 'order' function to place a market order
        console.log(`Strategy.entry (${id}): Placing market order (Dir: ${direction}, Qty: ${entryQty})`);
        this.order(id, direction, entryQty, undefined, undefined, entryComment, true);
         // Position state is updated when the order is filled by the backtester.
    };

    /**
     * Places an order. Mimics Pine Script's strategy.order.
     * Does not handle order filling logic here; assumes a separate mechanism will process the 'orders' array.
     */
    order = (id: string, direction: any, qty: number, limit?: number, stop?: number, comment?: string, when: boolean = true) => {
        if (!when) {
            return; // Do nothing if when is false
        }

        // Determine order type
        let orderType = 'market';
        if (limit !== undefined && stop === undefined) {
            orderType = 'limit';
        } else if (limit === undefined && stop !== undefined) {
            orderType = 'stop';
        } else if (limit !== undefined && stop !== undefined) {
            orderType = 'stop-limit';
        }

        // Basic validation
        if (qty <= 0) {
            console.warn(`Order quantity must be positive for id: ${id}`);
            return;
        }

        // Note: Pine Script cancels previous orders with the same ID. This implementation currently does not.
        // TODO: Implement logic to cancel/replace existing orders with the same ID if needed.

        const newOrder = { 
            id, 
            direction, 
            qty, 
            limit, 
            stop, 
            comment, 
            orderType, 
            status: 'pending', // Orders start as pending 
            placedAt: this.context.time ? this.context.time[0] : Date.now(), // Record placement time
            placedPrice: this.context.data.close[0] // Price at the time of placement
        };
        this.orders.push(newOrder);

        console.log(`Strategy: Placed ${orderType} order - ID: ${id}, Dir: ${direction}, Qty: ${qty}, Limit: ${limit}, Stop: ${stop}`);
    };

    /**
     * Generates exit orders (limit for profit, stop for loss) for the current position.
     * Mimics Pine Script\'s strategy.exit.
     * Does not handle order filling; places orders into the \'orders\' array.
     */
    exit = (
        id: string,          // Unique ID for the exit order setup (e.g., 'Exit 1')
        from_entry?: string, // ID of the entry order to exit (INFO ONLY FOR NOW)
        qty?: number,       // Absolute quantity to exit
        qty_percent?: number,// Percentage of position/entry to exit
        profit?: number,    // Profit target in ticks (price = avg_price +/- profit * mintick)
        limit?: number,     // Profit target price level
        loss?: number,      // Stop loss in ticks (price = avg_price -/+ loss * mintick)
        stop?: number,      // Stop loss price level
        // --- Omitted complex params for now ---
        // trail_price?: number,
        // trail_points?: number,
        // trail_offset?: number,
        oca_name?: string,  // OCA group name (INFO ONLY FOR NOW)
        comment?: string,   // Comment for the exit orders
        when: boolean = true // Condition to place exit order(s)
    ) => {
        if (!when || this.position_size === 0) {
            return; // Do nothing if condition is false or no position
        }

        // --- Determine Quantity ---
        let exitQty = 0;
        const currentPositionSize = Math.abs(this.position_size);

        if (qty !== undefined && qty > 0) {
            exitQty = qty;
        } else if (qty_percent !== undefined && qty_percent > 0) {
            // Note: Pine calculates percentage based on 'from_entry' size if specified.
            // Here, we base it on the total current position size.
            exitQty = currentPositionSize * (qty_percent / 100);
        } else {
            // Default: Exit the entire position if neither qty nor qty_percent is specified
            exitQty = currentPositionSize;
        }

        // Ensure exitQty does not exceed current position size
        exitQty = Math.min(exitQty, currentPositionSize);
        exitQty = Math.max(exitQty, 0); // Ensure non-negative

        if (exitQty <= 0) {
             console.warn(`Strategy.exit (${id}): Calculated exit quantity is zero or negative.`);
             return;
        }

        // --- Determine Exit Direction ---
        const exitDirection = this.position_size > 0 ? this.short : this.long; // Opposite of current position

        // --- Determine Price Levels ---
        // Assumes context provides syminfo.mintick for tick calculations
        const mintick = this.context.syminfo?.mintick ?? 0.01; // Default tick size if not provided

        let limitPrice: number | undefined = limit;
        if (profit !== undefined && limitPrice === undefined && this.position_avg_price !== 0) {
            limitPrice = this.position_size > 0
                ? this.position_avg_price + profit * mintick // Long profit target
                : this.position_avg_price - profit * mintick; // Short profit target
            limitPrice = parseFloat(limitPrice.toFixed(8)); // Adjust precision as needed
        }

        let stopPrice: number | undefined = stop;
        if (loss !== undefined && stopPrice === undefined && this.position_avg_price !== 0) {
             stopPrice = this.position_size > 0
                 ? this.position_avg_price - loss * mintick // Long stop loss
                 : this.position_avg_price + loss * mintick; // Short stop loss
             stopPrice = parseFloat(stopPrice.toFixed(8)); // Adjust precision as needed
        }

        // --- Create and Place Orders via internal this.order ---
        const baseComment = comment ? `${comment} (Exit ${id})` : `Exit ${id}`;
        let placedProfitOrder = false;
        let placedStopOrder = false;
        const ocaInfo = oca_name ? ` (OCA: ${oca_name})` : ''; // Basic info, actual OCA logic external

        // Create Limit Order (Take Profit)
        if (limitPrice !== undefined && limitPrice > 0) {
            // Ensure TP is logical (above entry for long, below for short)
             const isTpLogical = (this.position_size > 0 && limitPrice > this.position_avg_price) || (this.position_size < 0 && limitPrice < this.position_avg_price);
             if (isTpLogical) {
                 const profitOrderId = `${id}_profit`;
                 // Use internal order function to queue the exit order
                 this.order(profitOrderId, exitDirection, exitQty, limitPrice, undefined, `${baseComment} TP${ocaInfo}`, true);
                 placedProfitOrder = true;
             } else {
                 console.warn(`Strategy.exit (${id}): Calculated limitPrice ${limitPrice} is not logical for the current position (avg price: ${this.position_avg_price}). Profit order skipped.`);
             }
        }

        // Create Stop Order (Stop Loss)
        if (stopPrice !== undefined && stopPrice > 0) {
             // Ensure SL is logical (below entry for long, above for short)
             const isSlLogical = (this.position_size > 0 && stopPrice < this.position_avg_price) || (this.position_size < 0 && stopPrice > this.position_avg_price);
             if (isSlLogical) {
                const stopOrderId = `${id}_stop`;
                 // Use internal order function to queue the exit order
                this.order(stopOrderId, exitDirection, exitQty, undefined, stopPrice, `${baseComment} SL${ocaInfo}`, true);
                placedStopOrder = true;
             } else {
                  console.warn(`Strategy.exit (${id}): Calculated stopPrice ${stopPrice} is not logical for the current position (avg price: ${this.position_avg_price}). Stop order skipped.`);
             }
        }

        if (!placedProfitOrder && !placedStopOrder && (limit !== undefined || profit !== undefined || loss !== undefined || stop !== undefined)) {
             console.warn(`Strategy.exit (${id}): Exit condition provided, but no valid exit orders were placed (check price logic vs average price).`);
        } else if (placedProfitOrder || placedStopOrder) {
             console.log(`Strategy: Queued exit order(s) for ID '${id}' - Qty: ${exitQty}, Direction: ${exitDirection}${limitPrice && placedProfitOrder ? ', Limit: '+limitPrice : ''}${stopPrice && placedStopOrder ? ', Stop: '+stopPrice : ''}${ocaInfo}`);
        }
        // Position size is NOT changed here. It's changed when the backtester fills the actual orders.
    };

    /**
     * Places a market order to close the entire current position.
     * Note: Unlike Pine Script, this doesn't target a specific entry ID due to simplified state tracking.
     * The ID is used for order comments.
     */
    close = (id: string, comment?: string, when: boolean = true) => {
        if (!when || this.position_size === 0) {
            return; // Do nothing if condition is false or no position
        }
        const closeQty = Math.abs(this.position_size);
        const closeDirection = this.position_size > 0 ? this.short : this.long;
        const closeComment = comment ? `${comment} (Close ${id})` : `Close ${id}`;
        const closeOrderId = `${id}_market_close`;

        console.log(`Strategy.close (${id}): Placing market order to close entire position (Qty: ${closeQty}, Dir: ${closeDirection})`);
        this.order(closeOrderId, closeDirection, closeQty, undefined, undefined, closeComment, true);
        // Position state is updated when the order is filled by the backtester.
    };

    /**
     * Cancels a specific pending order by its ID.
     */
    cancel = (id: string, when: boolean = true) => {
        if (!when) {
            return;
        }
        let cancelledCount = 0;
        this.orders = this.orders.map(order => {
            if (order.id === id && order.status === 'pending') {
                console.log(`Strategy.cancel: Cancelling pending order ID '${id}'`);
                cancelledCount++;
                return { ...order, status: 'cancelled' };
            }
            return order;
        });
        if (cancelledCount === 0) {
             console.warn(`Strategy.cancel: No pending order found with ID '${id}' to cancel.`);
        }
    };

    /**
     * Cancels all pending orders.
     */
    cancel_all = (when: boolean = true) => {
        if (!when) {
            return;
        }
        let cancelledCount = 0;
        this.orders = this.orders.map(order => {
            if (order.status === 'pending') {
                cancelledCount++;
                return { ...order, status: 'cancelled' };
            }
            return order;
        });
        if (cancelledCount > 0) {
            console.log(`Strategy.cancel_all: Cancelled ${cancelledCount} pending order(s).`);
        } else {
            console.log('Strategy.cancel_all: No pending orders to cancel.');
        }
    };

    /**
     * Places a market order to close the entire current position.
     */
    close_all = (comment?: string, when: boolean = true) => {
        if (!when || this.position_size === 0) {
            return; // Do nothing if condition is false or no position
        }
        const closeQty = Math.abs(this.position_size);
        const closeDirection = this.position_size > 0 ? this.short : this.long;
        const closeComment = comment || 'Close All Position';
        const closeOrderId = `close_all_${Date.now()}`; // Unique ID for the close order

        console.log(`Strategy.close_all: Placing market order to close entire position (Qty: ${closeQty}, Dir: ${closeDirection})`);
        this.order(closeOrderId, closeDirection, closeQty, undefined, undefined, closeComment, true);
         // Position state is updated when the order is filled by the backtester.
    };

    // Placeholder properties
    public opentrades: number = 0; // Placeholder for strategy.opentrades
    public equity: number = 100000; // Placeholder for strategy.equity
    public initial_capital: number = 100000; // Placeholder for strategy.initial_capital
    public commission_type: string = 'percent'; // Placeholder for strategy.commission_type
    public commission_value: number = 0.1; // Placeholder for strategy.commission_value
    public slippage: number = 0; // Placeholder for strategy.slippage

    risk = {
        max_drawdown: (num, what) => { console.log('strategy.risk.max_drawdown called'); },
        max_intraday_filled_orders: (num) => { console.log('strategy.risk.max_intraday_filled_orders called'); },
        // Add other risk rules as needed
    };
}

export default Strategy;
