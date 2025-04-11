// Generated from grammar/PinescriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { PinescriptParserListener } from "./PinescriptParserListener";
import { PinescriptParserVisitor } from "./PinescriptParserVisitor";


export class PinescriptParser extends Parser {
	public static readonly BEGIN_BLOCK = 1;
	public static readonly END_BLOCK = 2;
	public static readonly END_STATEMENT = 3;
	public static readonly AND = 4;
	public static readonly AS = 5;
	public static readonly BREAK = 6;
	public static readonly BY = 7;
	public static readonly CONST = 8;
	public static readonly CONTINUE = 9;
	public static readonly ELSE = 10;
	public static readonly EXPORT = 11;
	public static readonly FALSE = 12;
	public static readonly FOR = 13;
	public static readonly IF = 14;
	public static readonly IMPORT = 15;
	public static readonly IN = 16;
	public static readonly INPUT = 17;
	public static readonly METHOD = 18;
	public static readonly NOT = 19;
	public static readonly OR = 20;
	public static readonly SERIES = 21;
	public static readonly SIMPLE = 22;
	public static readonly SWITCH = 23;
	public static readonly TO = 24;
	public static readonly TYPE = 25;
	public static readonly TRUE = 26;
	public static readonly VAR = 27;
	public static readonly VARIP = 28;
	public static readonly WHILE = 29;
	public static readonly LPAR = 30;
	public static readonly RPAR = 31;
	public static readonly LSQB = 32;
	public static readonly RSQB = 33;
	public static readonly LESS = 34;
	public static readonly GREATER = 35;
	public static readonly EQUAL = 36;
	public static readonly EQEQUAL = 37;
	public static readonly NOTEQUAL = 38;
	public static readonly LESSEQUAL = 39;
	public static readonly GREATEREQUAL = 40;
	public static readonly RARROW = 41;
	public static readonly DOT = 42;
	public static readonly COMMA = 43;
	public static readonly COLON = 44;
	public static readonly QUESTION = 45;
	public static readonly PLUS = 46;
	public static readonly MINUS = 47;
	public static readonly STAR = 48;
	public static readonly SLASH = 49;
	public static readonly PERCENT = 50;
	public static readonly PLUSEQUAL = 51;
	public static readonly MINEQUAL = 52;
	public static readonly STAREQUAL = 53;
	public static readonly SLASHEQUAL = 54;
	public static readonly PERCENTEQUAL = 55;
	public static readonly COLONEQUAL = 56;
	public static readonly NAME = 57;
	public static readonly NUMBER = 58;
	public static readonly STRING = 59;
	public static readonly COLOR = 60;
	public static readonly NEWLINE = 61;
	public static readonly WS = 62;
	public static readonly COMMENT = 63;
	public static readonly ERROR_TOKEN = 64;
	public static readonly RULE_start = 0;
	public static readonly RULE_start_script = 1;
	public static readonly RULE_start_expression = 2;
	public static readonly RULE_start_comments = 3;
	public static readonly RULE_statements = 4;
	public static readonly RULE_statement = 5;
	public static readonly RULE_compound_statement_with_block = 6;
	public static readonly RULE_simple_statement = 7;
	public static readonly RULE_compound_assignment = 8;
	public static readonly RULE_compound_variable_initialization = 9;
	public static readonly RULE_compound_name_initialization = 10;
	public static readonly RULE_compound_tuple_initialization = 11;
	public static readonly RULE_compound_reassignment = 12;
	public static readonly RULE_compound_augassignment = 13;
	public static readonly RULE_function_declaration = 14;
	public static readonly RULE_parameter_list = 15;
	public static readonly RULE_parameter_definition = 16;
	public static readonly RULE_type_declaration = 17;
	public static readonly RULE_field_definitions = 18;
	public static readonly RULE_field_definition = 19;
	public static readonly RULE_structure = 20;
	public static readonly RULE_structure_statement = 21;
	public static readonly RULE_structure_expression = 22;
	public static readonly RULE_if_structure = 23;
	public static readonly RULE_if_structure_elif = 24;
	public static readonly RULE_if_structure_else = 25;
	public static readonly RULE_elif_structure = 26;
	public static readonly RULE_elif_structure_elif = 27;
	public static readonly RULE_elif_structure_else = 28;
	public static readonly RULE_else_block = 29;
	public static readonly RULE_for_structure = 30;
	public static readonly RULE_for_structure_to = 31;
	public static readonly RULE_for_structure_in = 32;
	public static readonly RULE_for_iterator = 33;
	public static readonly RULE_while_structure = 34;
	public static readonly RULE_switch_structure = 35;
	public static readonly RULE_switch_cases = 36;
	public static readonly RULE_switch_pattern_case = 37;
	public static readonly RULE_switch_default_case = 38;
	public static readonly RULE_local_block = 39;
	public static readonly RULE_expression = 40;
	public static readonly RULE_expression_statement = 41;
	public static readonly RULE_conditional_expression = 42;
	public static readonly RULE_conditional_expression_rule = 43;
	public static readonly RULE_disjunction_expression = 44;
	public static readonly RULE_disjunction_expression_rule = 45;
	public static readonly RULE_conjunction_expression = 46;
	public static readonly RULE_conjunction_expression_rule = 47;
	public static readonly RULE_equality_expression = 48;
	public static readonly RULE_equality_expression_rule = 49;
	public static readonly RULE_equality_trailing_pair = 50;
	public static readonly RULE_equal_trailing_pair = 51;
	public static readonly RULE_not_equal_trailing_pair = 52;
	public static readonly RULE_inequality_expression = 53;
	public static readonly RULE_inequality_expression_rule = 54;
	public static readonly RULE_inequality_trailing_pair = 55;
	public static readonly RULE_less_than_equal_trailing_pair = 56;
	public static readonly RULE_less_than_trailing_pair = 57;
	public static readonly RULE_greater_than_equal_trailing_pair = 58;
	public static readonly RULE_greater_than_trailing_pair = 59;
	public static readonly RULE_additive_expression = 60;
	public static readonly RULE_additive_op = 61;
	public static readonly RULE_multiplicative_expression = 62;
	public static readonly RULE_multiplicative_op = 63;
	public static readonly RULE_unary_expression = 64;
	public static readonly RULE_unary_op = 65;
	public static readonly RULE_primary_expression = 66;
	public static readonly RULE_argument_list = 67;
	public static readonly RULE_argument_definition = 68;
	public static readonly RULE_subscript_slice = 69;
	public static readonly RULE_atomic_expression = 70;
	public static readonly RULE_literal_expression = 71;
	public static readonly RULE_literal_number = 72;
	public static readonly RULE_literal_string = 73;
	public static readonly RULE_literal_bool = 74;
	public static readonly RULE_literal_color = 75;
	public static readonly RULE_grouped_expression = 76;
	public static readonly RULE_tuple_expression = 77;
	public static readonly RULE_import_statement = 78;
	public static readonly RULE_break_statement = 79;
	public static readonly RULE_continue_statement = 80;
	public static readonly RULE_var_declaration_stmt = 81;
	public static readonly RULE_tuple_declaration = 82;
	public static readonly RULE_declaration_mode = 83;
	public static readonly RULE_assignment_target = 84;
	public static readonly RULE_assignment_target_attribute = 85;
	public static readonly RULE_assignment_target_subscript = 86;
	public static readonly RULE_assignment_target_name = 87;
	public static readonly RULE_assignment_target_group = 88;
	public static readonly RULE_augassign_op = 89;
	public static readonly RULE_type_specification = 90;
	public static readonly RULE_type_qualifier = 91;
	public static readonly RULE_attributed_type_name = 92;
	public static readonly RULE_template_spec_suffix = 93;
	public static readonly RULE_array_type_suffix = 94;
	public static readonly RULE_type_argument_list = 95;
	public static readonly RULE_name = 96;
	public static readonly RULE_name_load = 97;
	public static readonly RULE_name_store = 98;
	public static readonly RULE_comments = 99;
	public static readonly RULE_comment = 100;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "start_script", "start_expression", "start_comments", "statements", 
		"statement", "compound_statement_with_block", "simple_statement", "compound_assignment", 
		"compound_variable_initialization", "compound_name_initialization", "compound_tuple_initialization", 
		"compound_reassignment", "compound_augassignment", "function_declaration", 
		"parameter_list", "parameter_definition", "type_declaration", "field_definitions", 
		"field_definition", "structure", "structure_statement", "structure_expression", 
		"if_structure", "if_structure_elif", "if_structure_else", "elif_structure", 
		"elif_structure_elif", "elif_structure_else", "else_block", "for_structure", 
		"for_structure_to", "for_structure_in", "for_iterator", "while_structure", 
		"switch_structure", "switch_cases", "switch_pattern_case", "switch_default_case", 
		"local_block", "expression", "expression_statement", "conditional_expression", 
		"conditional_expression_rule", "disjunction_expression", "disjunction_expression_rule", 
		"conjunction_expression", "conjunction_expression_rule", "equality_expression", 
		"equality_expression_rule", "equality_trailing_pair", "equal_trailing_pair", 
		"not_equal_trailing_pair", "inequality_expression", "inequality_expression_rule", 
		"inequality_trailing_pair", "less_than_equal_trailing_pair", "less_than_trailing_pair", 
		"greater_than_equal_trailing_pair", "greater_than_trailing_pair", "additive_expression", 
		"additive_op", "multiplicative_expression", "multiplicative_op", "unary_expression", 
		"unary_op", "primary_expression", "argument_list", "argument_definition", 
		"subscript_slice", "atomic_expression", "literal_expression", "literal_number", 
		"literal_string", "literal_bool", "literal_color", "grouped_expression", 
		"tuple_expression", "import_statement", "break_statement", "continue_statement", 
		"var_declaration_stmt", "tuple_declaration", "declaration_mode", "assignment_target", 
		"assignment_target_attribute", "assignment_target_subscript", "assignment_target_name", 
		"assignment_target_group", "augassign_op", "type_specification", "type_qualifier", 
		"attributed_type_name", "template_spec_suffix", "array_type_suffix", "type_argument_list", 
		"name", "name_load", "name_store", "comments", "comment",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'|BEGIN_BLOCK|'", "'|END_BLOCK|'", "'|END_STATEMENT|'", "'and'", 
		"'as'", "'break'", "'by'", "'const'", "'continue'", "'else'", "'export'", 
		"'false'", "'for'", "'if'", "'import'", "'in'", "'input'", "'method'", 
		"'not'", "'or'", "'series'", "'simple'", "'switch'", "'to'", "'type'", 
		"'true'", "'var'", "'varip'", "'while'", "'('", "')'", "'['", "']'", "'<'", 
		"'>'", "'='", "'=='", "'!='", "'<='", "'>='", "'=>'", "'.'", "','", "':'", 
		"'?'", "'+'", "'-'", "'*'", "'/'", "'%'", "'+='", "'-='", "'*='", "'/='", 
		"'%='", "':='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "BEGIN_BLOCK", "END_BLOCK", "END_STATEMENT", "AND", "AS", "BREAK", 
		"BY", "CONST", "CONTINUE", "ELSE", "EXPORT", "FALSE", "FOR", "IF", "IMPORT", 
		"IN", "INPUT", "METHOD", "NOT", "OR", "SERIES", "SIMPLE", "SWITCH", "TO", 
		"TYPE", "TRUE", "VAR", "VARIP", "WHILE", "LPAR", "RPAR", "LSQB", "RSQB", 
		"LESS", "GREATER", "EQUAL", "EQEQUAL", "NOTEQUAL", "LESSEQUAL", "GREATEREQUAL", 
		"RARROW", "DOT", "COMMA", "COLON", "QUESTION", "PLUS", "MINUS", "STAR", 
		"SLASH", "PERCENT", "PLUSEQUAL", "MINEQUAL", "STAREQUAL", "SLASHEQUAL", 
		"PERCENTEQUAL", "COLONEQUAL", "NAME", "NUMBER", "STRING", "COLOR", "NEWLINE", 
		"WS", "COMMENT", "ERROR_TOKEN",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PinescriptParser._LITERAL_NAMES, PinescriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PinescriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "PinescriptParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return PinescriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return PinescriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(PinescriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, PinescriptParser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this.start_script();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public start_script(): Start_scriptContext {
		let _localctx: Start_scriptContext = new Start_scriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, PinescriptParser.RULE_start_script);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PinescriptParser.BREAK) | (1 << PinescriptParser.CONST) | (1 << PinescriptParser.CONTINUE) | (1 << PinescriptParser.EXPORT) | (1 << PinescriptParser.FALSE) | (1 << PinescriptParser.FOR) | (1 << PinescriptParser.IF) | (1 << PinescriptParser.IMPORT) | (1 << PinescriptParser.INPUT) | (1 << PinescriptParser.METHOD) | (1 << PinescriptParser.NOT) | (1 << PinescriptParser.SERIES) | (1 << PinescriptParser.SIMPLE) | (1 << PinescriptParser.SWITCH) | (1 << PinescriptParser.TYPE) | (1 << PinescriptParser.TRUE) | (1 << PinescriptParser.VAR) | (1 << PinescriptParser.VARIP) | (1 << PinescriptParser.WHILE) | (1 << PinescriptParser.LPAR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PinescriptParser.LSQB - 32)) | (1 << (PinescriptParser.PLUS - 32)) | (1 << (PinescriptParser.MINUS - 32)) | (1 << (PinescriptParser.NAME - 32)) | (1 << (PinescriptParser.NUMBER - 32)) | (1 << (PinescriptParser.STRING - 32)) | (1 << (PinescriptParser.COLOR - 32)))) !== 0)) {
				{
				this.state = 204;
				this.statements();
				}
			}

			this.state = 207;
			this.match(PinescriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public start_expression(): Start_expressionContext {
		let _localctx: Start_expressionContext = new Start_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, PinescriptParser.RULE_start_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this.expression();
			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PinescriptParser.END_STATEMENT) {
				{
				this.state = 210;
				this.match(PinescriptParser.END_STATEMENT);
				}
			}

			this.state = 213;
			this.match(PinescriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public start_comments(): Start_commentsContext {
		let _localctx: Start_commentsContext = new Start_commentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, PinescriptParser.RULE_start_comments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PinescriptParser.COMMENT) {
				{
				this.state = 215;
				this.comments();
				}
			}

			this.state = 218;
			this.match(PinescriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statements(): StatementsContext {
		let _localctx: StatementsContext = new StatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, PinescriptParser.RULE_statements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 220;
				this.statement();
				}
				}
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PinescriptParser.BREAK) | (1 << PinescriptParser.CONST) | (1 << PinescriptParser.CONTINUE) | (1 << PinescriptParser.EXPORT) | (1 << PinescriptParser.FALSE) | (1 << PinescriptParser.FOR) | (1 << PinescriptParser.IF) | (1 << PinescriptParser.IMPORT) | (1 << PinescriptParser.INPUT) | (1 << PinescriptParser.METHOD) | (1 << PinescriptParser.NOT) | (1 << PinescriptParser.SERIES) | (1 << PinescriptParser.SIMPLE) | (1 << PinescriptParser.SWITCH) | (1 << PinescriptParser.TYPE) | (1 << PinescriptParser.TRUE) | (1 << PinescriptParser.VAR) | (1 << PinescriptParser.VARIP) | (1 << PinescriptParser.WHILE) | (1 << PinescriptParser.LPAR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PinescriptParser.LSQB - 32)) | (1 << (PinescriptParser.PLUS - 32)) | (1 << (PinescriptParser.MINUS - 32)) | (1 << (PinescriptParser.NAME - 32)) | (1 << (PinescriptParser.NUMBER - 32)) | (1 << (PinescriptParser.STRING - 32)) | (1 << (PinescriptParser.COLOR - 32)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, PinescriptParser.RULE_statement);
		try {
			let _alt: number;
			this.state = 238;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 225;
				this.compound_statement_with_block();
				this.state = 229;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 226;
						this.match(PinescriptParser.END_BLOCK);
						}
						}
					}
					this.state = 231;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 232;
				this.simple_statement();
				this.state = 233;
				this.match(PinescriptParser.END_STATEMENT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 235;
				this.compound_assignment();
				this.state = 236;
				this.match(PinescriptParser.END_STATEMENT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compound_statement_with_block(): Compound_statement_with_blockContext {
		let _localctx: Compound_statement_with_blockContext = new Compound_statement_with_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, PinescriptParser.RULE_compound_statement_with_block);
		try {
			this.state = 243;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 240;
				this.function_declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 241;
				this.type_declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 242;
				this.structure_statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simple_statement(): Simple_statementContext {
		let _localctx: Simple_statementContext = new Simple_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, PinescriptParser.RULE_simple_statement);
		try {
			this.state = 249;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PinescriptParser.CONST:
			case PinescriptParser.FALSE:
			case PinescriptParser.INPUT:
			case PinescriptParser.METHOD:
			case PinescriptParser.NOT:
			case PinescriptParser.SERIES:
			case PinescriptParser.SIMPLE:
			case PinescriptParser.TYPE:
			case PinescriptParser.TRUE:
			case PinescriptParser.LPAR:
			case PinescriptParser.LSQB:
			case PinescriptParser.PLUS:
			case PinescriptParser.MINUS:
			case PinescriptParser.NAME:
			case PinescriptParser.NUMBER:
			case PinescriptParser.STRING:
			case PinescriptParser.COLOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 245;
				this.expression_statement();
				}
				break;
			case PinescriptParser.IMPORT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 246;
				this.import_statement();
				}
				break;
			case PinescriptParser.BREAK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 247;
				this.break_statement();
				}
				break;
			case PinescriptParser.CONTINUE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 248;
				this.continue_statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compound_assignment(): Compound_assignmentContext {
		let _localctx: Compound_assignmentContext = new Compound_assignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, PinescriptParser.RULE_compound_assignment);
		try {
			this.state = 254;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 251;
				this.compound_variable_initialization();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 252;
				this.compound_reassignment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 253;
				this.compound_augassignment();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compound_variable_initialization(): Compound_variable_initializationContext {
		let _localctx: Compound_variable_initializationContext = new Compound_variable_initializationContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, PinescriptParser.RULE_compound_variable_initialization);
		try {
			this.state = 258;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PinescriptParser.CONST:
			case PinescriptParser.INPUT:
			case PinescriptParser.METHOD:
			case PinescriptParser.SERIES:
			case PinescriptParser.SIMPLE:
			case PinescriptParser.TYPE:
			case PinescriptParser.VAR:
			case PinescriptParser.VARIP:
			case PinescriptParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 256;
				this.compound_name_initialization();
				}
				break;
			case PinescriptParser.LSQB:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 257;
				this.compound_tuple_initialization();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compound_name_initialization(): Compound_name_initializationContext {
		let _localctx: Compound_name_initializationContext = new Compound_name_initializationContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, PinescriptParser.RULE_compound_name_initialization);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			this.var_declaration_stmt();
			this.state = 261;
			this.match(PinescriptParser.EQUAL);
			this.state = 264;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PinescriptParser.CONST:
			case PinescriptParser.FALSE:
			case PinescriptParser.INPUT:
			case PinescriptParser.METHOD:
			case PinescriptParser.NOT:
			case PinescriptParser.SERIES:
			case PinescriptParser.SIMPLE:
			case PinescriptParser.TYPE:
			case PinescriptParser.TRUE:
			case PinescriptParser.LPAR:
			case PinescriptParser.LSQB:
			case PinescriptParser.PLUS:
			case PinescriptParser.MINUS:
			case PinescriptParser.NAME:
			case PinescriptParser.NUMBER:
			case PinescriptParser.STRING:
			case PinescriptParser.COLOR:
				{
				this.state = 262;
				this.expression();
				}
				break;
			case PinescriptParser.FOR:
			case PinescriptParser.IF:
			case PinescriptParser.SWITCH:
			case PinescriptParser.WHILE:
				{
				this.state = 263;
				this.structure_expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compound_tuple_initialization(): Compound_tuple_initializationContext {
		let _localctx: Compound_tuple_initializationContext = new Compound_tuple_initializationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, PinescriptParser.RULE_compound_tuple_initialization);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.tuple_declaration();
			this.state = 267;
			this.match(PinescriptParser.EQUAL);
			this.state = 270;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PinescriptParser.CONST:
			case PinescriptParser.FALSE:
			case PinescriptParser.INPUT:
			case PinescriptParser.METHOD:
			case PinescriptParser.NOT:
			case PinescriptParser.SERIES:
			case PinescriptParser.SIMPLE:
			case PinescriptParser.TYPE:
			case PinescriptParser.TRUE:
			case PinescriptParser.LPAR:
			case PinescriptParser.LSQB:
			case PinescriptParser.PLUS:
			case PinescriptParser.MINUS:
			case PinescriptParser.NAME:
			case PinescriptParser.NUMBER:
			case PinescriptParser.STRING:
			case PinescriptParser.COLOR:
				{
				this.state = 268;
				this.expression();
				}
				break;
			case PinescriptParser.FOR:
			case PinescriptParser.IF:
			case PinescriptParser.SWITCH:
			case PinescriptParser.WHILE:
				{
				this.state = 269;
				this.structure_expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compound_reassignment(): Compound_reassignmentContext {
		let _localctx: Compound_reassignmentContext = new Compound_reassignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, PinescriptParser.RULE_compound_reassignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this.assignment_target();
			this.state = 273;
			this.match(PinescriptParser.COLONEQUAL);
			this.state = 276;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PinescriptParser.CONST:
			case PinescriptParser.FALSE:
			case PinescriptParser.INPUT:
			case PinescriptParser.METHOD:
			case PinescriptParser.NOT:
			case PinescriptParser.SERIES:
			case PinescriptParser.SIMPLE:
			case PinescriptParser.TYPE:
			case PinescriptParser.TRUE:
			case PinescriptParser.LPAR:
			case PinescriptParser.LSQB:
			case PinescriptParser.PLUS:
			case PinescriptParser.MINUS:
			case PinescriptParser.NAME:
			case PinescriptParser.NUMBER:
			case PinescriptParser.STRING:
			case PinescriptParser.COLOR:
				{
				this.state = 274;
				this.expression();
				}
				break;
			case PinescriptParser.FOR:
			case PinescriptParser.IF:
			case PinescriptParser.SWITCH:
			case PinescriptParser.WHILE:
				{
				this.state = 275;
				this.structure_expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compound_augassignment(): Compound_augassignmentContext {
		let _localctx: Compound_augassignmentContext = new Compound_augassignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, PinescriptParser.RULE_compound_augassignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			this.assignment_target();
			this.state = 279;
			this.augassign_op();
			this.state = 282;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PinescriptParser.CONST:
			case PinescriptParser.FALSE:
			case PinescriptParser.INPUT:
			case PinescriptParser.METHOD:
			case PinescriptParser.NOT:
			case PinescriptParser.SERIES:
			case PinescriptParser.SIMPLE:
			case PinescriptParser.TYPE:
			case PinescriptParser.TRUE:
			case PinescriptParser.LPAR:
			case PinescriptParser.LSQB:
			case PinescriptParser.PLUS:
			case PinescriptParser.MINUS:
			case PinescriptParser.NAME:
			case PinescriptParser.NUMBER:
			case PinescriptParser.STRING:
			case PinescriptParser.COLOR:
				{
				this.state = 280;
				this.expression();
				}
				break;
			case PinescriptParser.FOR:
			case PinescriptParser.IF:
			case PinescriptParser.SWITCH:
			case PinescriptParser.WHILE:
				{
				this.state = 281;
				this.structure_expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_declaration(): Function_declarationContext {
		let _localctx: Function_declarationContext = new Function_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, PinescriptParser.RULE_function_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PinescriptParser.EXPORT) {
				{
				this.state = 284;
				this.match(PinescriptParser.EXPORT);
				}
			}

			this.state = 288;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 287;
				this.match(PinescriptParser.METHOD);
				}
				break;
			}
			this.state = 290;
			this.name();
			this.state = 291;
			this.match(PinescriptParser.LPAR);
			this.state = 293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PinescriptParser.CONST) | (1 << PinescriptParser.INPUT) | (1 << PinescriptParser.METHOD) | (1 << PinescriptParser.SERIES) | (1 << PinescriptParser.SIMPLE) | (1 << PinescriptParser.TYPE))) !== 0) || _la === PinescriptParser.NAME) {
				{
				this.state = 292;
				this.parameter_list();
				}
			}

			this.state = 295;
			this.match(PinescriptParser.RPAR);
			this.state = 296;
			this.match(PinescriptParser.RARROW);
			this.state = 297;
			this.local_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter_list(): Parameter_listContext {
		let _localctx: Parameter_listContext = new Parameter_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, PinescriptParser.RULE_parameter_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.parameter_definition();
			this.state = 304;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 300;
					this.match(PinescriptParser.COMMA);
					this.state = 301;
					this.parameter_definition();
					}
					}
				}
				this.state = 306;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PinescriptParser.COMMA) {
				{
				this.state = 307;
				this.match(PinescriptParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter_definition(): Parameter_definitionContext {
		let _localctx: Parameter_definitionContext = new Parameter_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, PinescriptParser.RULE_parameter_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 310;
				this.type_specification();
				}
				break;
			}
			this.state = 313;
			this.name_store();
			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PinescriptParser.EQUAL) {
				{
				this.state = 314;
				this.match(PinescriptParser.EQUAL);
				this.state = 315;
				this.expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_declaration(): Type_declarationContext {
		let _localctx: Type_declarationContext = new Type_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, PinescriptParser.RULE_type_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PinescriptParser.EXPORT) {
				{
				this.state = 318;
				this.match(PinescriptParser.EXPORT);
				}
			}

			this.state = 321;
			this.match(PinescriptParser.TYPE);
			this.state = 322;
			this.name();
			this.state = 323;
			this.match(PinescriptParser.BEGIN_BLOCK);
			this.state = 324;
			this.field_definitions();
			this.state = 325;
			this.match(PinescriptParser.END_BLOCK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field_definitions(): Field_definitionsContext {
		let _localctx: Field_definitionsContext = new Field_definitionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, PinescriptParser.RULE_field_definitions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 327;
				this.field_definition();
				}
				}
				this.state = 330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PinescriptParser.CONST) | (1 << PinescriptParser.INPUT) | (1 << PinescriptParser.METHOD) | (1 << PinescriptParser.SERIES) | (1 << PinescriptParser.SIMPLE) | (1 << PinescriptParser.TYPE))) !== 0) || _la === PinescriptParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field_definition(): Field_definitionContext {
		let _localctx: Field_definitionContext = new Field_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, PinescriptParser.RULE_field_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this.type_specification();
			this.state = 333;
			this.name_store();
			this.state = 336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PinescriptParser.EQUAL) {
				{
				this.state = 334;
				this.match(PinescriptParser.EQUAL);
				this.state = 335;
				this.expression();
				}
			}

			this.state = 338;
			this.match(PinescriptParser.END_STATEMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structure(): StructureContext {
		let _localctx: StructureContext = new StructureContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, PinescriptParser.RULE_structure);
		try {
			this.state = 344;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PinescriptParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 340;
				this.if_structure();
				}
				break;
			case PinescriptParser.FOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 341;
				this.for_structure();
				}
				break;
			case PinescriptParser.WHILE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 342;
				this.while_structure();
				}
				break;
			case PinescriptParser.SWITCH:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 343;
				this.switch_structure();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structure_statement(): Structure_statementContext {
		let _localctx: Structure_statementContext = new Structure_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, PinescriptParser.RULE_structure_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.structure();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structure_expression(): Structure_expressionContext {
		let _localctx: Structure_expressionContext = new Structure_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, PinescriptParser.RULE_structure_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.structure();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_structure(): If_structureContext {
		let _localctx: If_structureContext = new If_structureContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, PinescriptParser.RULE_if_structure);
		try {
			this.state = 352;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 350;
				this.if_structure_elif();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 351;
				this.if_structure_else();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_structure_elif(): If_structure_elifContext {
		let _localctx: If_structure_elifContext = new If_structure_elifContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, PinescriptParser.RULE_if_structure_elif);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this.match(PinescriptParser.IF);
			this.state = 355;
			this.expression();
			this.state = 356;
			this.local_block();
			this.state = 357;
			this.elif_structure();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_structure_else(): If_structure_elseContext {
		let _localctx: If_structure_elseContext = new If_structure_elseContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, PinescriptParser.RULE_if_structure_else);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 359;
			this.match(PinescriptParser.IF);
			this.state = 360;
			this.expression();
			this.state = 361;
			this.local_block();
			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PinescriptParser.ELSE) {
				{
				this.state = 362;
				this.else_block();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elif_structure(): Elif_structureContext {
		let _localctx: Elif_structureContext = new Elif_structureContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, PinescriptParser.RULE_elif_structure);
		try {
			this.state = 367;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 365;
				this.elif_structure_elif();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 366;
				this.elif_structure_else();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elif_structure_elif(): Elif_structure_elifContext {
		let _localctx: Elif_structure_elifContext = new Elif_structure_elifContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, PinescriptParser.RULE_elif_structure_elif);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this.match(PinescriptParser.ELSE);
			this.state = 370;
			this.match(PinescriptParser.IF);
			this.state = 371;
			this.expression();
			this.state = 372;
			this.local_block();
			this.state = 373;
			this.elif_structure();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elif_structure_else(): Elif_structure_elseContext {
		let _localctx: Elif_structure_elseContext = new Elif_structure_elseContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, PinescriptParser.RULE_elif_structure_else);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
			this.match(PinescriptParser.ELSE);
			this.state = 376;
			this.match(PinescriptParser.IF);
			this.state = 377;
			this.expression();
			this.state = 378;
			this.local_block();
			this.state = 380;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PinescriptParser.ELSE) {
				{
				this.state = 379;
				this.else_block();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public else_block(): Else_blockContext {
		let _localctx: Else_blockContext = new Else_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, PinescriptParser.RULE_else_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this.match(PinescriptParser.ELSE);
			this.state = 383;
			this.local_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public for_structure(): For_structureContext {
		let _localctx: For_structureContext = new For_structureContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, PinescriptParser.RULE_for_structure);
		try {
			this.state = 387;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 385;
				this.for_structure_to();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 386;
				this.for_structure_in();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public for_structure_to(): For_structure_toContext {
		let _localctx: For_structure_toContext = new For_structure_toContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, PinescriptParser.RULE_for_structure_to);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this.match(PinescriptParser.FOR);
			this.state = 390;
			this.for_iterator();
			this.state = 391;
			this.match(PinescriptParser.EQUAL);
			this.state = 392;
			this.expression();
			this.state = 393;
			this.match(PinescriptParser.TO);
			this.state = 394;
			this.expression();
			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PinescriptParser.BY) {
				{
				this.state = 395;
				this.match(PinescriptParser.BY);
				this.state = 396;
				this.expression();
				}
			}

			this.state = 399;
			this.local_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public for_structure_in(): For_structure_inContext {
		let _localctx: For_structure_inContext = new For_structure_inContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, PinescriptParser.RULE_for_structure_in);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this.match(PinescriptParser.FOR);
			this.state = 402;
			this.for_iterator();
			this.state = 403;
			this.match(PinescriptParser.IN);
			this.state = 404;
			this.expression();
			this.state = 405;
			this.local_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public for_iterator(): For_iteratorContext {
		let _localctx: For_iteratorContext = new For_iteratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, PinescriptParser.RULE_for_iterator);
		try {
			this.state = 409;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PinescriptParser.CONST:
			case PinescriptParser.INPUT:
			case PinescriptParser.METHOD:
			case PinescriptParser.SERIES:
			case PinescriptParser.SIMPLE:
			case PinescriptParser.TYPE:
			case PinescriptParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 407;
				this.name_store();
				}
				break;
			case PinescriptParser.LSQB:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 408;
				this.tuple_declaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public while_structure(): While_structureContext {
		let _localctx: While_structureContext = new While_structureContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, PinescriptParser.RULE_while_structure);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			this.match(PinescriptParser.WHILE);
			this.state = 412;
			this.expression();
			this.state = 413;
			this.local_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switch_structure(): Switch_structureContext {
		let _localctx: Switch_structureContext = new Switch_structureContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, PinescriptParser.RULE_switch_structure);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.match(PinescriptParser.SWITCH);
			this.state = 417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PinescriptParser.CONST) | (1 << PinescriptParser.FALSE) | (1 << PinescriptParser.INPUT) | (1 << PinescriptParser.METHOD) | (1 << PinescriptParser.NOT) | (1 << PinescriptParser.SERIES) | (1 << PinescriptParser.SIMPLE) | (1 << PinescriptParser.TYPE) | (1 << PinescriptParser.TRUE) | (1 << PinescriptParser.LPAR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PinescriptParser.LSQB - 32)) | (1 << (PinescriptParser.PLUS - 32)) | (1 << (PinescriptParser.MINUS - 32)) | (1 << (PinescriptParser.NAME - 32)) | (1 << (PinescriptParser.NUMBER - 32)) | (1 << (PinescriptParser.STRING - 32)) | (1 << (PinescriptParser.COLOR - 32)))) !== 0)) {
				{
				this.state = 416;
				this.expression();
				}
			}

			this.state = 419;
			this.match(PinescriptParser.BEGIN_BLOCK);
			this.state = 420;
			this.switch_cases();
			this.state = 421;
			this.match(PinescriptParser.END_BLOCK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switch_cases(): Switch_casesContext {
		let _localctx: Switch_casesContext = new Switch_casesContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, PinescriptParser.RULE_switch_cases);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 423;
				this.switch_pattern_case();
				}
				}
				this.state = 426;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PinescriptParser.CONST) | (1 << PinescriptParser.FALSE) | (1 << PinescriptParser.INPUT) | (1 << PinescriptParser.METHOD) | (1 << PinescriptParser.NOT) | (1 << PinescriptParser.SERIES) | (1 << PinescriptParser.SIMPLE) | (1 << PinescriptParser.TYPE) | (1 << PinescriptParser.TRUE) | (1 << PinescriptParser.LPAR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PinescriptParser.LSQB - 32)) | (1 << (PinescriptParser.PLUS - 32)) | (1 << (PinescriptParser.MINUS - 32)) | (1 << (PinescriptParser.NAME - 32)) | (1 << (PinescriptParser.NUMBER - 32)) | (1 << (PinescriptParser.STRING - 32)) | (1 << (PinescriptParser.COLOR - 32)))) !== 0));
			this.state = 429;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PinescriptParser.RARROW) {
				{
				this.state = 428;
				this.switch_default_case();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switch_pattern_case(): Switch_pattern_caseContext {
		let _localctx: Switch_pattern_caseContext = new Switch_pattern_caseContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, PinescriptParser.RULE_switch_pattern_case);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this.expression();
			this.state = 432;
			this.match(PinescriptParser.RARROW);
			this.state = 433;
			this.local_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switch_default_case(): Switch_default_caseContext {
		let _localctx: Switch_default_caseContext = new Switch_default_caseContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, PinescriptParser.RULE_switch_default_case);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.match(PinescriptParser.RARROW);
			this.state = 436;
			this.local_block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public local_block(): Local_blockContext {
		let _localctx: Local_blockContext = new Local_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, PinescriptParser.RULE_local_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 438;
			this.match(PinescriptParser.BEGIN_BLOCK);
			this.state = 439;
			this.statements();
			this.state = 440;
			this.match(PinescriptParser.END_BLOCK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, PinescriptParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			this.conditional_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression_statement(): Expression_statementContext {
		let _localctx: Expression_statementContext = new Expression_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, PinescriptParser.RULE_expression_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditional_expression(): Conditional_expressionContext {
		let _localctx: Conditional_expressionContext = new Conditional_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, PinescriptParser.RULE_conditional_expression);
		try {
			this.state = 448;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 446;
				this.conditional_expression_rule();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 447;
				this.disjunction_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditional_expression_rule(): Conditional_expression_ruleContext {
		let _localctx: Conditional_expression_ruleContext = new Conditional_expression_ruleContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, PinescriptParser.RULE_conditional_expression_rule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			this.disjunction_expression();
			this.state = 451;
			this.match(PinescriptParser.QUESTION);
			this.state = 452;
			this.expression();
			this.state = 453;
			this.match(PinescriptParser.COLON);
			this.state = 454;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public disjunction_expression(): Disjunction_expressionContext {
		let _localctx: Disjunction_expressionContext = new Disjunction_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, PinescriptParser.RULE_disjunction_expression);
		try {
			this.state = 458;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 456;
				this.disjunction_expression_rule();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 457;
				this.conjunction_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public disjunction_expression_rule(): Disjunction_expression_ruleContext {
		let _localctx: Disjunction_expression_ruleContext = new Disjunction_expression_ruleContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, PinescriptParser.RULE_disjunction_expression_rule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.conjunction_expression();
			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 461;
				this.match(PinescriptParser.OR);
				this.state = 462;
				this.conjunction_expression();
				}
				}
				this.state = 465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === PinescriptParser.OR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conjunction_expression(): Conjunction_expressionContext {
		let _localctx: Conjunction_expressionContext = new Conjunction_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, PinescriptParser.RULE_conjunction_expression);
		try {
			this.state = 469;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 467;
				this.conjunction_expression_rule();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 468;
				this.equality_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conjunction_expression_rule(): Conjunction_expression_ruleContext {
		let _localctx: Conjunction_expression_ruleContext = new Conjunction_expression_ruleContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, PinescriptParser.RULE_conjunction_expression_rule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			this.equality_expression();
			this.state = 474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 472;
				this.match(PinescriptParser.AND);
				this.state = 473;
				this.equality_expression();
				}
				}
				this.state = 476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === PinescriptParser.AND);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equality_expression(): Equality_expressionContext {
		let _localctx: Equality_expressionContext = new Equality_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, PinescriptParser.RULE_equality_expression);
		try {
			this.state = 480;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 478;
				this.equality_expression_rule();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 479;
				this.inequality_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equality_expression_rule(): Equality_expression_ruleContext {
		let _localctx: Equality_expression_ruleContext = new Equality_expression_ruleContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, PinescriptParser.RULE_equality_expression_rule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
			this.inequality_expression();
			this.state = 484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 483;
				this.equality_trailing_pair();
				}
				}
				this.state = 486;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === PinescriptParser.EQEQUAL || _la === PinescriptParser.NOTEQUAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equality_trailing_pair(): Equality_trailing_pairContext {
		let _localctx: Equality_trailing_pairContext = new Equality_trailing_pairContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, PinescriptParser.RULE_equality_trailing_pair);
		try {
			this.state = 490;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PinescriptParser.EQEQUAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 488;
				this.equal_trailing_pair();
				}
				break;
			case PinescriptParser.NOTEQUAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 489;
				this.not_equal_trailing_pair();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equal_trailing_pair(): Equal_trailing_pairContext {
		let _localctx: Equal_trailing_pairContext = new Equal_trailing_pairContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, PinescriptParser.RULE_equal_trailing_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this.match(PinescriptParser.EQEQUAL);
			this.state = 493;
			this.inequality_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public not_equal_trailing_pair(): Not_equal_trailing_pairContext {
		let _localctx: Not_equal_trailing_pairContext = new Not_equal_trailing_pairContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, PinescriptParser.RULE_not_equal_trailing_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			this.match(PinescriptParser.NOTEQUAL);
			this.state = 496;
			this.inequality_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inequality_expression(): Inequality_expressionContext {
		let _localctx: Inequality_expressionContext = new Inequality_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, PinescriptParser.RULE_inequality_expression);
		try {
			this.state = 500;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 498;
				this.inequality_expression_rule();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 499;
				this.additive_expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inequality_expression_rule(): Inequality_expression_ruleContext {
		let _localctx: Inequality_expression_ruleContext = new Inequality_expression_ruleContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, PinescriptParser.RULE_inequality_expression_rule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 502;
			this.additive_expression(0);
			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 503;
				this.inequality_trailing_pair();
				}
				}
				this.state = 506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (PinescriptParser.LESS - 34)) | (1 << (PinescriptParser.GREATER - 34)) | (1 << (PinescriptParser.LESSEQUAL - 34)) | (1 << (PinescriptParser.GREATEREQUAL - 34)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inequality_trailing_pair(): Inequality_trailing_pairContext {
		let _localctx: Inequality_trailing_pairContext = new Inequality_trailing_pairContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, PinescriptParser.RULE_inequality_trailing_pair);
		try {
			this.state = 512;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PinescriptParser.LESSEQUAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 508;
				this.less_than_equal_trailing_pair();
				}
				break;
			case PinescriptParser.LESS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 509;
				this.less_than_trailing_pair();
				}
				break;
			case PinescriptParser.GREATEREQUAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 510;
				this.greater_than_equal_trailing_pair();
				}
				break;
			case PinescriptParser.GREATER:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 511;
				this.greater_than_trailing_pair();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public less_than_equal_trailing_pair(): Less_than_equal_trailing_pairContext {
		let _localctx: Less_than_equal_trailing_pairContext = new Less_than_equal_trailing_pairContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, PinescriptParser.RULE_less_than_equal_trailing_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			this.match(PinescriptParser.LESSEQUAL);
			this.state = 515;
			this.additive_expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public less_than_trailing_pair(): Less_than_trailing_pairContext {
		let _localctx: Less_than_trailing_pairContext = new Less_than_trailing_pairContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, PinescriptParser.RULE_less_than_trailing_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this.match(PinescriptParser.LESS);
			this.state = 518;
			this.additive_expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public greater_than_equal_trailing_pair(): Greater_than_equal_trailing_pairContext {
		let _localctx: Greater_than_equal_trailing_pairContext = new Greater_than_equal_trailing_pairContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, PinescriptParser.RULE_greater_than_equal_trailing_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 520;
			this.match(PinescriptParser.GREATEREQUAL);
			this.state = 521;
			this.additive_expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public greater_than_trailing_pair(): Greater_than_trailing_pairContext {
		let _localctx: Greater_than_trailing_pairContext = new Greater_than_trailing_pairContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, PinescriptParser.RULE_greater_than_trailing_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this.match(PinescriptParser.GREATER);
			this.state = 524;
			this.additive_expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public additive_expression(): Additive_expressionContext;
	public additive_expression(_p: number): Additive_expressionContext;
	// @RuleVersion(0)
	public additive_expression(_p?: number): Additive_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Additive_expressionContext = new Additive_expressionContext(this._ctx, _parentState);
		let _prevctx: Additive_expressionContext = _localctx;
		let _startState: number = 120;
		this.enterRecursionRule(_localctx, 120, PinescriptParser.RULE_additive_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 527;
			this.multiplicative_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 535;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Additive_expressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, PinescriptParser.RULE_additive_expression);
					this.state = 529;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 530;
					this.additive_op();
					this.state = 531;
					this.multiplicative_expression(0);
					}
					}
				}
				this.state = 537;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additive_op(): Additive_opContext {
		let _localctx: Additive_opContext = new Additive_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, PinescriptParser.RULE_additive_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 538;
			_la = this._input.LA(1);
			if (!(_la === PinescriptParser.PLUS || _la === PinescriptParser.MINUS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public multiplicative_expression(): Multiplicative_expressionContext;
	public multiplicative_expression(_p: number): Multiplicative_expressionContext;
	// @RuleVersion(0)
	public multiplicative_expression(_p?: number): Multiplicative_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Multiplicative_expressionContext = new Multiplicative_expressionContext(this._ctx, _parentState);
		let _prevctx: Multiplicative_expressionContext = _localctx;
		let _startState: number = 124;
		this.enterRecursionRule(_localctx, 124, PinescriptParser.RULE_multiplicative_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 541;
			this.unary_expression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 549;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Multiplicative_expressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, PinescriptParser.RULE_multiplicative_expression);
					this.state = 543;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 544;
					this.multiplicative_op();
					this.state = 545;
					this.unary_expression();
					}
					}
				}
				this.state = 551;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicative_op(): Multiplicative_opContext {
		let _localctx: Multiplicative_opContext = new Multiplicative_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, PinescriptParser.RULE_multiplicative_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
			_la = this._input.LA(1);
			if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (PinescriptParser.STAR - 48)) | (1 << (PinescriptParser.SLASH - 48)) | (1 << (PinescriptParser.PERCENT - 48)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unary_expression(): Unary_expressionContext {
		let _localctx: Unary_expressionContext = new Unary_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, PinescriptParser.RULE_unary_expression);
		try {
			this.state = 558;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PinescriptParser.NOT:
			case PinescriptParser.PLUS:
			case PinescriptParser.MINUS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 554;
				this.unary_op();
				this.state = 555;
				this.unary_expression();
				}
				break;
			case PinescriptParser.CONST:
			case PinescriptParser.FALSE:
			case PinescriptParser.INPUT:
			case PinescriptParser.METHOD:
			case PinescriptParser.SERIES:
			case PinescriptParser.SIMPLE:
			case PinescriptParser.TYPE:
			case PinescriptParser.TRUE:
			case PinescriptParser.LPAR:
			case PinescriptParser.LSQB:
			case PinescriptParser.NAME:
			case PinescriptParser.NUMBER:
			case PinescriptParser.STRING:
			case PinescriptParser.COLOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 557;
				this.primary_expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unary_op(): Unary_opContext {
		let _localctx: Unary_opContext = new Unary_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, PinescriptParser.RULE_unary_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 560;
			_la = this._input.LA(1);
			if (!(((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & ((1 << (PinescriptParser.NOT - 19)) | (1 << (PinescriptParser.PLUS - 19)) | (1 << (PinescriptParser.MINUS - 19)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public primary_expression(): Primary_expressionContext;
	public primary_expression(_p: number): Primary_expressionContext;
	// @RuleVersion(0)
	public primary_expression(_p?: number): Primary_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Primary_expressionContext = new Primary_expressionContext(this._ctx, _parentState);
		let _prevctx: Primary_expressionContext = _localctx;
		let _startState: number = 132;
		this.enterRecursionRule(_localctx, 132, PinescriptParser.RULE_primary_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new Primary_expression_fallbackContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 563;
			this.atomic_expression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 584;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 582;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
					case 1:
						{
						_localctx = new Primary_expression_attributeContext(new Primary_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PinescriptParser.RULE_primary_expression);
						this.state = 565;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 566;
						this.match(PinescriptParser.DOT);
						this.state = 567;
						this.name_load();
						}
						break;

					case 2:
						{
						_localctx = new Primary_expression_callContext(new Primary_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PinescriptParser.RULE_primary_expression);
						this.state = 568;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 570;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === PinescriptParser.LESS) {
							{
							this.state = 569;
							this.template_spec_suffix();
							}
						}

						this.state = 572;
						this.match(PinescriptParser.LPAR);
						this.state = 574;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PinescriptParser.CONST) | (1 << PinescriptParser.FALSE) | (1 << PinescriptParser.INPUT) | (1 << PinescriptParser.METHOD) | (1 << PinescriptParser.NOT) | (1 << PinescriptParser.SERIES) | (1 << PinescriptParser.SIMPLE) | (1 << PinescriptParser.TYPE) | (1 << PinescriptParser.TRUE) | (1 << PinescriptParser.LPAR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (PinescriptParser.LSQB - 32)) | (1 << (PinescriptParser.PLUS - 32)) | (1 << (PinescriptParser.MINUS - 32)) | (1 << (PinescriptParser.NAME - 32)) | (1 << (PinescriptParser.NUMBER - 32)) | (1 << (PinescriptParser.STRING - 32)) | (1 << (PinescriptParser.COLOR - 32)))) !== 0)) {
							{
							this.state = 573;
							this.argument_list();
							}
						}

						this.state = 576;
						this.match(PinescriptParser.RPAR);
						}
						break;

					case 3:
						{
						_localctx = new Primary_expression_subscriptContext(new Primary_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PinescriptParser.RULE_primary_expression);
						this.state = 577;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 578;
						this.match(PinescriptParser.LSQB);
						this.state = 579;
						this.subscript_slice();
						this.state = 580;
						this.match(PinescriptParser.RSQB);
						}
						break;
					}
					}
				}
				this.state = 586;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument_list(): Argument_listContext {
		let _localctx: Argument_listContext = new Argument_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, PinescriptParser.RULE_argument_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 587;
			this.argument_definition();
			this.state = 592;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 588;
					this.match(PinescriptParser.COMMA);
					this.state = 589;
					this.argument_definition();
					}
					}
				}
				this.state = 594;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			}
			this.state = 596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PinescriptParser.COMMA) {
				{
				this.state = 595;
				this.match(PinescriptParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument_definition(): Argument_definitionContext {
		let _localctx: Argument_definitionContext = new Argument_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, PinescriptParser.RULE_argument_definition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 598;
				this.name_store();
				this.state = 599;
				this.match(PinescriptParser.EQUAL);
				}
				break;
			}
			this.state = 603;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subscript_slice(): Subscript_sliceContext {
		let _localctx: Subscript_sliceContext = new Subscript_sliceContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, PinescriptParser.RULE_subscript_slice);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 605;
			this.expression();
			this.state = 610;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 606;
					this.match(PinescriptParser.COMMA);
					this.state = 607;
					this.expression();
					}
					}
				}
				this.state = 612;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			}
			this.state = 614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PinescriptParser.COMMA) {
				{
				this.state = 613;
				this.match(PinescriptParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atomic_expression(): Atomic_expressionContext {
		let _localctx: Atomic_expressionContext = new Atomic_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, PinescriptParser.RULE_atomic_expression);
		try {
			this.state = 620;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PinescriptParser.CONST:
			case PinescriptParser.INPUT:
			case PinescriptParser.METHOD:
			case PinescriptParser.SERIES:
			case PinescriptParser.SIMPLE:
			case PinescriptParser.TYPE:
			case PinescriptParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 616;
				this.name_load();
				}
				break;
			case PinescriptParser.FALSE:
			case PinescriptParser.TRUE:
			case PinescriptParser.NUMBER:
			case PinescriptParser.STRING:
			case PinescriptParser.COLOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 617;
				this.literal_expression();
				}
				break;
			case PinescriptParser.LPAR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 618;
				this.grouped_expression();
				}
				break;
			case PinescriptParser.LSQB:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 619;
				this.tuple_expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal_expression(): Literal_expressionContext {
		let _localctx: Literal_expressionContext = new Literal_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, PinescriptParser.RULE_literal_expression);
		try {
			this.state = 626;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PinescriptParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 622;
				this.literal_number();
				}
				break;
			case PinescriptParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 623;
				this.literal_string();
				}
				break;
			case PinescriptParser.FALSE:
			case PinescriptParser.TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 624;
				this.literal_bool();
				}
				break;
			case PinescriptParser.COLOR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 625;
				this.literal_color();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal_number(): Literal_numberContext {
		let _localctx: Literal_numberContext = new Literal_numberContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, PinescriptParser.RULE_literal_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 628;
			this.match(PinescriptParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal_string(): Literal_stringContext {
		let _localctx: Literal_stringContext = new Literal_stringContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, PinescriptParser.RULE_literal_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 630;
			this.match(PinescriptParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal_bool(): Literal_boolContext {
		let _localctx: Literal_boolContext = new Literal_boolContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, PinescriptParser.RULE_literal_bool);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 632;
			_la = this._input.LA(1);
			if (!(_la === PinescriptParser.FALSE || _la === PinescriptParser.TRUE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal_color(): Literal_colorContext {
		let _localctx: Literal_colorContext = new Literal_colorContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, PinescriptParser.RULE_literal_color);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 634;
			this.match(PinescriptParser.COLOR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public grouped_expression(): Grouped_expressionContext {
		let _localctx: Grouped_expressionContext = new Grouped_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, PinescriptParser.RULE_grouped_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			this.match(PinescriptParser.LPAR);
			this.state = 637;
			this.expression();
			this.state = 638;
			this.match(PinescriptParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tuple_expression(): Tuple_expressionContext {
		let _localctx: Tuple_expressionContext = new Tuple_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, PinescriptParser.RULE_tuple_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 640;
			this.match(PinescriptParser.LSQB);
			this.state = 641;
			this.expression();
			this.state = 646;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 642;
					this.match(PinescriptParser.COMMA);
					this.state = 643;
					this.expression();
					}
					}
				}
				this.state = 648;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			}
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PinescriptParser.COMMA) {
				{
				this.state = 649;
				this.match(PinescriptParser.COMMA);
				}
			}

			this.state = 652;
			this.match(PinescriptParser.RSQB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public import_statement(): Import_statementContext {
		let _localctx: Import_statementContext = new Import_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, PinescriptParser.RULE_import_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 654;
			this.match(PinescriptParser.IMPORT);
			this.state = 655;
			this.name();
			this.state = 656;
			this.match(PinescriptParser.SLASH);
			this.state = 657;
			this.name();
			this.state = 658;
			this.match(PinescriptParser.SLASH);
			this.state = 659;
			this.literal_number();
			this.state = 662;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PinescriptParser.AS) {
				{
				this.state = 660;
				this.match(PinescriptParser.AS);
				this.state = 661;
				this.name();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public break_statement(): Break_statementContext {
		let _localctx: Break_statementContext = new Break_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, PinescriptParser.RULE_break_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 664;
			this.match(PinescriptParser.BREAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continue_statement(): Continue_statementContext {
		let _localctx: Continue_statementContext = new Continue_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, PinescriptParser.RULE_continue_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 666;
			this.match(PinescriptParser.CONTINUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var_declaration_stmt(): Var_declaration_stmtContext {
		let _localctx: Var_declaration_stmtContext = new Var_declaration_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, PinescriptParser.RULE_var_declaration_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 669;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PinescriptParser.VAR || _la === PinescriptParser.VARIP) {
				{
				this.state = 668;
				this.declaration_mode();
				}
			}

			this.state = 672;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				{
				this.state = 671;
				this.type_specification();
				}
				break;
			}
			this.state = 674;
			this.name_store();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tuple_declaration(): Tuple_declarationContext {
		let _localctx: Tuple_declarationContext = new Tuple_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, PinescriptParser.RULE_tuple_declaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 676;
			this.match(PinescriptParser.LSQB);
			this.state = 677;
			this.name_store();
			this.state = 682;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 678;
					this.match(PinescriptParser.COMMA);
					this.state = 679;
					this.name_store();
					}
					}
				}
				this.state = 684;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			}
			this.state = 686;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PinescriptParser.COMMA) {
				{
				this.state = 685;
				this.match(PinescriptParser.COMMA);
				}
			}

			this.state = 688;
			this.match(PinescriptParser.RSQB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration_mode(): Declaration_modeContext {
		let _localctx: Declaration_modeContext = new Declaration_modeContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, PinescriptParser.RULE_declaration_mode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 690;
			_la = this._input.LA(1);
			if (!(_la === PinescriptParser.VAR || _la === PinescriptParser.VARIP)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment_target(): Assignment_targetContext {
		let _localctx: Assignment_targetContext = new Assignment_targetContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, PinescriptParser.RULE_assignment_target);
		try {
			this.state = 696;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 692;
				this.assignment_target_attribute();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 693;
				this.assignment_target_subscript();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 694;
				this.assignment_target_name();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 695;
				this.assignment_target_group();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment_target_attribute(): Assignment_target_attributeContext {
		let _localctx: Assignment_target_attributeContext = new Assignment_target_attributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, PinescriptParser.RULE_assignment_target_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 698;
			this.primary_expression(0);
			this.state = 699;
			this.match(PinescriptParser.DOT);
			this.state = 700;
			this.name_store();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment_target_subscript(): Assignment_target_subscriptContext {
		let _localctx: Assignment_target_subscriptContext = new Assignment_target_subscriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, PinescriptParser.RULE_assignment_target_subscript);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 702;
			this.primary_expression(0);
			this.state = 703;
			this.match(PinescriptParser.LSQB);
			this.state = 704;
			this.subscript_slice();
			this.state = 705;
			this.match(PinescriptParser.RSQB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment_target_name(): Assignment_target_nameContext {
		let _localctx: Assignment_target_nameContext = new Assignment_target_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, PinescriptParser.RULE_assignment_target_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 707;
			this.name_store();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment_target_group(): Assignment_target_groupContext {
		let _localctx: Assignment_target_groupContext = new Assignment_target_groupContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, PinescriptParser.RULE_assignment_target_group);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 709;
			this.match(PinescriptParser.LPAR);
			this.state = 710;
			this.assignment_target();
			this.state = 711;
			this.match(PinescriptParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public augassign_op(): Augassign_opContext {
		let _localctx: Augassign_opContext = new Augassign_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, PinescriptParser.RULE_augassign_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 713;
			_la = this._input.LA(1);
			if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (PinescriptParser.PLUSEQUAL - 51)) | (1 << (PinescriptParser.MINEQUAL - 51)) | (1 << (PinescriptParser.STAREQUAL - 51)) | (1 << (PinescriptParser.SLASHEQUAL - 51)) | (1 << (PinescriptParser.PERCENTEQUAL - 51)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_specification(): Type_specificationContext {
		let _localctx: Type_specificationContext = new Type_specificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, PinescriptParser.RULE_type_specification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 716;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				{
				this.state = 715;
				this.type_qualifier();
				}
				break;
			}
			this.state = 718;
			this.attributed_type_name();
			this.state = 720;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PinescriptParser.LESS) {
				{
				this.state = 719;
				this.template_spec_suffix();
				}
			}

			this.state = 723;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PinescriptParser.LSQB) {
				{
				this.state = 722;
				this.array_type_suffix();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_qualifier(): Type_qualifierContext {
		let _localctx: Type_qualifierContext = new Type_qualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, PinescriptParser.RULE_type_qualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 725;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PinescriptParser.CONST) | (1 << PinescriptParser.INPUT) | (1 << PinescriptParser.SERIES) | (1 << PinescriptParser.SIMPLE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributed_type_name(): Attributed_type_nameContext {
		let _localctx: Attributed_type_nameContext = new Attributed_type_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, PinescriptParser.RULE_attributed_type_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 727;
			this.name_load();
			this.state = 732;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PinescriptParser.DOT) {
				{
				{
				this.state = 728;
				this.match(PinescriptParser.DOT);
				this.state = 729;
				this.name_load();
				}
				}
				this.state = 734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public template_spec_suffix(): Template_spec_suffixContext {
		let _localctx: Template_spec_suffixContext = new Template_spec_suffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, PinescriptParser.RULE_template_spec_suffix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 735;
			this.match(PinescriptParser.LESS);
			this.state = 737;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PinescriptParser.CONST) | (1 << PinescriptParser.INPUT) | (1 << PinescriptParser.METHOD) | (1 << PinescriptParser.SERIES) | (1 << PinescriptParser.SIMPLE) | (1 << PinescriptParser.TYPE))) !== 0) || _la === PinescriptParser.NAME) {
				{
				this.state = 736;
				this.type_argument_list();
				}
			}

			this.state = 739;
			this.match(PinescriptParser.GREATER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array_type_suffix(): Array_type_suffixContext {
		let _localctx: Array_type_suffixContext = new Array_type_suffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, PinescriptParser.RULE_array_type_suffix);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 741;
			this.match(PinescriptParser.LSQB);
			this.state = 742;
			this.match(PinescriptParser.RSQB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_argument_list(): Type_argument_listContext {
		let _localctx: Type_argument_listContext = new Type_argument_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, PinescriptParser.RULE_type_argument_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 744;
			this.type_specification();
			this.state = 749;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 745;
					this.match(PinescriptParser.COMMA);
					this.state = 746;
					this.type_specification();
					}
					}
				}
				this.state = 751;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
			}
			this.state = 753;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PinescriptParser.COMMA) {
				{
				this.state = 752;
				this.match(PinescriptParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, PinescriptParser.RULE_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 755;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PinescriptParser.CONST) | (1 << PinescriptParser.INPUT) | (1 << PinescriptParser.METHOD) | (1 << PinescriptParser.SERIES) | (1 << PinescriptParser.SIMPLE) | (1 << PinescriptParser.TYPE))) !== 0) || _la === PinescriptParser.NAME)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name_load(): Name_loadContext {
		let _localctx: Name_loadContext = new Name_loadContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, PinescriptParser.RULE_name_load);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 757;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name_store(): Name_storeContext {
		let _localctx: Name_storeContext = new Name_storeContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, PinescriptParser.RULE_name_store);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 759;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comments(): CommentsContext {
		let _localctx: CommentsContext = new CommentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, PinescriptParser.RULE_comments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 762;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 761;
				this.comment();
				}
				}
				this.state = 764;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === PinescriptParser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, PinescriptParser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 766;
			this.match(PinescriptParser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 60:
			return this.additive_expression_sempred(_localctx as Additive_expressionContext, predIndex);

		case 62:
			return this.multiplicative_expression_sempred(_localctx as Multiplicative_expressionContext, predIndex);

		case 66:
			return this.primary_expression_sempred(_localctx as Primary_expressionContext, predIndex);
		}
		return true;
	}
	private additive_expression_sempred(_localctx: Additive_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private multiplicative_expression_sempred(_localctx: Multiplicative_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private primary_expression_sempred(_localctx: Primary_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 4);

		case 3:
			return this.precpred(this._ctx, 3);

		case 4:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03B\u0303\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x03\x02\x03\x02\x03" +
		"\x03\x05\x03\xD0\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04\xD6\n\x04" +
		"\x03\x04\x03\x04\x03\x05\x05\x05\xDB\n\x05\x03\x05\x03\x05\x03\x06\x06" +
		"\x06\xE0\n\x06\r\x06\x0E\x06\xE1\x03\x07\x03\x07\x07\x07\xE6\n\x07\f\x07" +
		"\x0E\x07\xE9\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07\xF1\n\x07\x03\b\x03\b\x03\b\x05\b\xF6\n\b\x03\t\x03\t\x03\t\x03\t" +
		"\x05\t\xFC\n\t\x03\n\x03\n\x03\n\x05\n\u0101\n\n\x03\v\x03\v\x05\v\u0105" +
		"\n\v\x03\f\x03\f\x03\f\x03\f\x05\f\u010B\n\f\x03\r\x03\r\x03\r\x03\r\x05" +
		"\r\u0111\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0117\n\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u011D\n\x0F\x03\x10\x05\x10\u0120\n\x10" +
		"\x03\x10\x05\x10\u0123\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0128\n\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x07\x11\u0131" +
		"\n\x11\f\x11\x0E\x11\u0134\v\x11\x03\x11\x05\x11\u0137\n\x11\x03\x12\x05" +
		"\x12\u013A\n\x12\x03\x12\x03\x12\x03\x12\x05\x12\u013F\n\x12\x03\x13\x05" +
		"\x13\u0142\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14" +
		"\x06\x14\u014B\n\x14\r\x14\x0E\x14\u014C\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x05\x15\u0153\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05" +
		"\x16\u015B\n\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19" +
		"\u0163\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x05\x1B\u016E\n\x1B\x03\x1C\x03\x1C\x05\x1C\u0172\n\x1C\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x05\x1E\u017F\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x05" +
		" \u0186\n \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u0190\n!\x03!" +
		"\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x05#\u019C\n#\x03" +
		"$\x03$\x03$\x03$\x03%\x03%\x05%\u01A4\n%\x03%\x03%\x03%\x03%\x03&\x06" +
		"&\u01AB\n&\r&\x0E&\u01AC\x03&\x05&\u01B0\n&\x03\'\x03\'\x03\'\x03\'\x03" +
		"(\x03(\x03(\x03)\x03)\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x05,\u01C3" +
		"\n,\x03-\x03-\x03-\x03-\x03-\x03-\x03.\x03.\x05.\u01CD\n.\x03/\x03/\x03" +
		"/\x06/\u01D2\n/\r/\x0E/\u01D3\x030\x030\x050\u01D8\n0\x031\x031\x031\x06" +
		"1\u01DD\n1\r1\x0E1\u01DE\x032\x032\x052\u01E3\n2\x033\x033\x063\u01E7" +
		"\n3\r3\x0E3\u01E8\x034\x034\x054\u01ED\n4\x035\x035\x035\x036\x036\x03" +
		"6\x037\x037\x057\u01F7\n7\x038\x038\x068\u01FB\n8\r8\x0E8\u01FC\x039\x03" +
		"9\x039\x039\x059\u0203\n9\x03:\x03:\x03:\x03;\x03;\x03;\x03<\x03<\x03" +
		"<\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x07>\u0218\n>\f>\x0E" +
		">\u021B\v>\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x07@\u0226\n@" +
		"\f@\x0E@\u0229\v@\x03A\x03A\x03B\x03B\x03B\x03B\x05B\u0231\nB\x03C\x03" +
		"C\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u023D\nD\x03D\x03D\x05" +
		"D\u0241\nD\x03D\x03D\x03D\x03D\x03D\x03D\x07D\u0249\nD\fD\x0ED\u024C\v" +
		"D\x03E\x03E\x03E\x07E\u0251\nE\fE\x0EE\u0254\vE\x03E\x05E\u0257\nE\x03" +
		"F\x03F\x03F\x05F\u025C\nF\x03F\x03F\x03G\x03G\x03G\x07G\u0263\nG\fG\x0E" +
		"G\u0266\vG\x03G\x05G\u0269\nG\x03H\x03H\x03H\x03H\x05H\u026F\nH\x03I\x03" +
		"I\x03I\x03I\x05I\u0275\nI\x03J\x03J\x03K\x03K\x03L\x03L\x03M\x03M\x03" +
		"N\x03N\x03N\x03N\x03O\x03O\x03O\x03O\x07O\u0287\nO\fO\x0EO\u028A\vO\x03" +
		"O\x05O\u028D\nO\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x05" +
		"P\u0299\nP\x03Q\x03Q\x03R\x03R\x03S\x05S\u02A0\nS\x03S\x05S\u02A3\nS\x03" +
		"S\x03S\x03T\x03T\x03T\x03T\x07T\u02AB\nT\fT\x0ET\u02AE\vT\x03T\x05T\u02B1" +
		"\nT\x03T\x03T\x03U\x03U\x03V\x03V\x03V\x03V\x05V\u02BB\nV\x03W\x03W\x03" +
		"W\x03W\x03X\x03X\x03X\x03X\x03X\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03[\x03" +
		"[\x03\\\x05\\\u02CF\n\\\x03\\\x03\\\x05\\\u02D3\n\\\x03\\\x05\\\u02D6" +
		"\n\\\x03]\x03]\x03^\x03^\x03^\x07^\u02DD\n^\f^\x0E^\u02E0\v^\x03_\x03" +
		"_\x05_\u02E4\n_\x03_\x03_\x03`\x03`\x03`\x03a\x03a\x03a\x07a\u02EE\na" +
		"\fa\x0Ea\u02F1\va\x03a\x05a\u02F4\na\x03b\x03b\x03c\x03c\x03d\x03d\x03" +
		"e\x06e\u02FD\ne\re\x0Ee\u02FE\x03f\x03f\x03f\x02\x02\x05z~\x86g\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		".\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
		"\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92" +
		"\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4" +
		"\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6" +
		"\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8" +
		"\x02\xCA\x02\x02\n\x03\x0201\x03\x0224\x04\x02\x15\x1501\x04\x02\x0E\x0E" +
		"\x1C\x1C\x03\x02\x1D\x1E\x03\x0259\x05\x02\n\n\x13\x13\x17\x18\x07\x02" +
		"\n\n\x13\x14\x17\x18\x1B\x1B;;\x02\u02F9\x02\xCC\x03\x02\x02\x02\x04\xCF" +
		"\x03\x02\x02\x02\x06\xD3\x03\x02\x02\x02\b\xDA\x03\x02\x02\x02\n\xDF\x03" +
		"\x02\x02\x02\f\xF0\x03\x02\x02\x02\x0E\xF5\x03\x02\x02\x02\x10\xFB\x03" +
		"\x02\x02\x02\x12\u0100\x03\x02\x02\x02\x14\u0104\x03\x02\x02\x02\x16\u0106" +
		"\x03\x02\x02\x02\x18\u010C\x03\x02\x02\x02\x1A\u0112\x03\x02\x02\x02\x1C" +
		"\u0118\x03\x02\x02\x02\x1E\u011F\x03\x02\x02\x02 \u012D\x03\x02\x02\x02" +
		"\"\u0139\x03\x02\x02\x02$\u0141\x03\x02\x02\x02&\u014A\x03\x02\x02\x02" +
		"(\u014E\x03\x02\x02\x02*\u015A\x03\x02\x02\x02,\u015C\x03\x02\x02\x02" +
		".\u015E\x03\x02\x02\x020\u0162\x03\x02\x02\x022\u0164\x03\x02\x02\x02" +
		"4\u0169\x03\x02\x02\x026\u0171\x03\x02\x02\x028\u0173\x03\x02\x02\x02" +
		":\u0179\x03\x02\x02\x02<\u0180\x03\x02\x02\x02>\u0185\x03\x02\x02\x02" +
		"@\u0187\x03\x02\x02\x02B\u0193\x03\x02\x02\x02D\u019B\x03\x02\x02\x02" +
		"F\u019D\x03\x02\x02\x02H\u01A1\x03\x02\x02\x02J\u01AA\x03\x02\x02\x02" +
		"L\u01B1\x03\x02\x02\x02N\u01B5\x03\x02\x02\x02P\u01B8\x03\x02\x02\x02" +
		"R\u01BC\x03\x02\x02\x02T\u01BE\x03\x02\x02\x02V\u01C2\x03\x02\x02\x02" +
		"X\u01C4\x03\x02\x02\x02Z\u01CC\x03\x02\x02\x02\\\u01CE\x03\x02\x02\x02" +
		"^\u01D7\x03\x02\x02\x02`\u01D9\x03\x02\x02\x02b\u01E2\x03\x02\x02\x02" +
		"d\u01E4\x03\x02\x02\x02f\u01EC\x03\x02\x02\x02h\u01EE\x03\x02\x02\x02" +
		"j\u01F1\x03\x02\x02\x02l\u01F6\x03\x02\x02\x02n\u01F8\x03\x02\x02\x02" +
		"p\u0202\x03\x02\x02\x02r\u0204\x03\x02\x02\x02t\u0207\x03\x02\x02\x02" +
		"v\u020A\x03\x02\x02\x02x\u020D\x03\x02\x02\x02z\u0210\x03\x02\x02\x02" +
		"|\u021C\x03\x02\x02\x02~\u021E\x03\x02\x02\x02\x80\u022A\x03\x02\x02\x02" +
		"\x82\u0230\x03\x02\x02\x02\x84\u0232\x03\x02\x02\x02\x86\u0234\x03\x02" +
		"\x02\x02\x88\u024D\x03\x02\x02\x02\x8A\u025B\x03\x02\x02\x02\x8C\u025F" +
		"\x03\x02\x02\x02\x8E\u026E\x03\x02\x02\x02\x90\u0274\x03\x02\x02\x02\x92" +
		"\u0276\x03\x02\x02\x02\x94\u0278\x03\x02\x02\x02\x96\u027A\x03\x02\x02" +
		"\x02\x98\u027C\x03\x02\x02\x02\x9A\u027E\x03\x02\x02\x02\x9C\u0282\x03" +
		"\x02\x02\x02\x9E\u0290\x03\x02\x02\x02\xA0\u029A\x03\x02\x02\x02\xA2\u029C" +
		"\x03\x02\x02\x02\xA4\u029F\x03\x02\x02\x02\xA6\u02A6\x03\x02\x02\x02\xA8" +
		"\u02B4\x03\x02\x02\x02\xAA\u02BA\x03\x02\x02\x02\xAC\u02BC\x03\x02\x02" +
		"\x02\xAE\u02C0\x03\x02\x02\x02\xB0\u02C5\x03\x02\x02\x02\xB2\u02C7\x03" +
		"\x02\x02\x02\xB4\u02CB\x03\x02\x02\x02\xB6\u02CE\x03\x02\x02\x02\xB8\u02D7" +
		"\x03\x02\x02\x02\xBA\u02D9\x03\x02\x02\x02\xBC\u02E1\x03\x02\x02\x02\xBE" +
		"\u02E7\x03\x02\x02\x02\xC0\u02EA\x03\x02\x02\x02\xC2\u02F5\x03\x02\x02" +
		"\x02\xC4\u02F7\x03\x02\x02\x02\xC6\u02F9\x03\x02\x02\x02\xC8\u02FC\x03" +
		"\x02\x02\x02\xCA\u0300\x03\x02\x02\x02\xCC\xCD\x05\x04\x03\x02\xCD\x03" +
		"\x03\x02\x02\x02\xCE\xD0\x05\n\x06\x02\xCF\xCE\x03\x02\x02\x02\xCF\xD0" +
		"\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2\x07\x02\x02\x03\xD2\x05" +
		"\x03\x02\x02\x02\xD3\xD5\x05R*\x02\xD4\xD6\x07\x05\x02\x02\xD5\xD4\x03" +
		"\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8\x07" +
		"\x02\x02\x03\xD8\x07\x03\x02\x02\x02\xD9\xDB\x05\xC8e\x02\xDA\xD9\x03" +
		"\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDD\x07" +
		"\x02\x02\x03\xDD\t\x03\x02\x02\x02\xDE\xE0\x05\f\x07\x02\xDF\xDE\x03\x02" +
		"\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02" +
		"\x02\x02\xE2\v\x03\x02\x02\x02\xE3\xE7\x05\x0E\b\x02\xE4\xE6\x07\x04\x02" +
		"\x02\xE5\xE4\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02" +
		"\x02\xE7\xE8\x03\x02\x02\x02\xE8\xF1\x03\x02\x02\x02\xE9\xE7\x03\x02\x02" +
		"\x02\xEA\xEB\x05\x10\t\x02\xEB\xEC\x07\x05\x02\x02\xEC\xF1\x03\x02\x02" +
		"\x02\xED\xEE\x05\x12\n\x02\xEE\xEF\x07\x05\x02\x02\xEF\xF1\x03\x02\x02" +
		"\x02\xF0\xE3\x03\x02\x02\x02\xF0\xEA\x03\x02\x02\x02\xF0\xED\x03\x02\x02" +
		"\x02\xF1\r\x03\x02\x02\x02\xF2\xF6\x05\x1E\x10\x02\xF3\xF6\x05$\x13\x02" +
		"\xF4\xF6\x05,\x17\x02\xF5\xF2\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02" +
		"\xF5\xF4\x03\x02\x02\x02\xF6\x0F\x03\x02\x02\x02\xF7\xFC\x05T+\x02\xF8" +
		"\xFC\x05\x9EP\x02\xF9\xFC\x05\xA0Q\x02\xFA\xFC\x05\xA2R\x02\xFB\xF7\x03" +
		"\x02\x02\x02\xFB\xF8\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFA\x03" +
		"\x02\x02\x02\xFC\x11\x03\x02\x02\x02\xFD\u0101\x05\x14\v\x02\xFE\u0101" +
		"\x05\x1A\x0E\x02\xFF\u0101\x05\x1C\x0F\x02\u0100\xFD\x03\x02\x02\x02\u0100" +
		"\xFE\x03\x02\x02\x02\u0100\xFF\x03\x02\x02\x02\u0101\x13\x03\x02\x02\x02" +
		"\u0102\u0105\x05\x16\f\x02\u0103\u0105\x05\x18\r\x02\u0104\u0102\x03\x02" +
		"\x02\x02\u0104\u0103\x03\x02\x02\x02\u0105\x15\x03\x02\x02\x02\u0106\u0107" +
		"\x05\xA4S\x02\u0107\u010A\x07&\x02\x02\u0108\u010B\x05R*\x02\u0109\u010B" +
		"\x05.\x18\x02\u010A\u0108\x03\x02\x02\x02\u010A\u0109\x03\x02\x02\x02" +
		"\u010B\x17\x03\x02\x02\x02\u010C\u010D\x05\xA6T\x02\u010D\u0110\x07&\x02" +
		"\x02\u010E\u0111\x05R*\x02\u010F\u0111\x05.\x18\x02\u0110\u010E\x03\x02" +
		"\x02\x02\u0110\u010F\x03\x02\x02\x02\u0111\x19\x03\x02\x02\x02\u0112\u0113" +
		"\x05\xAAV\x02\u0113\u0116\x07:\x02\x02\u0114\u0117\x05R*\x02\u0115\u0117" +
		"\x05.\x18\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0115\x03\x02\x02\x02" +
		"\u0117\x1B\x03\x02\x02\x02\u0118\u0119\x05\xAAV\x02\u0119\u011C\x05\xB4" +
		"[\x02\u011A\u011D\x05R*\x02\u011B\u011D\x05.\x18\x02\u011C\u011A\x03\x02" +
		"\x02\x02\u011C\u011B\x03\x02\x02\x02\u011D\x1D\x03\x02\x02\x02\u011E\u0120" +
		"\x07\r\x02\x02\u011F\u011E\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02" +
		"\u0120\u0122\x03\x02\x02\x02\u0121\u0123\x07\x14\x02\x02\u0122\u0121\x03" +
		"\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124" +
		"\u0125\x05\xC2b\x02\u0125\u0127\x07 \x02\x02\u0126\u0128\x05 \x11\x02" +
		"\u0127\u0126\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u0129\x03" +
		"\x02\x02\x02\u0129\u012A\x07!\x02\x02\u012A\u012B\x07+\x02\x02\u012B\u012C" +
		"\x05P)\x02\u012C\x1F\x03\x02\x02\x02\u012D\u0132\x05\"\x12\x02\u012E\u012F" +
		"\x07-\x02\x02\u012F\u0131\x05\"\x12\x02\u0130\u012E\x03\x02\x02\x02\u0131" +
		"\u0134\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02" +
		"\x02\x02\u0133\u0136\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0135" +
		"\u0137\x07-\x02\x02\u0136\u0135\x03\x02\x02\x02\u0136\u0137\x03\x02\x02" +
		"\x02\u0137!\x03\x02\x02\x02\u0138\u013A\x05\xB6\\\x02\u0139\u0138\x03" +
		"\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B" +
		"\u013E\x05\xC6d\x02\u013C\u013D\x07&\x02\x02\u013D\u013F\x05R*\x02\u013E" +
		"\u013C\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F#\x03\x02\x02" +
		"\x02\u0140\u0142\x07\r\x02\x02\u0141\u0140\x03\x02\x02\x02\u0141\u0142" +
		"\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0144\x07\x1B\x02\x02" +
		"\u0144\u0145\x05\xC2b\x02\u0145\u0146\x07\x03\x02\x02\u0146\u0147\x05" +
		"&\x14\x02\u0147\u0148\x07\x04\x02\x02\u0148%\x03\x02\x02\x02\u0149\u014B" +
		"\x05(\x15\x02\u014A\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02" +
		"\u014C\u014A\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\'\x03\x02" +
		"\x02\x02\u014E\u014F\x05\xB6\\\x02\u014F\u0152\x05\xC6d\x02\u0150\u0151" +
		"\x07&\x02\x02\u0151\u0153\x05R*\x02\u0152\u0150\x03\x02\x02\x02\u0152" +
		"\u0153\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0155\x07\x05" +
		"\x02\x02\u0155)\x03\x02\x02\x02\u0156\u015B\x050\x19\x02\u0157\u015B\x05" +
		"> \x02\u0158\u015B\x05F$\x02\u0159\u015B\x05H%\x02\u015A\u0156\x03\x02" +
		"\x02\x02\u015A\u0157\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015A" +
		"\u0159\x03\x02\x02\x02\u015B+\x03\x02\x02\x02\u015C\u015D\x05*\x16\x02" +
		"\u015D-\x03\x02\x02\x02\u015E\u015F\x05*\x16\x02\u015F/\x03\x02\x02\x02" +
		"\u0160\u0163\x052\x1A\x02\u0161\u0163\x054\x1B\x02\u0162\u0160\x03\x02" +
		"\x02\x02\u0162\u0161\x03\x02\x02\x02\u01631\x03\x02\x02\x02\u0164\u0165" +
		"\x07\x10\x02\x02\u0165\u0166\x05R*\x02\u0166\u0167\x05P)\x02\u0167\u0168" +
		"\x056\x1C\x02\u01683\x03\x02\x02\x02\u0169\u016A\x07\x10\x02\x02\u016A" +
		"\u016B\x05R*\x02\u016B\u016D\x05P)\x02\u016C\u016E\x05<\x1F\x02\u016D" +
		"\u016C\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E5\x03\x02\x02" +
		"\x02\u016F\u0172\x058\x1D\x02\u0170\u0172\x05:\x1E\x02\u0171\u016F\x03" +
		"\x02\x02\x02\u0171\u0170\x03\x02\x02\x02\u01727\x03\x02\x02\x02\u0173" +
		"\u0174\x07\f\x02\x02\u0174\u0175\x07\x10\x02\x02\u0175\u0176\x05R*\x02" +
		"\u0176\u0177\x05P)\x02\u0177\u0178\x056\x1C\x02\u01789\x03\x02\x02\x02" +
		"\u0179\u017A\x07\f\x02\x02\u017A\u017B\x07\x10\x02\x02\u017B\u017C\x05" +
		"R*\x02\u017C\u017E\x05P)\x02\u017D\u017F\x05<\x1F\x02\u017E\u017D\x03" +
		"\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F;\x03\x02\x02\x02\u0180" +
		"\u0181\x07\f\x02\x02\u0181\u0182\x05P)\x02\u0182=\x03\x02\x02\x02\u0183" +
		"\u0186\x05@!\x02\u0184\u0186\x05B\"\x02\u0185\u0183\x03\x02\x02\x02\u0185" +
		"\u0184\x03\x02\x02\x02\u0186?\x03\x02\x02\x02\u0187\u0188\x07\x0F\x02" +
		"\x02\u0188\u0189\x05D#\x02\u0189\u018A\x07&\x02\x02\u018A\u018B\x05R*" +
		"\x02\u018B\u018C\x07\x1A\x02\x02\u018C\u018F\x05R*\x02\u018D\u018E\x07" +
		"\t\x02\x02\u018E\u0190\x05R*\x02\u018F\u018D\x03\x02\x02\x02\u018F\u0190" +
		"\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\u0192\x05P)\x02\u0192" +
		"A\x03\x02\x02\x02\u0193\u0194\x07\x0F\x02\x02\u0194\u0195\x05D#\x02\u0195" +
		"\u0196\x07\x12\x02\x02\u0196\u0197\x05R*\x02\u0197\u0198\x05P)\x02\u0198" +
		"C\x03\x02\x02\x02\u0199\u019C\x05\xC6d\x02\u019A\u019C\x05\xA6T\x02\u019B" +
		"\u0199\x03\x02\x02\x02\u019B\u019A\x03\x02\x02\x02\u019CE\x03\x02\x02" +
		"\x02\u019D\u019E\x07\x1F\x02\x02\u019E\u019F\x05R*\x02\u019F\u01A0\x05" +
		"P)\x02\u01A0G\x03\x02\x02\x02\u01A1\u01A3\x07\x19\x02\x02\u01A2\u01A4" +
		"\x05R*\x02\u01A3\u01A2\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4" +
		"\u01A5\x03\x02\x02\x02\u01A5\u01A6\x07\x03\x02\x02\u01A6\u01A7\x05J&\x02" +
		"\u01A7\u01A8\x07\x04\x02\x02\u01A8I\x03\x02\x02\x02\u01A9\u01AB\x05L\'" +
		"\x02\u01AA\u01A9\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AA" +
		"\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AF\x03\x02\x02\x02" +
		"\u01AE\u01B0\x05N(\x02\u01AF\u01AE\x03\x02\x02\x02\u01AF\u01B0\x03\x02" +
		"\x02\x02\u01B0K\x03\x02\x02\x02\u01B1\u01B2\x05R*\x02\u01B2\u01B3\x07" +
		"+\x02\x02\u01B3\u01B4\x05P)\x02\u01B4M\x03\x02\x02\x02\u01B5\u01B6\x07" +
		"+\x02\x02\u01B6\u01B7\x05P)\x02\u01B7O\x03\x02\x02\x02\u01B8\u01B9\x07" +
		"\x03\x02\x02\u01B9\u01BA\x05\n\x06\x02\u01BA\u01BB\x07\x04\x02\x02\u01BB" +
		"Q\x03\x02\x02\x02\u01BC\u01BD\x05V,\x02\u01BDS\x03\x02\x02\x02\u01BE\u01BF" +
		"\x05R*\x02\u01BFU\x03\x02\x02\x02\u01C0\u01C3\x05X-\x02\u01C1\u01C3\x05" +
		"Z.\x02\u01C2\u01C0\x03\x02\x02\x02\u01C2\u01C1\x03\x02\x02\x02\u01C3W" +
		"\x03\x02\x02\x02\u01C4\u01C5\x05Z.\x02\u01C5\u01C6\x07/\x02\x02\u01C6" +
		"\u01C7\x05R*\x02\u01C7\u01C8\x07.\x02\x02\u01C8\u01C9\x05R*\x02\u01C9" +
		"Y\x03\x02\x02\x02\u01CA\u01CD\x05\\/\x02\u01CB\u01CD\x05^0\x02\u01CC\u01CA" +
		"\x03\x02\x02\x02\u01CC\u01CB\x03\x02\x02\x02\u01CD[\x03\x02\x02\x02\u01CE" +
		"\u01D1\x05^0\x02\u01CF\u01D0\x07\x16\x02\x02\u01D0\u01D2\x05^0\x02\u01D1" +
		"\u01CF\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D1\x03\x02" +
		"\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4]\x03\x02\x02\x02\u01D5\u01D8" +
		"\x05`1\x02\u01D6\u01D8\x05b2\x02\u01D7\u01D5\x03\x02\x02\x02\u01D7\u01D6" +
		"\x03\x02\x02\x02\u01D8_\x03\x02\x02\x02\u01D9\u01DC\x05b2\x02\u01DA\u01DB" +
		"\x07\x06\x02\x02\u01DB\u01DD\x05b2\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD" +
		"\u01DE\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03\x02" +
		"\x02\x02\u01DFa\x03\x02\x02\x02\u01E0\u01E3\x05d3\x02\u01E1\u01E3\x05" +
		"l7\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3c" +
		"\x03\x02\x02\x02\u01E4\u01E6\x05l7\x02\u01E5\u01E7\x05f4\x02\u01E6\u01E5" +
		"\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02" +
		"\u01E8\u01E9\x03\x02\x02\x02\u01E9e\x03\x02\x02\x02\u01EA\u01ED\x05h5" +
		"\x02\u01EB\u01ED\x05j6\x02\u01EC\u01EA\x03\x02\x02\x02\u01EC\u01EB\x03" +
		"\x02\x02\x02\u01EDg\x03\x02\x02\x02\u01EE\u01EF\x07\'\x02\x02\u01EF\u01F0" +
		"\x05l7\x02\u01F0i\x03\x02\x02\x02\u01F1\u01F2\x07(\x02\x02\u01F2\u01F3" +
		"\x05l7\x02\u01F3k\x03\x02\x02\x02\u01F4\u01F7\x05n8\x02\u01F5\u01F7\x05" +
		"z>\x02\u01F6\u01F4\x03\x02\x02\x02\u01F6\u01F5\x03\x02\x02\x02\u01F7m" +
		"\x03\x02\x02\x02\u01F8\u01FA\x05z>\x02\u01F9\u01FB\x05p9\x02\u01FA\u01F9" +
		"\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02" +
		"\u01FC\u01FD\x03\x02\x02\x02\u01FDo\x03\x02\x02\x02\u01FE\u0203\x05r:" +
		"\x02\u01FF\u0203\x05t;\x02\u0200\u0203\x05v<\x02\u0201\u0203\x05x=\x02" +
		"\u0202\u01FE\x03\x02\x02\x02\u0202\u01FF\x03\x02\x02\x02\u0202\u0200\x03" +
		"\x02\x02\x02\u0202\u0201\x03\x02\x02\x02\u0203q\x03\x02\x02\x02\u0204" +
		"\u0205\x07)\x02\x02\u0205\u0206\x05z>\x02\u0206s\x03\x02\x02\x02\u0207" +
		"\u0208\x07$\x02\x02\u0208\u0209\x05z>\x02\u0209u\x03\x02\x02\x02\u020A" +
		"\u020B\x07*\x02\x02\u020B\u020C\x05z>\x02\u020Cw\x03\x02\x02\x02\u020D" +
		"\u020E\x07%\x02\x02\u020E\u020F\x05z>\x02\u020Fy\x03\x02\x02\x02\u0210" +
		"\u0211\b>\x01\x02\u0211\u0212\x05~@\x02\u0212\u0219\x03\x02\x02\x02\u0213" +
		"\u0214\f\x04\x02\x02\u0214\u0215\x05|?\x02\u0215\u0216\x05~@\x02\u0216" +
		"\u0218\x03\x02\x02\x02\u0217\u0213\x03\x02\x02\x02\u0218\u021B\x03\x02" +
		"\x02\x02\u0219\u0217\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A" +
		"{\x03\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021C\u021D\t\x02\x02\x02" +
		"\u021D}\x03\x02\x02\x02\u021E\u021F\b@\x01\x02\u021F\u0220\x05\x82B\x02" +
		"\u0220\u0227\x03\x02\x02\x02\u0221\u0222\f\x04\x02\x02\u0222\u0223\x05" +
		"\x80A\x02\u0223\u0224\x05\x82B\x02\u0224\u0226\x03\x02\x02\x02\u0225\u0221" +
		"\x03\x02\x02\x02\u0226\u0229\x03\x02\x02\x02\u0227\u0225\x03\x02\x02\x02" +
		"\u0227\u0228\x03\x02\x02\x02\u0228\x7F\x03\x02\x02\x02\u0229\u0227\x03" +
		"\x02\x02\x02\u022A\u022B\t\x03\x02\x02\u022B\x81\x03\x02\x02\x02\u022C" +
		"\u022D\x05\x84C\x02\u022D\u022E\x05\x82B\x02\u022E\u0231\x03\x02\x02\x02" +
		"\u022F\u0231\x05\x86D\x02\u0230\u022C\x03\x02\x02\x02\u0230\u022F\x03" +
		"\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u0231\x83\x03\x02\x02\x02\u0232\u0233\t\x04\x02\x02\u0233\x85\x03" +
		"\x02\x02\x02\u0234\u0235\bD\x01\x02\u0235\u0236\x05\x8EH\x02\u0236\u024A" +
		"\x03\x02\x02\x02\u0237\u0238\f\x06\x02\x02\u0238\u0239\x07,\x02\x02\u0239" +
		"\u0249\x05\xC4c\x02\u023A\u023C\f\x05\x02\x02\u023B\u023D\x05\xBC_\x02" +
		"\u023C\u023B\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023E\x03" +
		"\x02\x02\x02\u023E\u0240\x07 \x02\x02\u023F\u0241\x05\x88E\x02\u0240\u023F" +
		"\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241\u0242\x03\x02\x02\x02" +
		"\u0242\u0249\x07!\x02\x02\u0243\u0244\f\x04\x02\x02\u0244\u0245\x07\"" +
		"\x02\x02\u0245\u0246\x05\x8CG\x02\u0246\u0247\x07#\x02\x02\u0247\u0249" +
		"\x03\x02\x02\x02\u0248\u0237\x03\x02\x02\x02\u0248\u023A\x03\x02\x02\x02" +
		"\u0248\u0243\x03\x02\x02\x02\u0249\u024C\x03\x02\x02\x02\u024A\u0248\x03" +
		"\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\x87\x03\x02\x02\x02\u024C" +
		"\u024A\x03\x02\x02\x02\u024D\u0252\x05\x8AF\x02\u024E\u024F\x07-\x02\x02" +
		"\u024F\u0251\x05\x8AF\x02\u0250\u024E\x03\x02\x02\x02\u0251\u0254\x03" +
		"\x02\x02\x02\u0252\u0250\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253" +
		"\u0256\x03\x02\x02\x02\u0254\u0252\x03\x02\x02\x02\u0255\u0257\x07-\x02" +
		"\x02\u0256\u0255\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257\x89" +
		"\x03\x02\x02\x02\u0258\u0259\x05\xC6d\x02\u0259\u025A\x07&\x02\x02\u025A" +
		"\u025C\x03\x02\x02\x02\u025B\u0258\x03\x02\x02\x02\u025B\u025C\x03\x02" +
		"\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025E\x05R*\x02\u025E\x8B\x03" +
		"\x02\x02\x02\u025F\u0264\x05R*\x02\u0260\u0261\x07-\x02\x02\u0261\u0263" +
		"\x05R*\x02\u0262\u0260\x03\x02\x02\x02\u0263\u0266\x03\x02\x02\x02\u0264" +
		"\u0262\x03\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0268\x03\x02" +
		"\x02\x02\u0266\u0264\x03\x02\x02\x02\u0267\u0269\x07-\x02\x02\u0268\u0267" +
		"\x03\x02\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269\x8D\x03\x02\x02\x02" +
		"\u026A\u026F\x05\xC4c\x02\u026B\u026F\x05\x90I\x02\u026C\u026F\x05\x9A" +
		"N\x02\u026D\u026F\x05\x9CO\x02\u026E\u026A\x03\x02\x02\x02\u026E\u026B" +
		"\x03\x02\x02\x02\u026E\u026C\x03\x02\x02\x02\u026E\u026D\x03\x02\x02\x02" +
		"\u026F\x8F\x03\x02\x02\x02\u0270\u0275\x05\x92J\x02\u0271\u0275\x05\x94" +
		"K\x02\u0272\u0275\x05\x96L\x02\u0273\u0275\x05\x98M\x02\u0274\u0270\x03" +
		"\x02\x02\x02\u0274\u0271\x03\x02\x02\x02\u0274\u0272\x03\x02\x02\x02\u0274" +
		"\u0273\x03\x02\x02\x02\u0275\x91\x03\x02\x02\x02\u0276\u0277\x07<\x02" +
		"\x02\u0277\x93\x03\x02\x02\x02\u0278\u0279\x07=\x02\x02\u0279\x95\x03" +
		"\x02\x02\x02\u027A\u027B\t\x05\x02\x02\u027B\x97\x03\x02\x02\x02\u027C" +
		"\u027D\x07>\x02\x02\u027D\x99\x03\x02\x02\x02\u027E\u027F\x07 \x02\x02" +
		"\u027F\u0280\x05R*\x02\u0280\u0281\x07!\x02\x02\u0281\x9B\x03\x02\x02" +
		"\x02\u0282\u0283\x07\"\x02\x02\u0283\u0288\x05R*\x02\u0284\u0285\x07-" +
		"\x02\x02\u0285\u0287\x05R*\x02\u0286\u0284\x03\x02\x02\x02\u0287\u028A" +
		"\x03\x02\x02\x02\u0288\u0286\x03\x02\x02\x02\u0288\u0289\x03\x02\x02\x02" +
		"\u0289\u028C\x03\x02\x02\x02\u028A\u0288\x03\x02\x02\x02\u028B\u028D\x07" +
		"-\x02\x02\u028C\u028B\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D" +
		"\u028E\x03\x02\x02\x02\u028E\u028F\x07#\x02\x02\u028F\x9D\x03\x02\x02" +
		"\x02\u0290\u0291\x07\x11\x02\x02\u0291\u0292\x05\xC2b\x02\u0292\u0293" +
		"\x073\x02\x02\u0293\u0294\x05\xC2b\x02\u0294\u0295\x073\x02\x02\u0295" +
		"\u0298\x05\x92J\x02\u0296\u0297\x07\x07\x02\x02\u0297\u0299\x05\xC2b\x02" +
		"\u0298\u0296\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\x9F\x03" +
		"\x02\x02\x02\u029A\u029B\x07\b\x02\x02\u029B\xA1\x03\x02\x02\x02\u029C" +
		"\u029D\x07\v\x02\x02\u029D\xA3\x03\x02\x02\x02\u029E\u02A0\x05\xA8U\x02" +
		"\u029F\u029E\x03\x02\x02\x02\u029F\u02A0\x03\x02\x02\x02\u02A0\u02A2\x03" +
		"\x02\x02\x02\u02A1\u02A3\x05\xB6\\\x02\u02A2\u02A1\x03\x02\x02\x02\u02A2" +
		"\u02A3\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A4\u02A5\x05\xC6" +
		"d\x02\u02A5\xA5\x03\x02\x02\x02\u02A6\u02A7\x07\"\x02\x02\u02A7\u02AC" +
		"\x05\xC6d\x02\u02A8\u02A9\x07-\x02\x02\u02A9\u02AB\x05\xC6d\x02\u02AA" +
		"\u02A8\x03\x02\x02\x02\u02AB\u02AE\x03\x02\x02\x02\u02AC\u02AA\x03\x02" +
		"\x02\x02\u02AC\u02AD\x03\x02\x02\x02\u02AD\u02B0\x03\x02\x02\x02\u02AE" +
		"\u02AC\x03\x02\x02\x02\u02AF\u02B1\x07-\x02\x02\u02B0\u02AF\x03\x02\x02" +
		"\x02\u02B0\u02B1\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02\u02B2\u02B3" +
		"\x07#\x02\x02\u02B3\xA7\x03\x02\x02\x02\u02B4\u02B5\t\x06\x02\x02\u02B5" +
		"\xA9\x03\x02\x02\x02\u02B6\u02BB\x05\xACW\x02\u02B7\u02BB\x05\xAEX\x02" +
		"\u02B8\u02BB\x05\xB0Y\x02\u02B9\u02BB\x05\xB2Z\x02\u02BA\u02B6\x03\x02" +
		"\x02\x02\u02BA\u02B7\x03\x02\x02\x02\u02BA\u02B8\x03\x02\x02\x02\u02BA" +
		"\u02B9\x03\x02\x02\x02\u02BB\xAB\x03\x02\x02\x02\u02BC\u02BD\x05\x86D" +
		"\x02\u02BD\u02BE\x07,\x02\x02\u02BE\u02BF\x05\xC6d\x02\u02BF\xAD\x03\x02" +
		"\x02\x02\u02C0\u02C1\x05\x86D\x02\u02C1\u02C2\x07\"\x02\x02\u02C2\u02C3" +
		"\x05\x8CG\x02\u02C3\u02C4\x07#\x02\x02\u02C4\xAF\x03\x02\x02\x02\u02C5" +
		"\u02C6\x05\xC6d\x02\u02C6\xB1\x03\x02\x02\x02\u02C7\u02C8\x07 \x02\x02" +
		"\u02C8\u02C9\x05\xAAV\x02\u02C9\u02CA\x07!\x02\x02\u02CA\xB3\x03\x02\x02" +
		"\x02\u02CB\u02CC\t\x07\x02\x02\u02CC\xB5\x03\x02\x02\x02\u02CD\u02CF\x05" +
		"\xB8]\x02\u02CE\u02CD\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02\u02CF" +
		"\u02D0\x03\x02\x02\x02\u02D0\u02D2\x05\xBA^\x02\u02D1\u02D3\x05\xBC_\x02" +
		"\u02D2\u02D1\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3\u02D5\x03" +
		"\x02\x02\x02\u02D4\u02D6\x05\xBE`\x02\u02D5\u02D4\x03\x02\x02\x02\u02D5" +
		"\u02D6\x03\x02\x02\x02\u02D6\xB7\x03\x02\x02\x02\u02D7\u02D8\t\b\x02\x02" +
		"\u02D8\xB9\x03\x02\x02\x02\u02D9\u02DE\x05\xC4c\x02\u02DA\u02DB\x07,\x02" +
		"\x02\u02DB\u02DD\x05\xC4c\x02\u02DC\u02DA\x03\x02\x02\x02\u02DD\u02E0" +
		"\x03\x02\x02\x02\u02DE\u02DC\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02" +
		"\u02DF\xBB\x03\x02\x02\x02\u02E0\u02DE\x03\x02\x02\x02\u02E1\u02E3\x07" +
		"$\x02\x02\u02E2\u02E4\x05\xC0a\x02\u02E3\u02E2\x03\x02\x02\x02\u02E3\u02E4" +
		"\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E6\x07%\x02\x02" +
		"\u02E6\xBD\x03\x02\x02\x02\u02E7\u02E8\x07\"\x02\x02\u02E8\u02E9\x07#" +
		"\x02\x02\u02E9\xBF\x03\x02\x02\x02\u02EA\u02EF\x05\xB6\\\x02\u02EB\u02EC" +
		"\x07-\x02\x02\u02EC\u02EE\x05\xB6\\\x02\u02ED\u02EB\x03\x02\x02\x02\u02EE" +
		"\u02F1\x03\x02\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02EF\u02F0\x03\x02" +
		"\x02\x02\u02F0\u02F3\x03\x02\x02\x02\u02F1\u02EF\x03\x02\x02\x02\u02F2" +
		"\u02F4\x07-\x02\x02\u02F3\u02F2\x03\x02\x02\x02\u02F3\u02F4\x03\x02\x02" +
		"\x02\u02F4\xC1\x03\x02\x02\x02\u02F5\u02F6\t\t\x02\x02\u02F6\xC3\x03\x02" +
		"\x02\x02\u02F7\u02F8\x05\xC2b\x02\u02F8\xC5\x03\x02\x02\x02\u02F9\u02FA" +
		"\x05\xC2b\x02\u02FA\xC7\x03\x02\x02\x02\u02FB\u02FD\x05\xCAf\x02\u02FC" +
		"\u02FB\x03\x02\x02\x02\u02FD\u02FE\x03\x02\x02\x02\u02FE\u02FC\x03\x02" +
		"\x02\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF\xC9\x03\x02\x02\x02\u0300\u0301" +
		"\x07A\x02\x02\u0301\xCB\x03\x02\x02\x02N\xCF\xD5\xDA\xE1\xE7\xF0\xF5\xFB" +
		"\u0100\u0104\u010A\u0110\u0116\u011C\u011F\u0122\u0127\u0132\u0136\u0139" +
		"\u013E\u0141\u014C\u0152\u015A\u0162\u016D\u0171\u017E\u0185\u018F\u019B" +
		"\u01A3\u01AC\u01AF\u01C2\u01CC\u01D3\u01D7\u01DE\u01E2\u01E8\u01EC\u01F6" +
		"\u01FC\u0202\u0219\u0227\u0230\u023C\u0240\u0248\u024A\u0252\u0256\u025B" +
		"\u0264\u0268\u026E\u0274\u0288\u028C\u0298\u029F\u02A2\u02AC\u02B0\u02BA" +
		"\u02CE\u02D2\u02D5\u02DE\u02E3\u02EF\u02F3\u02FE";
	public static readonly _serializedATN: string = Utils.join(
		[
			PinescriptParser._serializedATNSegment0,
			PinescriptParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PinescriptParser.__ATN) {
			PinescriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PinescriptParser._serializedATN));
		}

		return PinescriptParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public start_script(): Start_scriptContext {
		return this.getRuleContext(0, Start_scriptContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_start; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Start_scriptContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(PinescriptParser.EOF, 0); }
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_start_script; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterStart_script) {
			listener.enterStart_script(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitStart_script) {
			listener.exitStart_script(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitStart_script) {
			return visitor.visitStart_script(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Start_expressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public EOF(): TerminalNode { return this.getToken(PinescriptParser.EOF, 0); }
	public END_STATEMENT(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.END_STATEMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_start_expression; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterStart_expression) {
			listener.enterStart_expression(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitStart_expression) {
			listener.exitStart_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitStart_expression) {
			return visitor.visitStart_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Start_commentsContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(PinescriptParser.EOF, 0); }
	public comments(): CommentsContext | undefined {
		return this.tryGetRuleContext(0, CommentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_start_comments; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterStart_comments) {
			listener.enterStart_comments(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitStart_comments) {
			listener.exitStart_comments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitStart_comments) {
			return visitor.visitStart_comments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_statements; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterStatements) {
			listener.enterStatements(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitStatements) {
			listener.exitStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitStatements) {
			return visitor.visitStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public compound_statement_with_block(): Compound_statement_with_blockContext | undefined {
		return this.tryGetRuleContext(0, Compound_statement_with_blockContext);
	}
	public END_BLOCK(): TerminalNode[];
	public END_BLOCK(i: number): TerminalNode;
	public END_BLOCK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PinescriptParser.END_BLOCK);
		} else {
			return this.getToken(PinescriptParser.END_BLOCK, i);
		}
	}
	public simple_statement(): Simple_statementContext | undefined {
		return this.tryGetRuleContext(0, Simple_statementContext);
	}
	public END_STATEMENT(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.END_STATEMENT, 0); }
	public compound_assignment(): Compound_assignmentContext | undefined {
		return this.tryGetRuleContext(0, Compound_assignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_statement; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compound_statement_with_blockContext extends ParserRuleContext {
	public function_declaration(): Function_declarationContext | undefined {
		return this.tryGetRuleContext(0, Function_declarationContext);
	}
	public type_declaration(): Type_declarationContext | undefined {
		return this.tryGetRuleContext(0, Type_declarationContext);
	}
	public structure_statement(): Structure_statementContext | undefined {
		return this.tryGetRuleContext(0, Structure_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_compound_statement_with_block; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterCompound_statement_with_block) {
			listener.enterCompound_statement_with_block(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitCompound_statement_with_block) {
			listener.exitCompound_statement_with_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitCompound_statement_with_block) {
			return visitor.visitCompound_statement_with_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_statementContext extends ParserRuleContext {
	public expression_statement(): Expression_statementContext | undefined {
		return this.tryGetRuleContext(0, Expression_statementContext);
	}
	public import_statement(): Import_statementContext | undefined {
		return this.tryGetRuleContext(0, Import_statementContext);
	}
	public break_statement(): Break_statementContext | undefined {
		return this.tryGetRuleContext(0, Break_statementContext);
	}
	public continue_statement(): Continue_statementContext | undefined {
		return this.tryGetRuleContext(0, Continue_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_simple_statement; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterSimple_statement) {
			listener.enterSimple_statement(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitSimple_statement) {
			listener.exitSimple_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitSimple_statement) {
			return visitor.visitSimple_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compound_assignmentContext extends ParserRuleContext {
	public compound_variable_initialization(): Compound_variable_initializationContext | undefined {
		return this.tryGetRuleContext(0, Compound_variable_initializationContext);
	}
	public compound_reassignment(): Compound_reassignmentContext | undefined {
		return this.tryGetRuleContext(0, Compound_reassignmentContext);
	}
	public compound_augassignment(): Compound_augassignmentContext | undefined {
		return this.tryGetRuleContext(0, Compound_augassignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_compound_assignment; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterCompound_assignment) {
			listener.enterCompound_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitCompound_assignment) {
			listener.exitCompound_assignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitCompound_assignment) {
			return visitor.visitCompound_assignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compound_variable_initializationContext extends ParserRuleContext {
	public compound_name_initialization(): Compound_name_initializationContext | undefined {
		return this.tryGetRuleContext(0, Compound_name_initializationContext);
	}
	public compound_tuple_initialization(): Compound_tuple_initializationContext | undefined {
		return this.tryGetRuleContext(0, Compound_tuple_initializationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_compound_variable_initialization; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterCompound_variable_initialization) {
			listener.enterCompound_variable_initialization(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitCompound_variable_initialization) {
			listener.exitCompound_variable_initialization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitCompound_variable_initialization) {
			return visitor.visitCompound_variable_initialization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compound_name_initializationContext extends ParserRuleContext {
	public var_declaration_stmt(): Var_declaration_stmtContext {
		return this.getRuleContext(0, Var_declaration_stmtContext);
	}
	public EQUAL(): TerminalNode { return this.getToken(PinescriptParser.EQUAL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public structure_expression(): Structure_expressionContext | undefined {
		return this.tryGetRuleContext(0, Structure_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_compound_name_initialization; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterCompound_name_initialization) {
			listener.enterCompound_name_initialization(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitCompound_name_initialization) {
			listener.exitCompound_name_initialization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitCompound_name_initialization) {
			return visitor.visitCompound_name_initialization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compound_tuple_initializationContext extends ParserRuleContext {
	public tuple_declaration(): Tuple_declarationContext {
		return this.getRuleContext(0, Tuple_declarationContext);
	}
	public EQUAL(): TerminalNode { return this.getToken(PinescriptParser.EQUAL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public structure_expression(): Structure_expressionContext | undefined {
		return this.tryGetRuleContext(0, Structure_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_compound_tuple_initialization; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterCompound_tuple_initialization) {
			listener.enterCompound_tuple_initialization(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitCompound_tuple_initialization) {
			listener.exitCompound_tuple_initialization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitCompound_tuple_initialization) {
			return visitor.visitCompound_tuple_initialization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compound_reassignmentContext extends ParserRuleContext {
	public assignment_target(): Assignment_targetContext {
		return this.getRuleContext(0, Assignment_targetContext);
	}
	public COLONEQUAL(): TerminalNode { return this.getToken(PinescriptParser.COLONEQUAL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public structure_expression(): Structure_expressionContext | undefined {
		return this.tryGetRuleContext(0, Structure_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_compound_reassignment; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterCompound_reassignment) {
			listener.enterCompound_reassignment(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitCompound_reassignment) {
			listener.exitCompound_reassignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitCompound_reassignment) {
			return visitor.visitCompound_reassignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compound_augassignmentContext extends ParserRuleContext {
	public assignment_target(): Assignment_targetContext {
		return this.getRuleContext(0, Assignment_targetContext);
	}
	public augassign_op(): Augassign_opContext {
		return this.getRuleContext(0, Augassign_opContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public structure_expression(): Structure_expressionContext | undefined {
		return this.tryGetRuleContext(0, Structure_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_compound_augassignment; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterCompound_augassignment) {
			listener.enterCompound_augassignment(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitCompound_augassignment) {
			listener.exitCompound_augassignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitCompound_augassignment) {
			return visitor.visitCompound_augassignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_declarationContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public LPAR(): TerminalNode { return this.getToken(PinescriptParser.LPAR, 0); }
	public RPAR(): TerminalNode { return this.getToken(PinescriptParser.RPAR, 0); }
	public RARROW(): TerminalNode { return this.getToken(PinescriptParser.RARROW, 0); }
	public local_block(): Local_blockContext {
		return this.getRuleContext(0, Local_blockContext);
	}
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.EXPORT, 0); }
	public METHOD(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.METHOD, 0); }
	public parameter_list(): Parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Parameter_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_function_declaration; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterFunction_declaration) {
			listener.enterFunction_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitFunction_declaration) {
			listener.exitFunction_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitFunction_declaration) {
			return visitor.visitFunction_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_listContext extends ParserRuleContext {
	public parameter_definition(): Parameter_definitionContext[];
	public parameter_definition(i: number): Parameter_definitionContext;
	public parameter_definition(i?: number): Parameter_definitionContext | Parameter_definitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Parameter_definitionContext);
		} else {
			return this.getRuleContext(i, Parameter_definitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PinescriptParser.COMMA);
		} else {
			return this.getToken(PinescriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_parameter_list; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterParameter_list) {
			listener.enterParameter_list(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitParameter_list) {
			listener.exitParameter_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitParameter_list) {
			return visitor.visitParameter_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_definitionContext extends ParserRuleContext {
	public name_store(): Name_storeContext {
		return this.getRuleContext(0, Name_storeContext);
	}
	public type_specification(): Type_specificationContext | undefined {
		return this.tryGetRuleContext(0, Type_specificationContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.EQUAL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_parameter_definition; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterParameter_definition) {
			listener.enterParameter_definition(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitParameter_definition) {
			listener.exitParameter_definition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitParameter_definition) {
			return visitor.visitParameter_definition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_declarationContext extends ParserRuleContext {
	public TYPE(): TerminalNode { return this.getToken(PinescriptParser.TYPE, 0); }
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public BEGIN_BLOCK(): TerminalNode { return this.getToken(PinescriptParser.BEGIN_BLOCK, 0); }
	public field_definitions(): Field_definitionsContext {
		return this.getRuleContext(0, Field_definitionsContext);
	}
	public END_BLOCK(): TerminalNode { return this.getToken(PinescriptParser.END_BLOCK, 0); }
	public EXPORT(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.EXPORT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_type_declaration; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterType_declaration) {
			listener.enterType_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitType_declaration) {
			listener.exitType_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitType_declaration) {
			return visitor.visitType_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Field_definitionsContext extends ParserRuleContext {
	public field_definition(): Field_definitionContext[];
	public field_definition(i: number): Field_definitionContext;
	public field_definition(i?: number): Field_definitionContext | Field_definitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Field_definitionContext);
		} else {
			return this.getRuleContext(i, Field_definitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_field_definitions; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterField_definitions) {
			listener.enterField_definitions(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitField_definitions) {
			listener.exitField_definitions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitField_definitions) {
			return visitor.visitField_definitions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Field_definitionContext extends ParserRuleContext {
	public type_specification(): Type_specificationContext {
		return this.getRuleContext(0, Type_specificationContext);
	}
	public name_store(): Name_storeContext {
		return this.getRuleContext(0, Name_storeContext);
	}
	public END_STATEMENT(): TerminalNode { return this.getToken(PinescriptParser.END_STATEMENT, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.EQUAL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_field_definition; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterField_definition) {
			listener.enterField_definition(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitField_definition) {
			listener.exitField_definition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitField_definition) {
			return visitor.visitField_definition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructureContext extends ParserRuleContext {
	public if_structure(): If_structureContext | undefined {
		return this.tryGetRuleContext(0, If_structureContext);
	}
	public for_structure(): For_structureContext | undefined {
		return this.tryGetRuleContext(0, For_structureContext);
	}
	public while_structure(): While_structureContext | undefined {
		return this.tryGetRuleContext(0, While_structureContext);
	}
	public switch_structure(): Switch_structureContext | undefined {
		return this.tryGetRuleContext(0, Switch_structureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_structure; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterStructure) {
			listener.enterStructure(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitStructure) {
			listener.exitStructure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitStructure) {
			return visitor.visitStructure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Structure_statementContext extends ParserRuleContext {
	public structure(): StructureContext {
		return this.getRuleContext(0, StructureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_structure_statement; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterStructure_statement) {
			listener.enterStructure_statement(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitStructure_statement) {
			listener.exitStructure_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitStructure_statement) {
			return visitor.visitStructure_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Structure_expressionContext extends ParserRuleContext {
	public structure(): StructureContext {
		return this.getRuleContext(0, StructureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_structure_expression; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterStructure_expression) {
			listener.enterStructure_expression(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitStructure_expression) {
			listener.exitStructure_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitStructure_expression) {
			return visitor.visitStructure_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_structureContext extends ParserRuleContext {
	public if_structure_elif(): If_structure_elifContext | undefined {
		return this.tryGetRuleContext(0, If_structure_elifContext);
	}
	public if_structure_else(): If_structure_elseContext | undefined {
		return this.tryGetRuleContext(0, If_structure_elseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_if_structure; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterIf_structure) {
			listener.enterIf_structure(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitIf_structure) {
			listener.exitIf_structure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitIf_structure) {
			return visitor.visitIf_structure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_structure_elifContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(PinescriptParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public local_block(): Local_blockContext {
		return this.getRuleContext(0, Local_blockContext);
	}
	public elif_structure(): Elif_structureContext {
		return this.getRuleContext(0, Elif_structureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_if_structure_elif; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterIf_structure_elif) {
			listener.enterIf_structure_elif(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitIf_structure_elif) {
			listener.exitIf_structure_elif(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitIf_structure_elif) {
			return visitor.visitIf_structure_elif(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_structure_elseContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(PinescriptParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public local_block(): Local_blockContext {
		return this.getRuleContext(0, Local_blockContext);
	}
	public else_block(): Else_blockContext | undefined {
		return this.tryGetRuleContext(0, Else_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_if_structure_else; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterIf_structure_else) {
			listener.enterIf_structure_else(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitIf_structure_else) {
			listener.exitIf_structure_else(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitIf_structure_else) {
			return visitor.visitIf_structure_else(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Elif_structureContext extends ParserRuleContext {
	public elif_structure_elif(): Elif_structure_elifContext | undefined {
		return this.tryGetRuleContext(0, Elif_structure_elifContext);
	}
	public elif_structure_else(): Elif_structure_elseContext | undefined {
		return this.tryGetRuleContext(0, Elif_structure_elseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_elif_structure; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterElif_structure) {
			listener.enterElif_structure(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitElif_structure) {
			listener.exitElif_structure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitElif_structure) {
			return visitor.visitElif_structure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Elif_structure_elifContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(PinescriptParser.ELSE, 0); }
	public IF(): TerminalNode { return this.getToken(PinescriptParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public local_block(): Local_blockContext {
		return this.getRuleContext(0, Local_blockContext);
	}
	public elif_structure(): Elif_structureContext {
		return this.getRuleContext(0, Elif_structureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_elif_structure_elif; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterElif_structure_elif) {
			listener.enterElif_structure_elif(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitElif_structure_elif) {
			listener.exitElif_structure_elif(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitElif_structure_elif) {
			return visitor.visitElif_structure_elif(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Elif_structure_elseContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(PinescriptParser.ELSE, 0); }
	public IF(): TerminalNode { return this.getToken(PinescriptParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public local_block(): Local_blockContext {
		return this.getRuleContext(0, Local_blockContext);
	}
	public else_block(): Else_blockContext | undefined {
		return this.tryGetRuleContext(0, Else_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_elif_structure_else; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterElif_structure_else) {
			listener.enterElif_structure_else(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitElif_structure_else) {
			listener.exitElif_structure_else(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitElif_structure_else) {
			return visitor.visitElif_structure_else(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Else_blockContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(PinescriptParser.ELSE, 0); }
	public local_block(): Local_blockContext {
		return this.getRuleContext(0, Local_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_else_block; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterElse_block) {
			listener.enterElse_block(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitElse_block) {
			listener.exitElse_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitElse_block) {
			return visitor.visitElse_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_structureContext extends ParserRuleContext {
	public for_structure_to(): For_structure_toContext | undefined {
		return this.tryGetRuleContext(0, For_structure_toContext);
	}
	public for_structure_in(): For_structure_inContext | undefined {
		return this.tryGetRuleContext(0, For_structure_inContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_for_structure; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterFor_structure) {
			listener.enterFor_structure(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitFor_structure) {
			listener.exitFor_structure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitFor_structure) {
			return visitor.visitFor_structure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_structure_toContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(PinescriptParser.FOR, 0); }
	public for_iterator(): For_iteratorContext {
		return this.getRuleContext(0, For_iteratorContext);
	}
	public EQUAL(): TerminalNode { return this.getToken(PinescriptParser.EQUAL, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public TO(): TerminalNode { return this.getToken(PinescriptParser.TO, 0); }
	public local_block(): Local_blockContext {
		return this.getRuleContext(0, Local_blockContext);
	}
	public BY(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.BY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_for_structure_to; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterFor_structure_to) {
			listener.enterFor_structure_to(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitFor_structure_to) {
			listener.exitFor_structure_to(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitFor_structure_to) {
			return visitor.visitFor_structure_to(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_structure_inContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(PinescriptParser.FOR, 0); }
	public for_iterator(): For_iteratorContext {
		return this.getRuleContext(0, For_iteratorContext);
	}
	public IN(): TerminalNode { return this.getToken(PinescriptParser.IN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public local_block(): Local_blockContext {
		return this.getRuleContext(0, Local_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_for_structure_in; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterFor_structure_in) {
			listener.enterFor_structure_in(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitFor_structure_in) {
			listener.exitFor_structure_in(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitFor_structure_in) {
			return visitor.visitFor_structure_in(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_iteratorContext extends ParserRuleContext {
	public name_store(): Name_storeContext | undefined {
		return this.tryGetRuleContext(0, Name_storeContext);
	}
	public tuple_declaration(): Tuple_declarationContext | undefined {
		return this.tryGetRuleContext(0, Tuple_declarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_for_iterator; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterFor_iterator) {
			listener.enterFor_iterator(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitFor_iterator) {
			listener.exitFor_iterator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitFor_iterator) {
			return visitor.visitFor_iterator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class While_structureContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(PinescriptParser.WHILE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public local_block(): Local_blockContext {
		return this.getRuleContext(0, Local_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_while_structure; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterWhile_structure) {
			listener.enterWhile_structure(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitWhile_structure) {
			listener.exitWhile_structure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitWhile_structure) {
			return visitor.visitWhile_structure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_structureContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(PinescriptParser.SWITCH, 0); }
	public BEGIN_BLOCK(): TerminalNode { return this.getToken(PinescriptParser.BEGIN_BLOCK, 0); }
	public switch_cases(): Switch_casesContext {
		return this.getRuleContext(0, Switch_casesContext);
	}
	public END_BLOCK(): TerminalNode { return this.getToken(PinescriptParser.END_BLOCK, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_switch_structure; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterSwitch_structure) {
			listener.enterSwitch_structure(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitSwitch_structure) {
			listener.exitSwitch_structure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitSwitch_structure) {
			return visitor.visitSwitch_structure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_casesContext extends ParserRuleContext {
	public switch_pattern_case(): Switch_pattern_caseContext[];
	public switch_pattern_case(i: number): Switch_pattern_caseContext;
	public switch_pattern_case(i?: number): Switch_pattern_caseContext | Switch_pattern_caseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Switch_pattern_caseContext);
		} else {
			return this.getRuleContext(i, Switch_pattern_caseContext);
		}
	}
	public switch_default_case(): Switch_default_caseContext | undefined {
		return this.tryGetRuleContext(0, Switch_default_caseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_switch_cases; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterSwitch_cases) {
			listener.enterSwitch_cases(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitSwitch_cases) {
			listener.exitSwitch_cases(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitSwitch_cases) {
			return visitor.visitSwitch_cases(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_pattern_caseContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RARROW(): TerminalNode { return this.getToken(PinescriptParser.RARROW, 0); }
	public local_block(): Local_blockContext {
		return this.getRuleContext(0, Local_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_switch_pattern_case; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterSwitch_pattern_case) {
			listener.enterSwitch_pattern_case(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitSwitch_pattern_case) {
			listener.exitSwitch_pattern_case(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitSwitch_pattern_case) {
			return visitor.visitSwitch_pattern_case(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_default_caseContext extends ParserRuleContext {
	public RARROW(): TerminalNode { return this.getToken(PinescriptParser.RARROW, 0); }
	public local_block(): Local_blockContext {
		return this.getRuleContext(0, Local_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_switch_default_case; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterSwitch_default_case) {
			listener.enterSwitch_default_case(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitSwitch_default_case) {
			listener.exitSwitch_default_case(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitSwitch_default_case) {
			return visitor.visitSwitch_default_case(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Local_blockContext extends ParserRuleContext {
	public BEGIN_BLOCK(): TerminalNode { return this.getToken(PinescriptParser.BEGIN_BLOCK, 0); }
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public END_BLOCK(): TerminalNode { return this.getToken(PinescriptParser.END_BLOCK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_local_block; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterLocal_block) {
			listener.enterLocal_block(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitLocal_block) {
			listener.exitLocal_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitLocal_block) {
			return visitor.visitLocal_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public conditional_expression(): Conditional_expressionContext {
		return this.getRuleContext(0, Conditional_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_expression; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expression_statementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_expression_statement; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterExpression_statement) {
			listener.enterExpression_statement(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitExpression_statement) {
			listener.exitExpression_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitExpression_statement) {
			return visitor.visitExpression_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_expressionContext extends ParserRuleContext {
	public conditional_expression_rule(): Conditional_expression_ruleContext | undefined {
		return this.tryGetRuleContext(0, Conditional_expression_ruleContext);
	}
	public disjunction_expression(): Disjunction_expressionContext | undefined {
		return this.tryGetRuleContext(0, Disjunction_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_conditional_expression; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterConditional_expression) {
			listener.enterConditional_expression(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitConditional_expression) {
			listener.exitConditional_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitConditional_expression) {
			return visitor.visitConditional_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_expression_ruleContext extends ParserRuleContext {
	public disjunction_expression(): Disjunction_expressionContext {
		return this.getRuleContext(0, Disjunction_expressionContext);
	}
	public QUESTION(): TerminalNode { return this.getToken(PinescriptParser.QUESTION, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(PinescriptParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_conditional_expression_rule; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterConditional_expression_rule) {
			listener.enterConditional_expression_rule(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitConditional_expression_rule) {
			listener.exitConditional_expression_rule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitConditional_expression_rule) {
			return visitor.visitConditional_expression_rule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Disjunction_expressionContext extends ParserRuleContext {
	public disjunction_expression_rule(): Disjunction_expression_ruleContext | undefined {
		return this.tryGetRuleContext(0, Disjunction_expression_ruleContext);
	}
	public conjunction_expression(): Conjunction_expressionContext | undefined {
		return this.tryGetRuleContext(0, Conjunction_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_disjunction_expression; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterDisjunction_expression) {
			listener.enterDisjunction_expression(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitDisjunction_expression) {
			listener.exitDisjunction_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitDisjunction_expression) {
			return visitor.visitDisjunction_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Disjunction_expression_ruleContext extends ParserRuleContext {
	public conjunction_expression(): Conjunction_expressionContext[];
	public conjunction_expression(i: number): Conjunction_expressionContext;
	public conjunction_expression(i?: number): Conjunction_expressionContext | Conjunction_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Conjunction_expressionContext);
		} else {
			return this.getRuleContext(i, Conjunction_expressionContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PinescriptParser.OR);
		} else {
			return this.getToken(PinescriptParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_disjunction_expression_rule; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterDisjunction_expression_rule) {
			listener.enterDisjunction_expression_rule(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitDisjunction_expression_rule) {
			listener.exitDisjunction_expression_rule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitDisjunction_expression_rule) {
			return visitor.visitDisjunction_expression_rule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conjunction_expressionContext extends ParserRuleContext {
	public conjunction_expression_rule(): Conjunction_expression_ruleContext | undefined {
		return this.tryGetRuleContext(0, Conjunction_expression_ruleContext);
	}
	public equality_expression(): Equality_expressionContext | undefined {
		return this.tryGetRuleContext(0, Equality_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_conjunction_expression; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterConjunction_expression) {
			listener.enterConjunction_expression(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitConjunction_expression) {
			listener.exitConjunction_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitConjunction_expression) {
			return visitor.visitConjunction_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conjunction_expression_ruleContext extends ParserRuleContext {
	public equality_expression(): Equality_expressionContext[];
	public equality_expression(i: number): Equality_expressionContext;
	public equality_expression(i?: number): Equality_expressionContext | Equality_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Equality_expressionContext);
		} else {
			return this.getRuleContext(i, Equality_expressionContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PinescriptParser.AND);
		} else {
			return this.getToken(PinescriptParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_conjunction_expression_rule; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterConjunction_expression_rule) {
			listener.enterConjunction_expression_rule(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitConjunction_expression_rule) {
			listener.exitConjunction_expression_rule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitConjunction_expression_rule) {
			return visitor.visitConjunction_expression_rule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Equality_expressionContext extends ParserRuleContext {
	public equality_expression_rule(): Equality_expression_ruleContext | undefined {
		return this.tryGetRuleContext(0, Equality_expression_ruleContext);
	}
	public inequality_expression(): Inequality_expressionContext | undefined {
		return this.tryGetRuleContext(0, Inequality_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_equality_expression; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterEquality_expression) {
			listener.enterEquality_expression(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitEquality_expression) {
			listener.exitEquality_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitEquality_expression) {
			return visitor.visitEquality_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Equality_expression_ruleContext extends ParserRuleContext {
	public inequality_expression(): Inequality_expressionContext {
		return this.getRuleContext(0, Inequality_expressionContext);
	}
	public equality_trailing_pair(): Equality_trailing_pairContext[];
	public equality_trailing_pair(i: number): Equality_trailing_pairContext;
	public equality_trailing_pair(i?: number): Equality_trailing_pairContext | Equality_trailing_pairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Equality_trailing_pairContext);
		} else {
			return this.getRuleContext(i, Equality_trailing_pairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_equality_expression_rule; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterEquality_expression_rule) {
			listener.enterEquality_expression_rule(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitEquality_expression_rule) {
			listener.exitEquality_expression_rule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitEquality_expression_rule) {
			return visitor.visitEquality_expression_rule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Equality_trailing_pairContext extends ParserRuleContext {
	public equal_trailing_pair(): Equal_trailing_pairContext | undefined {
		return this.tryGetRuleContext(0, Equal_trailing_pairContext);
	}
	public not_equal_trailing_pair(): Not_equal_trailing_pairContext | undefined {
		return this.tryGetRuleContext(0, Not_equal_trailing_pairContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_equality_trailing_pair; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterEquality_trailing_pair) {
			listener.enterEquality_trailing_pair(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitEquality_trailing_pair) {
			listener.exitEquality_trailing_pair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitEquality_trailing_pair) {
			return visitor.visitEquality_trailing_pair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Equal_trailing_pairContext extends ParserRuleContext {
	public EQEQUAL(): TerminalNode { return this.getToken(PinescriptParser.EQEQUAL, 0); }
	public inequality_expression(): Inequality_expressionContext {
		return this.getRuleContext(0, Inequality_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_equal_trailing_pair; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterEqual_trailing_pair) {
			listener.enterEqual_trailing_pair(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitEqual_trailing_pair) {
			listener.exitEqual_trailing_pair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitEqual_trailing_pair) {
			return visitor.visitEqual_trailing_pair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Not_equal_trailing_pairContext extends ParserRuleContext {
	public NOTEQUAL(): TerminalNode { return this.getToken(PinescriptParser.NOTEQUAL, 0); }
	public inequality_expression(): Inequality_expressionContext {
		return this.getRuleContext(0, Inequality_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_not_equal_trailing_pair; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterNot_equal_trailing_pair) {
			listener.enterNot_equal_trailing_pair(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitNot_equal_trailing_pair) {
			listener.exitNot_equal_trailing_pair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitNot_equal_trailing_pair) {
			return visitor.visitNot_equal_trailing_pair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Inequality_expressionContext extends ParserRuleContext {
	public inequality_expression_rule(): Inequality_expression_ruleContext | undefined {
		return this.tryGetRuleContext(0, Inequality_expression_ruleContext);
	}
	public additive_expression(): Additive_expressionContext | undefined {
		return this.tryGetRuleContext(0, Additive_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_inequality_expression; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterInequality_expression) {
			listener.enterInequality_expression(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitInequality_expression) {
			listener.exitInequality_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitInequality_expression) {
			return visitor.visitInequality_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Inequality_expression_ruleContext extends ParserRuleContext {
	public additive_expression(): Additive_expressionContext {
		return this.getRuleContext(0, Additive_expressionContext);
	}
	public inequality_trailing_pair(): Inequality_trailing_pairContext[];
	public inequality_trailing_pair(i: number): Inequality_trailing_pairContext;
	public inequality_trailing_pair(i?: number): Inequality_trailing_pairContext | Inequality_trailing_pairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Inequality_trailing_pairContext);
		} else {
			return this.getRuleContext(i, Inequality_trailing_pairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_inequality_expression_rule; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterInequality_expression_rule) {
			listener.enterInequality_expression_rule(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitInequality_expression_rule) {
			listener.exitInequality_expression_rule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitInequality_expression_rule) {
			return visitor.visitInequality_expression_rule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Inequality_trailing_pairContext extends ParserRuleContext {
	public less_than_equal_trailing_pair(): Less_than_equal_trailing_pairContext | undefined {
		return this.tryGetRuleContext(0, Less_than_equal_trailing_pairContext);
	}
	public less_than_trailing_pair(): Less_than_trailing_pairContext | undefined {
		return this.tryGetRuleContext(0, Less_than_trailing_pairContext);
	}
	public greater_than_equal_trailing_pair(): Greater_than_equal_trailing_pairContext | undefined {
		return this.tryGetRuleContext(0, Greater_than_equal_trailing_pairContext);
	}
	public greater_than_trailing_pair(): Greater_than_trailing_pairContext | undefined {
		return this.tryGetRuleContext(0, Greater_than_trailing_pairContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_inequality_trailing_pair; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterInequality_trailing_pair) {
			listener.enterInequality_trailing_pair(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitInequality_trailing_pair) {
			listener.exitInequality_trailing_pair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitInequality_trailing_pair) {
			return visitor.visitInequality_trailing_pair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Less_than_equal_trailing_pairContext extends ParserRuleContext {
	public LESSEQUAL(): TerminalNode { return this.getToken(PinescriptParser.LESSEQUAL, 0); }
	public additive_expression(): Additive_expressionContext {
		return this.getRuleContext(0, Additive_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_less_than_equal_trailing_pair; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterLess_than_equal_trailing_pair) {
			listener.enterLess_than_equal_trailing_pair(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitLess_than_equal_trailing_pair) {
			listener.exitLess_than_equal_trailing_pair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitLess_than_equal_trailing_pair) {
			return visitor.visitLess_than_equal_trailing_pair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Less_than_trailing_pairContext extends ParserRuleContext {
	public LESS(): TerminalNode { return this.getToken(PinescriptParser.LESS, 0); }
	public additive_expression(): Additive_expressionContext {
		return this.getRuleContext(0, Additive_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_less_than_trailing_pair; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterLess_than_trailing_pair) {
			listener.enterLess_than_trailing_pair(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitLess_than_trailing_pair) {
			listener.exitLess_than_trailing_pair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitLess_than_trailing_pair) {
			return visitor.visitLess_than_trailing_pair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Greater_than_equal_trailing_pairContext extends ParserRuleContext {
	public GREATEREQUAL(): TerminalNode { return this.getToken(PinescriptParser.GREATEREQUAL, 0); }
	public additive_expression(): Additive_expressionContext {
		return this.getRuleContext(0, Additive_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_greater_than_equal_trailing_pair; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterGreater_than_equal_trailing_pair) {
			listener.enterGreater_than_equal_trailing_pair(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitGreater_than_equal_trailing_pair) {
			listener.exitGreater_than_equal_trailing_pair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitGreater_than_equal_trailing_pair) {
			return visitor.visitGreater_than_equal_trailing_pair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Greater_than_trailing_pairContext extends ParserRuleContext {
	public GREATER(): TerminalNode { return this.getToken(PinescriptParser.GREATER, 0); }
	public additive_expression(): Additive_expressionContext {
		return this.getRuleContext(0, Additive_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_greater_than_trailing_pair; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterGreater_than_trailing_pair) {
			listener.enterGreater_than_trailing_pair(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitGreater_than_trailing_pair) {
			listener.exitGreater_than_trailing_pair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitGreater_than_trailing_pair) {
			return visitor.visitGreater_than_trailing_pair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Additive_expressionContext extends ParserRuleContext {
	public additive_expression(): Additive_expressionContext | undefined {
		return this.tryGetRuleContext(0, Additive_expressionContext);
	}
	public additive_op(): Additive_opContext | undefined {
		return this.tryGetRuleContext(0, Additive_opContext);
	}
	public multiplicative_expression(): Multiplicative_expressionContext {
		return this.getRuleContext(0, Multiplicative_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_additive_expression; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterAdditive_expression) {
			listener.enterAdditive_expression(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitAdditive_expression) {
			listener.exitAdditive_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitAdditive_expression) {
			return visitor.visitAdditive_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Additive_opContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_additive_op; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterAdditive_op) {
			listener.enterAdditive_op(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitAdditive_op) {
			listener.exitAdditive_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitAdditive_op) {
			return visitor.visitAdditive_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Multiplicative_expressionContext extends ParserRuleContext {
	public multiplicative_expression(): Multiplicative_expressionContext | undefined {
		return this.tryGetRuleContext(0, Multiplicative_expressionContext);
	}
	public multiplicative_op(): Multiplicative_opContext | undefined {
		return this.tryGetRuleContext(0, Multiplicative_opContext);
	}
	public unary_expression(): Unary_expressionContext {
		return this.getRuleContext(0, Unary_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_multiplicative_expression; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterMultiplicative_expression) {
			listener.enterMultiplicative_expression(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitMultiplicative_expression) {
			listener.exitMultiplicative_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitMultiplicative_expression) {
			return visitor.visitMultiplicative_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Multiplicative_opContext extends ParserRuleContext {
	public STAR(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.STAR, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.SLASH, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.PERCENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_multiplicative_op; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterMultiplicative_op) {
			listener.enterMultiplicative_op(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitMultiplicative_op) {
			listener.exitMultiplicative_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitMultiplicative_op) {
			return visitor.visitMultiplicative_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unary_expressionContext extends ParserRuleContext {
	public unary_op(): Unary_opContext | undefined {
		return this.tryGetRuleContext(0, Unary_opContext);
	}
	public unary_expression(): Unary_expressionContext | undefined {
		return this.tryGetRuleContext(0, Unary_expressionContext);
	}
	public primary_expression(): Primary_expressionContext | undefined {
		return this.tryGetRuleContext(0, Primary_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_unary_expression; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterUnary_expression) {
			listener.enterUnary_expression(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitUnary_expression) {
			listener.exitUnary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitUnary_expression) {
			return visitor.visitUnary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unary_opContext extends ParserRuleContext {
	public NOT(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.NOT, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_unary_op; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterUnary_op) {
			listener.enterUnary_op(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitUnary_op) {
			listener.exitUnary_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitUnary_op) {
			return visitor.visitUnary_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Primary_expressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_primary_expression; }
	public copyFrom(ctx: Primary_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class Primary_expression_attributeContext extends Primary_expressionContext {
	public primary_expression(): Primary_expressionContext {
		return this.getRuleContext(0, Primary_expressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(PinescriptParser.DOT, 0); }
	public name_load(): Name_loadContext {
		return this.getRuleContext(0, Name_loadContext);
	}
	constructor(ctx: Primary_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterPrimary_expression_attribute) {
			listener.enterPrimary_expression_attribute(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitPrimary_expression_attribute) {
			listener.exitPrimary_expression_attribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitPrimary_expression_attribute) {
			return visitor.visitPrimary_expression_attribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Primary_expression_callContext extends Primary_expressionContext {
	public primary_expression(): Primary_expressionContext {
		return this.getRuleContext(0, Primary_expressionContext);
	}
	public LPAR(): TerminalNode { return this.getToken(PinescriptParser.LPAR, 0); }
	public RPAR(): TerminalNode { return this.getToken(PinescriptParser.RPAR, 0); }
	public template_spec_suffix(): Template_spec_suffixContext | undefined {
		return this.tryGetRuleContext(0, Template_spec_suffixContext);
	}
	public argument_list(): Argument_listContext | undefined {
		return this.tryGetRuleContext(0, Argument_listContext);
	}
	constructor(ctx: Primary_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterPrimary_expression_call) {
			listener.enterPrimary_expression_call(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitPrimary_expression_call) {
			listener.exitPrimary_expression_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitPrimary_expression_call) {
			return visitor.visitPrimary_expression_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Primary_expression_subscriptContext extends Primary_expressionContext {
	public primary_expression(): Primary_expressionContext {
		return this.getRuleContext(0, Primary_expressionContext);
	}
	public LSQB(): TerminalNode { return this.getToken(PinescriptParser.LSQB, 0); }
	public subscript_slice(): Subscript_sliceContext {
		return this.getRuleContext(0, Subscript_sliceContext);
	}
	public RSQB(): TerminalNode { return this.getToken(PinescriptParser.RSQB, 0); }
	constructor(ctx: Primary_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterPrimary_expression_subscript) {
			listener.enterPrimary_expression_subscript(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitPrimary_expression_subscript) {
			listener.exitPrimary_expression_subscript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitPrimary_expression_subscript) {
			return visitor.visitPrimary_expression_subscript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Primary_expression_fallbackContext extends Primary_expressionContext {
	public atomic_expression(): Atomic_expressionContext {
		return this.getRuleContext(0, Atomic_expressionContext);
	}
	constructor(ctx: Primary_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterPrimary_expression_fallback) {
			listener.enterPrimary_expression_fallback(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitPrimary_expression_fallback) {
			listener.exitPrimary_expression_fallback(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitPrimary_expression_fallback) {
			return visitor.visitPrimary_expression_fallback(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Argument_listContext extends ParserRuleContext {
	public argument_definition(): Argument_definitionContext[];
	public argument_definition(i: number): Argument_definitionContext;
	public argument_definition(i?: number): Argument_definitionContext | Argument_definitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Argument_definitionContext);
		} else {
			return this.getRuleContext(i, Argument_definitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PinescriptParser.COMMA);
		} else {
			return this.getToken(PinescriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_argument_list; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterArgument_list) {
			listener.enterArgument_list(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitArgument_list) {
			listener.exitArgument_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitArgument_list) {
			return visitor.visitArgument_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Argument_definitionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public name_store(): Name_storeContext | undefined {
		return this.tryGetRuleContext(0, Name_storeContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.EQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_argument_definition; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterArgument_definition) {
			listener.enterArgument_definition(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitArgument_definition) {
			listener.exitArgument_definition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitArgument_definition) {
			return visitor.visitArgument_definition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Subscript_sliceContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PinescriptParser.COMMA);
		} else {
			return this.getToken(PinescriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_subscript_slice; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterSubscript_slice) {
			listener.enterSubscript_slice(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitSubscript_slice) {
			listener.exitSubscript_slice(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitSubscript_slice) {
			return visitor.visitSubscript_slice(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Atomic_expressionContext extends ParserRuleContext {
	public name_load(): Name_loadContext | undefined {
		return this.tryGetRuleContext(0, Name_loadContext);
	}
	public literal_expression(): Literal_expressionContext | undefined {
		return this.tryGetRuleContext(0, Literal_expressionContext);
	}
	public grouped_expression(): Grouped_expressionContext | undefined {
		return this.tryGetRuleContext(0, Grouped_expressionContext);
	}
	public tuple_expression(): Tuple_expressionContext | undefined {
		return this.tryGetRuleContext(0, Tuple_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_atomic_expression; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterAtomic_expression) {
			listener.enterAtomic_expression(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitAtomic_expression) {
			listener.exitAtomic_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitAtomic_expression) {
			return visitor.visitAtomic_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Literal_expressionContext extends ParserRuleContext {
	public literal_number(): Literal_numberContext | undefined {
		return this.tryGetRuleContext(0, Literal_numberContext);
	}
	public literal_string(): Literal_stringContext | undefined {
		return this.tryGetRuleContext(0, Literal_stringContext);
	}
	public literal_bool(): Literal_boolContext | undefined {
		return this.tryGetRuleContext(0, Literal_boolContext);
	}
	public literal_color(): Literal_colorContext | undefined {
		return this.tryGetRuleContext(0, Literal_colorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_literal_expression; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterLiteral_expression) {
			listener.enterLiteral_expression(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitLiteral_expression) {
			listener.exitLiteral_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitLiteral_expression) {
			return visitor.visitLiteral_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Literal_numberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(PinescriptParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_literal_number; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterLiteral_number) {
			listener.enterLiteral_number(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitLiteral_number) {
			listener.exitLiteral_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitLiteral_number) {
			return visitor.visitLiteral_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Literal_stringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(PinescriptParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_literal_string; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterLiteral_string) {
			listener.enterLiteral_string(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitLiteral_string) {
			listener.exitLiteral_string(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitLiteral_string) {
			return visitor.visitLiteral_string(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Literal_boolContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_literal_bool; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterLiteral_bool) {
			listener.enterLiteral_bool(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitLiteral_bool) {
			listener.exitLiteral_bool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitLiteral_bool) {
			return visitor.visitLiteral_bool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Literal_colorContext extends ParserRuleContext {
	public COLOR(): TerminalNode { return this.getToken(PinescriptParser.COLOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_literal_color; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterLiteral_color) {
			listener.enterLiteral_color(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitLiteral_color) {
			listener.exitLiteral_color(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitLiteral_color) {
			return visitor.visitLiteral_color(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Grouped_expressionContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(PinescriptParser.LPAR, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAR(): TerminalNode { return this.getToken(PinescriptParser.RPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_grouped_expression; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterGrouped_expression) {
			listener.enterGrouped_expression(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitGrouped_expression) {
			listener.exitGrouped_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitGrouped_expression) {
			return visitor.visitGrouped_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tuple_expressionContext extends ParserRuleContext {
	public LSQB(): TerminalNode { return this.getToken(PinescriptParser.LSQB, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RSQB(): TerminalNode { return this.getToken(PinescriptParser.RSQB, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PinescriptParser.COMMA);
		} else {
			return this.getToken(PinescriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_tuple_expression; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterTuple_expression) {
			listener.enterTuple_expression(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitTuple_expression) {
			listener.exitTuple_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitTuple_expression) {
			return visitor.visitTuple_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_statementContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(PinescriptParser.IMPORT, 0); }
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public SLASH(): TerminalNode[];
	public SLASH(i: number): TerminalNode;
	public SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PinescriptParser.SLASH);
		} else {
			return this.getToken(PinescriptParser.SLASH, i);
		}
	}
	public literal_number(): Literal_numberContext {
		return this.getRuleContext(0, Literal_numberContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_import_statement; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterImport_statement) {
			listener.enterImport_statement(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitImport_statement) {
			listener.exitImport_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitImport_statement) {
			return visitor.visitImport_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Break_statementContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(PinescriptParser.BREAK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_break_statement; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterBreak_statement) {
			listener.enterBreak_statement(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitBreak_statement) {
			listener.exitBreak_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitBreak_statement) {
			return visitor.visitBreak_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Continue_statementContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(PinescriptParser.CONTINUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_continue_statement; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterContinue_statement) {
			listener.enterContinue_statement(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitContinue_statement) {
			listener.exitContinue_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitContinue_statement) {
			return visitor.visitContinue_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Var_declaration_stmtContext extends ParserRuleContext {
	public name_store(): Name_storeContext {
		return this.getRuleContext(0, Name_storeContext);
	}
	public declaration_mode(): Declaration_modeContext | undefined {
		return this.tryGetRuleContext(0, Declaration_modeContext);
	}
	public type_specification(): Type_specificationContext | undefined {
		return this.tryGetRuleContext(0, Type_specificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_var_declaration_stmt; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterVar_declaration_stmt) {
			listener.enterVar_declaration_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitVar_declaration_stmt) {
			listener.exitVar_declaration_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitVar_declaration_stmt) {
			return visitor.visitVar_declaration_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tuple_declarationContext extends ParserRuleContext {
	public LSQB(): TerminalNode { return this.getToken(PinescriptParser.LSQB, 0); }
	public name_store(): Name_storeContext[];
	public name_store(i: number): Name_storeContext;
	public name_store(i?: number): Name_storeContext | Name_storeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Name_storeContext);
		} else {
			return this.getRuleContext(i, Name_storeContext);
		}
	}
	public RSQB(): TerminalNode { return this.getToken(PinescriptParser.RSQB, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PinescriptParser.COMMA);
		} else {
			return this.getToken(PinescriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_tuple_declaration; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterTuple_declaration) {
			listener.enterTuple_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitTuple_declaration) {
			listener.exitTuple_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitTuple_declaration) {
			return visitor.visitTuple_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declaration_modeContext extends ParserRuleContext {
	public VARIP(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.VARIP, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.VAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_declaration_mode; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterDeclaration_mode) {
			listener.enterDeclaration_mode(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitDeclaration_mode) {
			listener.exitDeclaration_mode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitDeclaration_mode) {
			return visitor.visitDeclaration_mode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_targetContext extends ParserRuleContext {
	public assignment_target_attribute(): Assignment_target_attributeContext | undefined {
		return this.tryGetRuleContext(0, Assignment_target_attributeContext);
	}
	public assignment_target_subscript(): Assignment_target_subscriptContext | undefined {
		return this.tryGetRuleContext(0, Assignment_target_subscriptContext);
	}
	public assignment_target_name(): Assignment_target_nameContext | undefined {
		return this.tryGetRuleContext(0, Assignment_target_nameContext);
	}
	public assignment_target_group(): Assignment_target_groupContext | undefined {
		return this.tryGetRuleContext(0, Assignment_target_groupContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_assignment_target; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterAssignment_target) {
			listener.enterAssignment_target(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitAssignment_target) {
			listener.exitAssignment_target(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitAssignment_target) {
			return visitor.visitAssignment_target(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_target_attributeContext extends ParserRuleContext {
	public primary_expression(): Primary_expressionContext {
		return this.getRuleContext(0, Primary_expressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(PinescriptParser.DOT, 0); }
	public name_store(): Name_storeContext {
		return this.getRuleContext(0, Name_storeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_assignment_target_attribute; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterAssignment_target_attribute) {
			listener.enterAssignment_target_attribute(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitAssignment_target_attribute) {
			listener.exitAssignment_target_attribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitAssignment_target_attribute) {
			return visitor.visitAssignment_target_attribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_target_subscriptContext extends ParserRuleContext {
	public primary_expression(): Primary_expressionContext {
		return this.getRuleContext(0, Primary_expressionContext);
	}
	public LSQB(): TerminalNode { return this.getToken(PinescriptParser.LSQB, 0); }
	public subscript_slice(): Subscript_sliceContext {
		return this.getRuleContext(0, Subscript_sliceContext);
	}
	public RSQB(): TerminalNode { return this.getToken(PinescriptParser.RSQB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_assignment_target_subscript; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterAssignment_target_subscript) {
			listener.enterAssignment_target_subscript(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitAssignment_target_subscript) {
			listener.exitAssignment_target_subscript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitAssignment_target_subscript) {
			return visitor.visitAssignment_target_subscript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_target_nameContext extends ParserRuleContext {
	public name_store(): Name_storeContext {
		return this.getRuleContext(0, Name_storeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_assignment_target_name; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterAssignment_target_name) {
			listener.enterAssignment_target_name(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitAssignment_target_name) {
			listener.exitAssignment_target_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitAssignment_target_name) {
			return visitor.visitAssignment_target_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_target_groupContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(PinescriptParser.LPAR, 0); }
	public assignment_target(): Assignment_targetContext {
		return this.getRuleContext(0, Assignment_targetContext);
	}
	public RPAR(): TerminalNode { return this.getToken(PinescriptParser.RPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_assignment_target_group; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterAssignment_target_group) {
			listener.enterAssignment_target_group(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitAssignment_target_group) {
			listener.exitAssignment_target_group(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitAssignment_target_group) {
			return visitor.visitAssignment_target_group(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Augassign_opContext extends ParserRuleContext {
	public STAREQUAL(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.STAREQUAL, 0); }
	public SLASHEQUAL(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.SLASHEQUAL, 0); }
	public PERCENTEQUAL(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.PERCENTEQUAL, 0); }
	public PLUSEQUAL(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.PLUSEQUAL, 0); }
	public MINEQUAL(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.MINEQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_augassign_op; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterAugassign_op) {
			listener.enterAugassign_op(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitAugassign_op) {
			listener.exitAugassign_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitAugassign_op) {
			return visitor.visitAugassign_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_specificationContext extends ParserRuleContext {
	public attributed_type_name(): Attributed_type_nameContext {
		return this.getRuleContext(0, Attributed_type_nameContext);
	}
	public type_qualifier(): Type_qualifierContext | undefined {
		return this.tryGetRuleContext(0, Type_qualifierContext);
	}
	public template_spec_suffix(): Template_spec_suffixContext | undefined {
		return this.tryGetRuleContext(0, Template_spec_suffixContext);
	}
	public array_type_suffix(): Array_type_suffixContext | undefined {
		return this.tryGetRuleContext(0, Array_type_suffixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_type_specification; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterType_specification) {
			listener.enterType_specification(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitType_specification) {
			listener.exitType_specification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitType_specification) {
			return visitor.visitType_specification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_qualifierContext extends ParserRuleContext {
	public CONST(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.CONST, 0); }
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.INPUT, 0); }
	public SIMPLE(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.SIMPLE, 0); }
	public SERIES(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.SERIES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_type_qualifier; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterType_qualifier) {
			listener.enterType_qualifier(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitType_qualifier) {
			listener.exitType_qualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitType_qualifier) {
			return visitor.visitType_qualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attributed_type_nameContext extends ParserRuleContext {
	public name_load(): Name_loadContext[];
	public name_load(i: number): Name_loadContext;
	public name_load(i?: number): Name_loadContext | Name_loadContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Name_loadContext);
		} else {
			return this.getRuleContext(i, Name_loadContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PinescriptParser.DOT);
		} else {
			return this.getToken(PinescriptParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_attributed_type_name; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterAttributed_type_name) {
			listener.enterAttributed_type_name(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitAttributed_type_name) {
			listener.exitAttributed_type_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitAttributed_type_name) {
			return visitor.visitAttributed_type_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Template_spec_suffixContext extends ParserRuleContext {
	public LESS(): TerminalNode { return this.getToken(PinescriptParser.LESS, 0); }
	public GREATER(): TerminalNode { return this.getToken(PinescriptParser.GREATER, 0); }
	public type_argument_list(): Type_argument_listContext | undefined {
		return this.tryGetRuleContext(0, Type_argument_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_template_spec_suffix; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterTemplate_spec_suffix) {
			listener.enterTemplate_spec_suffix(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitTemplate_spec_suffix) {
			listener.exitTemplate_spec_suffix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitTemplate_spec_suffix) {
			return visitor.visitTemplate_spec_suffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_type_suffixContext extends ParserRuleContext {
	public LSQB(): TerminalNode { return this.getToken(PinescriptParser.LSQB, 0); }
	public RSQB(): TerminalNode { return this.getToken(PinescriptParser.RSQB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_array_type_suffix; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterArray_type_suffix) {
			listener.enterArray_type_suffix(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitArray_type_suffix) {
			listener.exitArray_type_suffix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitArray_type_suffix) {
			return visitor.visitArray_type_suffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_argument_listContext extends ParserRuleContext {
	public type_specification(): Type_specificationContext[];
	public type_specification(i: number): Type_specificationContext;
	public type_specification(i?: number): Type_specificationContext | Type_specificationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_specificationContext);
		} else {
			return this.getRuleContext(i, Type_specificationContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PinescriptParser.COMMA);
		} else {
			return this.getToken(PinescriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_type_argument_list; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterType_argument_list) {
			listener.enterType_argument_list(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitType_argument_list) {
			listener.exitType_argument_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitType_argument_list) {
			return visitor.visitType_argument_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.NAME, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.TYPE, 0); }
	public METHOD(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.METHOD, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.CONST, 0); }
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.INPUT, 0); }
	public SIMPLE(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.SIMPLE, 0); }
	public SERIES(): TerminalNode | undefined { return this.tryGetToken(PinescriptParser.SERIES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_name; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Name_loadContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_name_load; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterName_load) {
			listener.enterName_load(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitName_load) {
			listener.exitName_load(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitName_load) {
			return visitor.visitName_load(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Name_storeContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_name_store; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterName_store) {
			listener.enterName_store(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitName_store) {
			listener.exitName_store(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitName_store) {
			return visitor.visitName_store(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentsContext extends ParserRuleContext {
	public comment(): CommentContext[];
	public comment(i: number): CommentContext;
	public comment(i?: number): CommentContext | CommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentContext);
		} else {
			return this.getRuleContext(i, CommentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_comments; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterComments) {
			listener.enterComments(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitComments) {
			listener.exitComments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitComments) {
			return visitor.visitComments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(PinescriptParser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PinescriptParser.RULE_comment; }
	// @Override
	public enterRule(listener: PinescriptParserListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: PinescriptParserListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PinescriptParserVisitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


