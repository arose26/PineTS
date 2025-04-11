import { Deque } from '@blakeembrey/deque'; // Using external deque for closer match, ensure installed

// Configuration Constants (Match Python version)
const TAB_LENGTH = 4;
const INDENT_LENGTH = 4;

// Ported BLOCK_START_PATTERNS Regex
const BLOCK_START_PATTERNS = new RegExp(
    // Using RegExp constructor for multi-line clarity, equivalent to Python r'''...''' with re.VERBOSE
    // Need to double escape backslashes in string literals for RegExp constructor
    "^(?:" +                     // Start non-capturing group
    "=>|" +                   // Arrow function
    "\\bif\\b.*|" +          // If statement condition
    "\\belse\\s*if\\b.*|" +  // Else if statement condition
    "\\belse\\b\\s*|" +       // Else statement
    "\\bfor\\b.*|" +          // For loop
    "\\bwhile\\b.*" +        // While loop
    // Add switch etc. here if/when implemented
    ")\\s*$"                    // End non-capturing group, match trailing whitespace and end of string
);

// Custom Error Class (Match Python version)
export class IndentationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "IndentationError";
    }
}

// Ported get_indentation_length function
function getIndentationLength(line: string): number {
    let length = 0;
    for (const ch of line) {
        if (ch === ' ') {
            length += 1;
        } else if (ch === '\t') {
            // Align to next multiple of TAB_LENGTH
            length = Math.floor(length / TAB_LENGTH + 1) * TAB_LENGTH;
        } else {
            // Stop counting at the first non-whitespace character
            break;
        }
    }
    return length;
}

/**
 * Preprocesses Pine Script code to insert explicit block and statement markers,
 * mirroring the logic of the Python preprocess.py script.
 *
 * @param scriptContent The raw Pine Script code as a string.
 * @returns The preprocessed script content with explicit tokens as a single space-separated string.
 * @throws {IndentationError} If inconsistent indentation is detected.
 */
export function preprocessPineScript(scriptContent: string): string {
    // 1. Basic Cleaning (Remove comments, normalize newlines, handle empty lines)
    const inputLines: string[] = [];
    for (const line of scriptContent.split(/\r?\n/)) {
        const strippedLine = line.split('//', 1)[0]; // Remove comments
        // Keep blank lines representation for now for line counting/lookahead structure
        inputLines.push(strippedLine);
    }

    // Ensure script conceptually ends with a newline for consistent processing
    // (Python version adds empty string if not ending with \n)
    // No direct equivalent needed if split correctly handles trailing newline or lack thereof

    // 3. Insert Block/Statement Tokens based on Indentation
    const preprocessedParts: string[] = [];
    const indentStack = new Deque<number>([0]); // Use Deque like Python
    let lineNumber = 0;

    for (let i = 0; i < inputLines.length; i++) {
        lineNumber += 1;
        const line = inputLines[i];
        const trimmedLine = line.trim();

        if (!trimmedLine) {
            continue; // Skip lines that are empty or only contained comments
        }

        let currentIndent = getIndentationLength(line);
        const lastIndent = indentStack.peek(-1) ?? 0;

        // Check for invalid indentation (not a multiple of INDENT_LENGTH)
        // Allowing zero indent always.
        // Porting Python's conceptual adjustment logic
        if (currentIndent > 0 && currentIndent % INDENT_LENGTH !== 0) {
            console.warn(`Warning line ${lineNumber}: Indentation width ${currentIndent} is not a multiple of ${INDENT_LENGTH}. Adjusting for block logic.`);
            const adjustedCurrentIndent = Math.floor(currentIndent / INDENT_LENGTH) * INDENT_LENGTH;
            if (adjustedCurrentIndent < lastIndent) {
                currentIndent = adjustedCurrentIndent; // Treat as dedent
            } else {
                currentIndent = lastIndent; // Treat as same level
            }
            // Optionally throw here if strict block indentation is required:
            // throw new IndentationError(`Line ${lineNumber}: Invalid indentation width ${currentIndent}`);
        }

        // Remove semicolons before pushing
        const strippedLineContent = trimmedLine.replace(/;/g, '');

        // Check block starting conditions separately
        const isArrowFunc = strippedLineContent.endsWith('=>');
        const isRegexBlockStarter = BLOCK_START_PATTERNS.test(strippedLineContent);
        const isBlockStarterLine = isArrowFunc || isRegexBlockStarter;

        const lineEnding = " |END_STATEMENT|"; // Default ending
        let blockPrefix = "";

        if (currentIndent > lastIndent) {
            blockPrefix = "|BEGIN_BLOCK|"; // Add space later when joining parts
            indentStack.push(currentIndent);
        } else if (currentIndent < lastIndent) {
            let endBlocks = "";
            while (currentIndent < (indentStack.peek(-1) ?? -1)) { // Use -1 if stack becomes empty unexpectedly
                indentStack.pop();
                // Add space separator between multiple END_BLOCKs
                endBlocks += (endBlocks ? " " : "") + "|END_BLOCK|";
                if (indentStack.size === 0) {
                    throw new IndentationError(`Line ${lineNumber}: Unindent does not match any outer indentation level.`);
                }
            }

            if (currentIndent !== indentStack.peek(-1)) {
                throw new IndentationError(
                    `Line ${lineNumber}: Dedent to inconsistent level. Expected ${indentStack.peek(-1)}, got ${currentIndent}.`
                );
            }
            blockPrefix = endBlocks; // Already has spaces handled
        }
        // Else: No change in indentation, blockPrefix remains ""

        // Construct the line parts
        if (blockPrefix) {
            preprocessedParts.push(blockPrefix);
        }
        preprocessedParts.push(strippedLineContent);

        // Add line ending, unless this line is a block starter AND the *next* line will indent
        let nextLineIndents = false;
        if (isBlockStarterLine && i + 1 < inputLines.length) {
            let nextLineIndex = i + 1;
            // Find the next non-empty line
            while (nextLineIndex < inputLines.length && !inputLines[nextLineIndex].trim()) {
                nextLineIndex++;
            }
            if (nextLineIndex < inputLines.length) {
                const nextIndent = getIndentationLength(inputLines[nextLineIndex]);
                // Compare next indent to *current* line's indent
                if (nextIndent > currentIndent) {
                    nextLineIndents = true;
                }
            }
        }

        if (!(isBlockStarterLine && nextLineIndents)) {
            preprocessedParts.push(lineEnding.trim()); // Add ending token without leading space initially
        }
    }

    // 4. Handle EOF - Close any remaining open blocks
    let endBlocksEof = "";
    while (indentStack.size > 1) {
        indentStack.pop();
        endBlocksEof += (endBlocksEof ? " " : "") + "|END_BLOCK|";
    }

    if (endBlocksEof) {
        // Ensure the last actual statement before EOF blocks has its END_STATEMENT
        // (unless it was a func header suppressed above)
        const lastPart = preprocessedParts[preprocessedParts.length - 1];
        if (lastPart && !lastPart.endsWith("|END_BLOCK|") && !lastPart.endsWith("|END_STATEMENT|")) {
            preprocessedParts.push("|END_STATEMENT|");
        }
        preprocessedParts.push(endBlocksEof);
    } else if (preprocessedParts.length > 0) {
        // Ensure last line has an end statement if no EOF blocks were added
        const lastPart = preprocessedParts[preprocessedParts.length - 1];
         if (lastPart && !lastPart.endsWith("|END_STATEMENT|") && !lastPart.endsWith("|END_BLOCK|")) { // Check END_BLOCK too
             preprocessedParts.push("|END_STATEMENT|");
        }
    }

    // 5. Return Joined String (Filter out any potential empty strings remaining)
    const result = preprocessedParts.filter(part => part !== "").join(' ');
    // console.log("--- Preprocessed Script ---"); // Optional Debugging
    // console.log(result);
    // console.log("---------------------------");
    return result;
} 