class Strategy {
    private _cache = {};
    constructor(private context: any) {}
    public long = 1;
    public short = -1;
    public percent_of_equity = 'percent_of_equity';
    public position_avg_price = 0;
    public position_size = 0;
    public trades = [];
    entry = (label, side, size=1)=>{
        this.trades[label] = {
            result:0, 
            size: size, 
            side: side, 
            entry:this.context.data.close[0]
        };
        this.position_avg_price = this.trades.map(trade => trade.entry).reduce((a, b) => a + b, 0) / this.trades.length;
        this.position_size = this.trades.map(trade => trade.size).reduce((a, b) => a + b, 0)
    };

    close = (label, when)=>{this.trades[label].exitCondition = when};

    risk = {max_drawdown:(num, what)=>{}};
}

export default Strategy;

/*
const checkTrades = () => {
    for (let [label, trade] of Object.entries($.trades)) {
        if (trade.result !== 0) continue;
        if (trade.side === 1) {
        if ($.data.close[0] > trade.entry) {
            console.log('long tp hit');
            trade.result = 1;
            trade.profit = trade.entry - trade.exitCondition;
        }
        } else {
        if ($.data.close[0] < trade.entry) {
            console.log('short tp hit');
            trade.result = 1;
            trade.profit = trade.entry - trade.exitCondition;
        }
        }
    }
    }*/
//checkTrades();


