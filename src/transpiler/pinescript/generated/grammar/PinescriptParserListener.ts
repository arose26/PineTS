// Generated from grammar/PinescriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { Primary_expression_attributeContext } from "./PinescriptParser";
import { Primary_expression_callContext } from "./PinescriptParser";
import { Primary_expression_subscriptContext } from "./PinescriptParser";
import { Primary_expression_fallbackContext } from "./PinescriptParser";
import { StartContext } from "./PinescriptParser";
import { Start_scriptContext } from "./PinescriptParser";
import { Start_expressionContext } from "./PinescriptParser";
import { Start_commentsContext } from "./PinescriptParser";
import { StatementsContext } from "./PinescriptParser";
import { StatementContext } from "./PinescriptParser";
import { Compound_statement_with_blockContext } from "./PinescriptParser";
import { Simple_statementContext } from "./PinescriptParser";
import { Compound_assignmentContext } from "./PinescriptParser";
import { Compound_variable_initializationContext } from "./PinescriptParser";
import { Compound_name_initializationContext } from "./PinescriptParser";
import { Compound_tuple_initializationContext } from "./PinescriptParser";
import { Compound_reassignmentContext } from "./PinescriptParser";
import { Compound_augassignmentContext } from "./PinescriptParser";
import { Function_declarationContext } from "./PinescriptParser";
import { Parameter_listContext } from "./PinescriptParser";
import { Parameter_definitionContext } from "./PinescriptParser";
import { Type_declarationContext } from "./PinescriptParser";
import { Field_definitionsContext } from "./PinescriptParser";
import { Field_definitionContext } from "./PinescriptParser";
import { StructureContext } from "./PinescriptParser";
import { Structure_statementContext } from "./PinescriptParser";
import { Structure_expressionContext } from "./PinescriptParser";
import { If_structureContext } from "./PinescriptParser";
import { If_structure_elifContext } from "./PinescriptParser";
import { If_structure_elseContext } from "./PinescriptParser";
import { Elif_structureContext } from "./PinescriptParser";
import { Elif_structure_elifContext } from "./PinescriptParser";
import { Elif_structure_elseContext } from "./PinescriptParser";
import { Else_blockContext } from "./PinescriptParser";
import { For_structureContext } from "./PinescriptParser";
import { For_structure_toContext } from "./PinescriptParser";
import { For_structure_inContext } from "./PinescriptParser";
import { For_iteratorContext } from "./PinescriptParser";
import { While_structureContext } from "./PinescriptParser";
import { Switch_structureContext } from "./PinescriptParser";
import { Switch_casesContext } from "./PinescriptParser";
import { Switch_pattern_caseContext } from "./PinescriptParser";
import { Switch_default_caseContext } from "./PinescriptParser";
import { Local_blockContext } from "./PinescriptParser";
import { ExpressionContext } from "./PinescriptParser";
import { Expression_statementContext } from "./PinescriptParser";
import { Conditional_expressionContext } from "./PinescriptParser";
import { Conditional_expression_ruleContext } from "./PinescriptParser";
import { Disjunction_expressionContext } from "./PinescriptParser";
import { Disjunction_expression_ruleContext } from "./PinescriptParser";
import { Conjunction_expressionContext } from "./PinescriptParser";
import { Conjunction_expression_ruleContext } from "./PinescriptParser";
import { Equality_expressionContext } from "./PinescriptParser";
import { Equality_expression_ruleContext } from "./PinescriptParser";
import { Equality_trailing_pairContext } from "./PinescriptParser";
import { Equal_trailing_pairContext } from "./PinescriptParser";
import { Not_equal_trailing_pairContext } from "./PinescriptParser";
import { Inequality_expressionContext } from "./PinescriptParser";
import { Inequality_expression_ruleContext } from "./PinescriptParser";
import { Inequality_trailing_pairContext } from "./PinescriptParser";
import { Less_than_equal_trailing_pairContext } from "./PinescriptParser";
import { Less_than_trailing_pairContext } from "./PinescriptParser";
import { Greater_than_equal_trailing_pairContext } from "./PinescriptParser";
import { Greater_than_trailing_pairContext } from "./PinescriptParser";
import { Additive_expressionContext } from "./PinescriptParser";
import { Additive_opContext } from "./PinescriptParser";
import { Multiplicative_expressionContext } from "./PinescriptParser";
import { Multiplicative_opContext } from "./PinescriptParser";
import { Unary_expressionContext } from "./PinescriptParser";
import { Unary_opContext } from "./PinescriptParser";
import { Primary_expressionContext } from "./PinescriptParser";
import { Argument_listContext } from "./PinescriptParser";
import { Argument_definitionContext } from "./PinescriptParser";
import { Subscript_sliceContext } from "./PinescriptParser";
import { Atomic_expressionContext } from "./PinescriptParser";
import { Literal_expressionContext } from "./PinescriptParser";
import { Literal_numberContext } from "./PinescriptParser";
import { Literal_stringContext } from "./PinescriptParser";
import { Literal_boolContext } from "./PinescriptParser";
import { Literal_colorContext } from "./PinescriptParser";
import { Grouped_expressionContext } from "./PinescriptParser";
import { Tuple_expressionContext } from "./PinescriptParser";
import { Import_statementContext } from "./PinescriptParser";
import { Break_statementContext } from "./PinescriptParser";
import { Continue_statementContext } from "./PinescriptParser";
import { Var_declaration_stmtContext } from "./PinescriptParser";
import { Tuple_declarationContext } from "./PinescriptParser";
import { Declaration_modeContext } from "./PinescriptParser";
import { Assignment_targetContext } from "./PinescriptParser";
import { Assignment_target_attributeContext } from "./PinescriptParser";
import { Assignment_target_subscriptContext } from "./PinescriptParser";
import { Assignment_target_nameContext } from "./PinescriptParser";
import { Assignment_target_groupContext } from "./PinescriptParser";
import { Augassign_opContext } from "./PinescriptParser";
import { Type_specificationContext } from "./PinescriptParser";
import { Type_qualifierContext } from "./PinescriptParser";
import { Attributed_type_nameContext } from "./PinescriptParser";
import { Template_spec_suffixContext } from "./PinescriptParser";
import { Array_type_suffixContext } from "./PinescriptParser";
import { Type_argument_listContext } from "./PinescriptParser";
import { NameContext } from "./PinescriptParser";
import { Name_loadContext } from "./PinescriptParser";
import { Name_storeContext } from "./PinescriptParser";
import { CommentsContext } from "./PinescriptParser";
import { CommentContext } from "./PinescriptParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `PinescriptParser`.
 */
export interface PinescriptParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `primary_expression_attribute`
	 * labeled alternative in `PinescriptParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	enterPrimary_expression_attribute?: (ctx: Primary_expression_attributeContext) => void;
	/**
	 * Exit a parse tree produced by the `primary_expression_attribute`
	 * labeled alternative in `PinescriptParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	exitPrimary_expression_attribute?: (ctx: Primary_expression_attributeContext) => void;

	/**
	 * Enter a parse tree produced by the `primary_expression_call`
	 * labeled alternative in `PinescriptParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	enterPrimary_expression_call?: (ctx: Primary_expression_callContext) => void;
	/**
	 * Exit a parse tree produced by the `primary_expression_call`
	 * labeled alternative in `PinescriptParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	exitPrimary_expression_call?: (ctx: Primary_expression_callContext) => void;

	/**
	 * Enter a parse tree produced by the `primary_expression_subscript`
	 * labeled alternative in `PinescriptParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	enterPrimary_expression_subscript?: (ctx: Primary_expression_subscriptContext) => void;
	/**
	 * Exit a parse tree produced by the `primary_expression_subscript`
	 * labeled alternative in `PinescriptParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	exitPrimary_expression_subscript?: (ctx: Primary_expression_subscriptContext) => void;

	/**
	 * Enter a parse tree produced by the `primary_expression_fallback`
	 * labeled alternative in `PinescriptParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	enterPrimary_expression_fallback?: (ctx: Primary_expression_fallbackContext) => void;
	/**
	 * Exit a parse tree produced by the `primary_expression_fallback`
	 * labeled alternative in `PinescriptParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	exitPrimary_expression_fallback?: (ctx: Primary_expression_fallbackContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.start_script`.
	 * @param ctx the parse tree
	 */
	enterStart_script?: (ctx: Start_scriptContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.start_script`.
	 * @param ctx the parse tree
	 */
	exitStart_script?: (ctx: Start_scriptContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.start_expression`.
	 * @param ctx the parse tree
	 */
	enterStart_expression?: (ctx: Start_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.start_expression`.
	 * @param ctx the parse tree
	 */
	exitStart_expression?: (ctx: Start_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.start_comments`.
	 * @param ctx the parse tree
	 */
	enterStart_comments?: (ctx: Start_commentsContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.start_comments`.
	 * @param ctx the parse tree
	 */
	exitStart_comments?: (ctx: Start_commentsContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatements?: (ctx: StatementsContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatements?: (ctx: StatementsContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.compound_statement_with_block`.
	 * @param ctx the parse tree
	 */
	enterCompound_statement_with_block?: (ctx: Compound_statement_with_blockContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.compound_statement_with_block`.
	 * @param ctx the parse tree
	 */
	exitCompound_statement_with_block?: (ctx: Compound_statement_with_blockContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.simple_statement`.
	 * @param ctx the parse tree
	 */
	enterSimple_statement?: (ctx: Simple_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.simple_statement`.
	 * @param ctx the parse tree
	 */
	exitSimple_statement?: (ctx: Simple_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.compound_assignment`.
	 * @param ctx the parse tree
	 */
	enterCompound_assignment?: (ctx: Compound_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.compound_assignment`.
	 * @param ctx the parse tree
	 */
	exitCompound_assignment?: (ctx: Compound_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.compound_variable_initialization`.
	 * @param ctx the parse tree
	 */
	enterCompound_variable_initialization?: (ctx: Compound_variable_initializationContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.compound_variable_initialization`.
	 * @param ctx the parse tree
	 */
	exitCompound_variable_initialization?: (ctx: Compound_variable_initializationContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.compound_name_initialization`.
	 * @param ctx the parse tree
	 */
	enterCompound_name_initialization?: (ctx: Compound_name_initializationContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.compound_name_initialization`.
	 * @param ctx the parse tree
	 */
	exitCompound_name_initialization?: (ctx: Compound_name_initializationContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.compound_tuple_initialization`.
	 * @param ctx the parse tree
	 */
	enterCompound_tuple_initialization?: (ctx: Compound_tuple_initializationContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.compound_tuple_initialization`.
	 * @param ctx the parse tree
	 */
	exitCompound_tuple_initialization?: (ctx: Compound_tuple_initializationContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.compound_reassignment`.
	 * @param ctx the parse tree
	 */
	enterCompound_reassignment?: (ctx: Compound_reassignmentContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.compound_reassignment`.
	 * @param ctx the parse tree
	 */
	exitCompound_reassignment?: (ctx: Compound_reassignmentContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.compound_augassignment`.
	 * @param ctx the parse tree
	 */
	enterCompound_augassignment?: (ctx: Compound_augassignmentContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.compound_augassignment`.
	 * @param ctx the parse tree
	 */
	exitCompound_augassignment?: (ctx: Compound_augassignmentContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.function_declaration`.
	 * @param ctx the parse tree
	 */
	enterFunction_declaration?: (ctx: Function_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.function_declaration`.
	 * @param ctx the parse tree
	 */
	exitFunction_declaration?: (ctx: Function_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.parameter_list`.
	 * @param ctx the parse tree
	 */
	enterParameter_list?: (ctx: Parameter_listContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.parameter_list`.
	 * @param ctx the parse tree
	 */
	exitParameter_list?: (ctx: Parameter_listContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.parameter_definition`.
	 * @param ctx the parse tree
	 */
	enterParameter_definition?: (ctx: Parameter_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.parameter_definition`.
	 * @param ctx the parse tree
	 */
	exitParameter_definition?: (ctx: Parameter_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.type_declaration`.
	 * @param ctx the parse tree
	 */
	enterType_declaration?: (ctx: Type_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.type_declaration`.
	 * @param ctx the parse tree
	 */
	exitType_declaration?: (ctx: Type_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.field_definitions`.
	 * @param ctx the parse tree
	 */
	enterField_definitions?: (ctx: Field_definitionsContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.field_definitions`.
	 * @param ctx the parse tree
	 */
	exitField_definitions?: (ctx: Field_definitionsContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.field_definition`.
	 * @param ctx the parse tree
	 */
	enterField_definition?: (ctx: Field_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.field_definition`.
	 * @param ctx the parse tree
	 */
	exitField_definition?: (ctx: Field_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.structure`.
	 * @param ctx the parse tree
	 */
	enterStructure?: (ctx: StructureContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.structure`.
	 * @param ctx the parse tree
	 */
	exitStructure?: (ctx: StructureContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.structure_statement`.
	 * @param ctx the parse tree
	 */
	enterStructure_statement?: (ctx: Structure_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.structure_statement`.
	 * @param ctx the parse tree
	 */
	exitStructure_statement?: (ctx: Structure_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.structure_expression`.
	 * @param ctx the parse tree
	 */
	enterStructure_expression?: (ctx: Structure_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.structure_expression`.
	 * @param ctx the parse tree
	 */
	exitStructure_expression?: (ctx: Structure_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.if_structure`.
	 * @param ctx the parse tree
	 */
	enterIf_structure?: (ctx: If_structureContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.if_structure`.
	 * @param ctx the parse tree
	 */
	exitIf_structure?: (ctx: If_structureContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.if_structure_elif`.
	 * @param ctx the parse tree
	 */
	enterIf_structure_elif?: (ctx: If_structure_elifContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.if_structure_elif`.
	 * @param ctx the parse tree
	 */
	exitIf_structure_elif?: (ctx: If_structure_elifContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.if_structure_else`.
	 * @param ctx the parse tree
	 */
	enterIf_structure_else?: (ctx: If_structure_elseContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.if_structure_else`.
	 * @param ctx the parse tree
	 */
	exitIf_structure_else?: (ctx: If_structure_elseContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.elif_structure`.
	 * @param ctx the parse tree
	 */
	enterElif_structure?: (ctx: Elif_structureContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.elif_structure`.
	 * @param ctx the parse tree
	 */
	exitElif_structure?: (ctx: Elif_structureContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.elif_structure_elif`.
	 * @param ctx the parse tree
	 */
	enterElif_structure_elif?: (ctx: Elif_structure_elifContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.elif_structure_elif`.
	 * @param ctx the parse tree
	 */
	exitElif_structure_elif?: (ctx: Elif_structure_elifContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.elif_structure_else`.
	 * @param ctx the parse tree
	 */
	enterElif_structure_else?: (ctx: Elif_structure_elseContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.elif_structure_else`.
	 * @param ctx the parse tree
	 */
	exitElif_structure_else?: (ctx: Elif_structure_elseContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.else_block`.
	 * @param ctx the parse tree
	 */
	enterElse_block?: (ctx: Else_blockContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.else_block`.
	 * @param ctx the parse tree
	 */
	exitElse_block?: (ctx: Else_blockContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.for_structure`.
	 * @param ctx the parse tree
	 */
	enterFor_structure?: (ctx: For_structureContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.for_structure`.
	 * @param ctx the parse tree
	 */
	exitFor_structure?: (ctx: For_structureContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.for_structure_to`.
	 * @param ctx the parse tree
	 */
	enterFor_structure_to?: (ctx: For_structure_toContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.for_structure_to`.
	 * @param ctx the parse tree
	 */
	exitFor_structure_to?: (ctx: For_structure_toContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.for_structure_in`.
	 * @param ctx the parse tree
	 */
	enterFor_structure_in?: (ctx: For_structure_inContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.for_structure_in`.
	 * @param ctx the parse tree
	 */
	exitFor_structure_in?: (ctx: For_structure_inContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.for_iterator`.
	 * @param ctx the parse tree
	 */
	enterFor_iterator?: (ctx: For_iteratorContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.for_iterator`.
	 * @param ctx the parse tree
	 */
	exitFor_iterator?: (ctx: For_iteratorContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.while_structure`.
	 * @param ctx the parse tree
	 */
	enterWhile_structure?: (ctx: While_structureContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.while_structure`.
	 * @param ctx the parse tree
	 */
	exitWhile_structure?: (ctx: While_structureContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.switch_structure`.
	 * @param ctx the parse tree
	 */
	enterSwitch_structure?: (ctx: Switch_structureContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.switch_structure`.
	 * @param ctx the parse tree
	 */
	exitSwitch_structure?: (ctx: Switch_structureContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.switch_cases`.
	 * @param ctx the parse tree
	 */
	enterSwitch_cases?: (ctx: Switch_casesContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.switch_cases`.
	 * @param ctx the parse tree
	 */
	exitSwitch_cases?: (ctx: Switch_casesContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.switch_pattern_case`.
	 * @param ctx the parse tree
	 */
	enterSwitch_pattern_case?: (ctx: Switch_pattern_caseContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.switch_pattern_case`.
	 * @param ctx the parse tree
	 */
	exitSwitch_pattern_case?: (ctx: Switch_pattern_caseContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.switch_default_case`.
	 * @param ctx the parse tree
	 */
	enterSwitch_default_case?: (ctx: Switch_default_caseContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.switch_default_case`.
	 * @param ctx the parse tree
	 */
	exitSwitch_default_case?: (ctx: Switch_default_caseContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.local_block`.
	 * @param ctx the parse tree
	 */
	enterLocal_block?: (ctx: Local_blockContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.local_block`.
	 * @param ctx the parse tree
	 */
	exitLocal_block?: (ctx: Local_blockContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.expression_statement`.
	 * @param ctx the parse tree
	 */
	enterExpression_statement?: (ctx: Expression_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.expression_statement`.
	 * @param ctx the parse tree
	 */
	exitExpression_statement?: (ctx: Expression_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.conditional_expression`.
	 * @param ctx the parse tree
	 */
	enterConditional_expression?: (ctx: Conditional_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.conditional_expression`.
	 * @param ctx the parse tree
	 */
	exitConditional_expression?: (ctx: Conditional_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.conditional_expression_rule`.
	 * @param ctx the parse tree
	 */
	enterConditional_expression_rule?: (ctx: Conditional_expression_ruleContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.conditional_expression_rule`.
	 * @param ctx the parse tree
	 */
	exitConditional_expression_rule?: (ctx: Conditional_expression_ruleContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.disjunction_expression`.
	 * @param ctx the parse tree
	 */
	enterDisjunction_expression?: (ctx: Disjunction_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.disjunction_expression`.
	 * @param ctx the parse tree
	 */
	exitDisjunction_expression?: (ctx: Disjunction_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.disjunction_expression_rule`.
	 * @param ctx the parse tree
	 */
	enterDisjunction_expression_rule?: (ctx: Disjunction_expression_ruleContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.disjunction_expression_rule`.
	 * @param ctx the parse tree
	 */
	exitDisjunction_expression_rule?: (ctx: Disjunction_expression_ruleContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.conjunction_expression`.
	 * @param ctx the parse tree
	 */
	enterConjunction_expression?: (ctx: Conjunction_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.conjunction_expression`.
	 * @param ctx the parse tree
	 */
	exitConjunction_expression?: (ctx: Conjunction_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.conjunction_expression_rule`.
	 * @param ctx the parse tree
	 */
	enterConjunction_expression_rule?: (ctx: Conjunction_expression_ruleContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.conjunction_expression_rule`.
	 * @param ctx the parse tree
	 */
	exitConjunction_expression_rule?: (ctx: Conjunction_expression_ruleContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.equality_expression`.
	 * @param ctx the parse tree
	 */
	enterEquality_expression?: (ctx: Equality_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.equality_expression`.
	 * @param ctx the parse tree
	 */
	exitEquality_expression?: (ctx: Equality_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.equality_expression_rule`.
	 * @param ctx the parse tree
	 */
	enterEquality_expression_rule?: (ctx: Equality_expression_ruleContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.equality_expression_rule`.
	 * @param ctx the parse tree
	 */
	exitEquality_expression_rule?: (ctx: Equality_expression_ruleContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.equality_trailing_pair`.
	 * @param ctx the parse tree
	 */
	enterEquality_trailing_pair?: (ctx: Equality_trailing_pairContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.equality_trailing_pair`.
	 * @param ctx the parse tree
	 */
	exitEquality_trailing_pair?: (ctx: Equality_trailing_pairContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.equal_trailing_pair`.
	 * @param ctx the parse tree
	 */
	enterEqual_trailing_pair?: (ctx: Equal_trailing_pairContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.equal_trailing_pair`.
	 * @param ctx the parse tree
	 */
	exitEqual_trailing_pair?: (ctx: Equal_trailing_pairContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.not_equal_trailing_pair`.
	 * @param ctx the parse tree
	 */
	enterNot_equal_trailing_pair?: (ctx: Not_equal_trailing_pairContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.not_equal_trailing_pair`.
	 * @param ctx the parse tree
	 */
	exitNot_equal_trailing_pair?: (ctx: Not_equal_trailing_pairContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.inequality_expression`.
	 * @param ctx the parse tree
	 */
	enterInequality_expression?: (ctx: Inequality_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.inequality_expression`.
	 * @param ctx the parse tree
	 */
	exitInequality_expression?: (ctx: Inequality_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.inequality_expression_rule`.
	 * @param ctx the parse tree
	 */
	enterInequality_expression_rule?: (ctx: Inequality_expression_ruleContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.inequality_expression_rule`.
	 * @param ctx the parse tree
	 */
	exitInequality_expression_rule?: (ctx: Inequality_expression_ruleContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.inequality_trailing_pair`.
	 * @param ctx the parse tree
	 */
	enterInequality_trailing_pair?: (ctx: Inequality_trailing_pairContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.inequality_trailing_pair`.
	 * @param ctx the parse tree
	 */
	exitInequality_trailing_pair?: (ctx: Inequality_trailing_pairContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.less_than_equal_trailing_pair`.
	 * @param ctx the parse tree
	 */
	enterLess_than_equal_trailing_pair?: (ctx: Less_than_equal_trailing_pairContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.less_than_equal_trailing_pair`.
	 * @param ctx the parse tree
	 */
	exitLess_than_equal_trailing_pair?: (ctx: Less_than_equal_trailing_pairContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.less_than_trailing_pair`.
	 * @param ctx the parse tree
	 */
	enterLess_than_trailing_pair?: (ctx: Less_than_trailing_pairContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.less_than_trailing_pair`.
	 * @param ctx the parse tree
	 */
	exitLess_than_trailing_pair?: (ctx: Less_than_trailing_pairContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.greater_than_equal_trailing_pair`.
	 * @param ctx the parse tree
	 */
	enterGreater_than_equal_trailing_pair?: (ctx: Greater_than_equal_trailing_pairContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.greater_than_equal_trailing_pair`.
	 * @param ctx the parse tree
	 */
	exitGreater_than_equal_trailing_pair?: (ctx: Greater_than_equal_trailing_pairContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.greater_than_trailing_pair`.
	 * @param ctx the parse tree
	 */
	enterGreater_than_trailing_pair?: (ctx: Greater_than_trailing_pairContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.greater_than_trailing_pair`.
	 * @param ctx the parse tree
	 */
	exitGreater_than_trailing_pair?: (ctx: Greater_than_trailing_pairContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	enterAdditive_expression?: (ctx: Additive_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	exitAdditive_expression?: (ctx: Additive_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.additive_op`.
	 * @param ctx the parse tree
	 */
	enterAdditive_op?: (ctx: Additive_opContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.additive_op`.
	 * @param ctx the parse tree
	 */
	exitAdditive_op?: (ctx: Additive_opContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.multiplicative_op`.
	 * @param ctx the parse tree
	 */
	enterMultiplicative_op?: (ctx: Multiplicative_opContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.multiplicative_op`.
	 * @param ctx the parse tree
	 */
	exitMultiplicative_op?: (ctx: Multiplicative_opContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	enterUnary_expression?: (ctx: Unary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	exitUnary_expression?: (ctx: Unary_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.unary_op`.
	 * @param ctx the parse tree
	 */
	enterUnary_op?: (ctx: Unary_opContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.unary_op`.
	 * @param ctx the parse tree
	 */
	exitUnary_op?: (ctx: Unary_opContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	enterPrimary_expression?: (ctx: Primary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	exitPrimary_expression?: (ctx: Primary_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.argument_list`.
	 * @param ctx the parse tree
	 */
	enterArgument_list?: (ctx: Argument_listContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.argument_list`.
	 * @param ctx the parse tree
	 */
	exitArgument_list?: (ctx: Argument_listContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.argument_definition`.
	 * @param ctx the parse tree
	 */
	enterArgument_definition?: (ctx: Argument_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.argument_definition`.
	 * @param ctx the parse tree
	 */
	exitArgument_definition?: (ctx: Argument_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.subscript_slice`.
	 * @param ctx the parse tree
	 */
	enterSubscript_slice?: (ctx: Subscript_sliceContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.subscript_slice`.
	 * @param ctx the parse tree
	 */
	exitSubscript_slice?: (ctx: Subscript_sliceContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.atomic_expression`.
	 * @param ctx the parse tree
	 */
	enterAtomic_expression?: (ctx: Atomic_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.atomic_expression`.
	 * @param ctx the parse tree
	 */
	exitAtomic_expression?: (ctx: Atomic_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	enterLiteral_expression?: (ctx: Literal_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	exitLiteral_expression?: (ctx: Literal_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.literal_number`.
	 * @param ctx the parse tree
	 */
	enterLiteral_number?: (ctx: Literal_numberContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.literal_number`.
	 * @param ctx the parse tree
	 */
	exitLiteral_number?: (ctx: Literal_numberContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.literal_string`.
	 * @param ctx the parse tree
	 */
	enterLiteral_string?: (ctx: Literal_stringContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.literal_string`.
	 * @param ctx the parse tree
	 */
	exitLiteral_string?: (ctx: Literal_stringContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.literal_bool`.
	 * @param ctx the parse tree
	 */
	enterLiteral_bool?: (ctx: Literal_boolContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.literal_bool`.
	 * @param ctx the parse tree
	 */
	exitLiteral_bool?: (ctx: Literal_boolContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.literal_color`.
	 * @param ctx the parse tree
	 */
	enterLiteral_color?: (ctx: Literal_colorContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.literal_color`.
	 * @param ctx the parse tree
	 */
	exitLiteral_color?: (ctx: Literal_colorContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.grouped_expression`.
	 * @param ctx the parse tree
	 */
	enterGrouped_expression?: (ctx: Grouped_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.grouped_expression`.
	 * @param ctx the parse tree
	 */
	exitGrouped_expression?: (ctx: Grouped_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.tuple_expression`.
	 * @param ctx the parse tree
	 */
	enterTuple_expression?: (ctx: Tuple_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.tuple_expression`.
	 * @param ctx the parse tree
	 */
	exitTuple_expression?: (ctx: Tuple_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.import_statement`.
	 * @param ctx the parse tree
	 */
	enterImport_statement?: (ctx: Import_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.import_statement`.
	 * @param ctx the parse tree
	 */
	exitImport_statement?: (ctx: Import_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.break_statement`.
	 * @param ctx the parse tree
	 */
	enterBreak_statement?: (ctx: Break_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.break_statement`.
	 * @param ctx the parse tree
	 */
	exitBreak_statement?: (ctx: Break_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.continue_statement`.
	 * @param ctx the parse tree
	 */
	enterContinue_statement?: (ctx: Continue_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.continue_statement`.
	 * @param ctx the parse tree
	 */
	exitContinue_statement?: (ctx: Continue_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.var_declaration_stmt`.
	 * @param ctx the parse tree
	 */
	enterVar_declaration_stmt?: (ctx: Var_declaration_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.var_declaration_stmt`.
	 * @param ctx the parse tree
	 */
	exitVar_declaration_stmt?: (ctx: Var_declaration_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.tuple_declaration`.
	 * @param ctx the parse tree
	 */
	enterTuple_declaration?: (ctx: Tuple_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.tuple_declaration`.
	 * @param ctx the parse tree
	 */
	exitTuple_declaration?: (ctx: Tuple_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.declaration_mode`.
	 * @param ctx the parse tree
	 */
	enterDeclaration_mode?: (ctx: Declaration_modeContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.declaration_mode`.
	 * @param ctx the parse tree
	 */
	exitDeclaration_mode?: (ctx: Declaration_modeContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.assignment_target`.
	 * @param ctx the parse tree
	 */
	enterAssignment_target?: (ctx: Assignment_targetContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.assignment_target`.
	 * @param ctx the parse tree
	 */
	exitAssignment_target?: (ctx: Assignment_targetContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.assignment_target_attribute`.
	 * @param ctx the parse tree
	 */
	enterAssignment_target_attribute?: (ctx: Assignment_target_attributeContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.assignment_target_attribute`.
	 * @param ctx the parse tree
	 */
	exitAssignment_target_attribute?: (ctx: Assignment_target_attributeContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.assignment_target_subscript`.
	 * @param ctx the parse tree
	 */
	enterAssignment_target_subscript?: (ctx: Assignment_target_subscriptContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.assignment_target_subscript`.
	 * @param ctx the parse tree
	 */
	exitAssignment_target_subscript?: (ctx: Assignment_target_subscriptContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.assignment_target_name`.
	 * @param ctx the parse tree
	 */
	enterAssignment_target_name?: (ctx: Assignment_target_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.assignment_target_name`.
	 * @param ctx the parse tree
	 */
	exitAssignment_target_name?: (ctx: Assignment_target_nameContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.assignment_target_group`.
	 * @param ctx the parse tree
	 */
	enterAssignment_target_group?: (ctx: Assignment_target_groupContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.assignment_target_group`.
	 * @param ctx the parse tree
	 */
	exitAssignment_target_group?: (ctx: Assignment_target_groupContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.augassign_op`.
	 * @param ctx the parse tree
	 */
	enterAugassign_op?: (ctx: Augassign_opContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.augassign_op`.
	 * @param ctx the parse tree
	 */
	exitAugassign_op?: (ctx: Augassign_opContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.type_specification`.
	 * @param ctx the parse tree
	 */
	enterType_specification?: (ctx: Type_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.type_specification`.
	 * @param ctx the parse tree
	 */
	exitType_specification?: (ctx: Type_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.type_qualifier`.
	 * @param ctx the parse tree
	 */
	enterType_qualifier?: (ctx: Type_qualifierContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.type_qualifier`.
	 * @param ctx the parse tree
	 */
	exitType_qualifier?: (ctx: Type_qualifierContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.attributed_type_name`.
	 * @param ctx the parse tree
	 */
	enterAttributed_type_name?: (ctx: Attributed_type_nameContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.attributed_type_name`.
	 * @param ctx the parse tree
	 */
	exitAttributed_type_name?: (ctx: Attributed_type_nameContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.template_spec_suffix`.
	 * @param ctx the parse tree
	 */
	enterTemplate_spec_suffix?: (ctx: Template_spec_suffixContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.template_spec_suffix`.
	 * @param ctx the parse tree
	 */
	exitTemplate_spec_suffix?: (ctx: Template_spec_suffixContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.array_type_suffix`.
	 * @param ctx the parse tree
	 */
	enterArray_type_suffix?: (ctx: Array_type_suffixContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.array_type_suffix`.
	 * @param ctx the parse tree
	 */
	exitArray_type_suffix?: (ctx: Array_type_suffixContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.type_argument_list`.
	 * @param ctx the parse tree
	 */
	enterType_argument_list?: (ctx: Type_argument_listContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.type_argument_list`.
	 * @param ctx the parse tree
	 */
	exitType_argument_list?: (ctx: Type_argument_listContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.name_load`.
	 * @param ctx the parse tree
	 */
	enterName_load?: (ctx: Name_loadContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.name_load`.
	 * @param ctx the parse tree
	 */
	exitName_load?: (ctx: Name_loadContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.name_store`.
	 * @param ctx the parse tree
	 */
	enterName_store?: (ctx: Name_storeContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.name_store`.
	 * @param ctx the parse tree
	 */
	exitName_store?: (ctx: Name_storeContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.comments`.
	 * @param ctx the parse tree
	 */
	enterComments?: (ctx: CommentsContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.comments`.
	 * @param ctx the parse tree
	 */
	exitComments?: (ctx: CommentsContext) => void;

	/**
	 * Enter a parse tree produced by `PinescriptParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `PinescriptParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;
}

