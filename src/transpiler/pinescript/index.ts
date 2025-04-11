
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { PinescriptLexer } from './generated/grammar/PinescriptLexer';
import { PinescriptParser  } from './generated/grammar/PinescriptParser';
import { ESTreeVisitor } from './ESTreeVisitor';
import { PineTSVisitor } from './PineTSVisitor';
import { preprocessPineScript } from './preprocess';
import { BaseNode } from './estree-types'; 
import { ParseTree } from 'antlr4ts/tree/ParseTree';


export function transpilePineScript(pineScriptInput: string): object {
    const processedScript = preprocessPineScript(pineScriptInput);

    console.log("Creating input stream...");
    const inputStream = CharStreams.fromString(processedScript);
    console.log("Creating lexer...");
    const lexer = new PinescriptLexer(inputStream);
    console.log("Creating token stream...");
    const tokenStream = new CommonTokenStream(lexer);
    console.log("Creating parser...");
    const parser = new PinescriptParser(tokenStream);
    console.log("--- Parser Setup Complete ---");
    
    console.log("!!! PRE-TRY BLOCK LOG !!!");
    
    let tree: ParseTree;
    let estree: BaseNode | null; // Allow null
    try {
        console.log("--> Entering parser.start()...");
        tree = parser.start();
        console.log("<-- Exited parser.start(). Parse tree object:", tree ? 'Created' : 'Undefined');
        // Log syntax errors detected by ANTLR's default mechanism (if listener is off)
        if (parser.numberOfSyntaxErrors > 0) {
            console.warn(`Found ${parser.numberOfSyntaxErrors} syntax errors during parsing (via default detection).`);
        }
    
    } catch (e: any) { // Add : any type annotation
        console.error("!!! CATCH BLOCK ERROR !!!");
        console.error("Error during parsing:", e);
        process.exit(1);
    }
    
    console.log("Parsing finished (according to ANTLR runtime).");
    console.log("\nInstantiating ESTreeVisitor...");
    const visitor = new ESTreeVisitor();
    console.log("Visiting parse tree...");
    try {
        if (tree!) { // Check if tree exists before visiting
            estree = visitor.visit(tree);
        }
    } catch (e: any) {
        console.error("!!! CATCH BLOCK ERROR !!!");
        console.error("Error during visiting:", e);
        process.exit(1);
    }

    // Add check for null before proceeding
    if (!estree) {
        throw new Error("ESTree generation resulted in null.");
    }
    const pineTSVisitor = new PineTSVisitor();
    const pineTSCode = pineTSVisitor.visit(estree);
    return pineTSCode;
}