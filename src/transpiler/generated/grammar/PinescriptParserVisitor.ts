// Generated from grammar/PinescriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PinescriptParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PinescriptParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `primary_expression_attribute`
	 * labeled alternative in `PinescriptParser.primary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_expression_attribute?: (ctx: Primary_expression_attributeContext) => Result;

	/**
	 * Visit a parse tree produced by the `primary_expression_call`
	 * labeled alternative in `PinescriptParser.primary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_expression_call?: (ctx: Primary_expression_callContext) => Result;

	/**
	 * Visit a parse tree produced by the `primary_expression_subscript`
	 * labeled alternative in `PinescriptParser.primary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_expression_subscript?: (ctx: Primary_expression_subscriptContext) => Result;

	/**
	 * Visit a parse tree produced by the `primary_expression_fallback`
	 * labeled alternative in `PinescriptParser.primary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_expression_fallback?: (ctx: Primary_expression_fallbackContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.start_script`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart_script?: (ctx: Start_scriptContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.start_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart_expression?: (ctx: Start_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.start_comments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart_comments?: (ctx: Start_commentsContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.compound_statement_with_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_statement_with_block?: (ctx: Compound_statement_with_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.simple_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_statement?: (ctx: Simple_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.compound_assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_assignment?: (ctx: Compound_assignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.compound_variable_initialization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_variable_initialization?: (ctx: Compound_variable_initializationContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.compound_name_initialization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_name_initialization?: (ctx: Compound_name_initializationContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.compound_tuple_initialization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_tuple_initialization?: (ctx: Compound_tuple_initializationContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.compound_reassignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_reassignment?: (ctx: Compound_reassignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.compound_augassignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_augassignment?: (ctx: Compound_augassignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.function_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_declaration?: (ctx: Function_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.parameter_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_list?: (ctx: Parameter_listContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.parameter_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter_definition?: (ctx: Parameter_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.type_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_declaration?: (ctx: Type_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.field_definitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_definitions?: (ctx: Field_definitionsContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.field_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_definition?: (ctx: Field_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.structure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructure?: (ctx: StructureContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.structure_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructure_statement?: (ctx: Structure_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.structure_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructure_expression?: (ctx: Structure_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.if_structure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_structure?: (ctx: If_structureContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.if_structure_elif`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_structure_elif?: (ctx: If_structure_elifContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.if_structure_else`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_structure_else?: (ctx: If_structure_elseContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.elif_structure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElif_structure?: (ctx: Elif_structureContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.elif_structure_elif`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElif_structure_elif?: (ctx: Elif_structure_elifContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.elif_structure_else`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElif_structure_else?: (ctx: Elif_structure_elseContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.else_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElse_block?: (ctx: Else_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.for_structure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_structure?: (ctx: For_structureContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.for_structure_to`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_structure_to?: (ctx: For_structure_toContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.for_structure_in`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_structure_in?: (ctx: For_structure_inContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.for_iterator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_iterator?: (ctx: For_iteratorContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.while_structure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile_structure?: (ctx: While_structureContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.switch_structure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_structure?: (ctx: Switch_structureContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.switch_cases`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_cases?: (ctx: Switch_casesContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.switch_pattern_case`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_pattern_case?: (ctx: Switch_pattern_caseContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.switch_default_case`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_default_case?: (ctx: Switch_default_caseContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.local_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_block?: (ctx: Local_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.expression_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_statement?: (ctx: Expression_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.conditional_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_expression?: (ctx: Conditional_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.conditional_expression_rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_expression_rule?: (ctx: Conditional_expression_ruleContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.disjunction_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisjunction_expression?: (ctx: Disjunction_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.disjunction_expression_rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisjunction_expression_rule?: (ctx: Disjunction_expression_ruleContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.conjunction_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConjunction_expression?: (ctx: Conjunction_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.conjunction_expression_rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConjunction_expression_rule?: (ctx: Conjunction_expression_ruleContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.equality_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquality_expression?: (ctx: Equality_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.equality_expression_rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquality_expression_rule?: (ctx: Equality_expression_ruleContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.equality_trailing_pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquality_trailing_pair?: (ctx: Equality_trailing_pairContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.equal_trailing_pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqual_trailing_pair?: (ctx: Equal_trailing_pairContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.not_equal_trailing_pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNot_equal_trailing_pair?: (ctx: Not_equal_trailing_pairContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.inequality_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInequality_expression?: (ctx: Inequality_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.inequality_expression_rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInequality_expression_rule?: (ctx: Inequality_expression_ruleContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.inequality_trailing_pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInequality_trailing_pair?: (ctx: Inequality_trailing_pairContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.less_than_equal_trailing_pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLess_than_equal_trailing_pair?: (ctx: Less_than_equal_trailing_pairContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.less_than_trailing_pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLess_than_trailing_pair?: (ctx: Less_than_trailing_pairContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.greater_than_equal_trailing_pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreater_than_equal_trailing_pair?: (ctx: Greater_than_equal_trailing_pairContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.greater_than_trailing_pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreater_than_trailing_pair?: (ctx: Greater_than_trailing_pairContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.additive_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditive_expression?: (ctx: Additive_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.additive_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditive_op?: (ctx: Additive_opContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.multiplicative_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicative_op?: (ctx: Multiplicative_opContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.unary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_expression?: (ctx: Unary_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.unary_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_op?: (ctx: Unary_opContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.primary_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_expression?: (ctx: Primary_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.argument_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument_list?: (ctx: Argument_listContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.argument_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument_definition?: (ctx: Argument_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.subscript_slice`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript_slice?: (ctx: Subscript_sliceContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.atomic_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomic_expression?: (ctx: Atomic_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.literal_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral_expression?: (ctx: Literal_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.literal_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral_number?: (ctx: Literal_numberContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.literal_string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral_string?: (ctx: Literal_stringContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.literal_bool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral_bool?: (ctx: Literal_boolContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.literal_color`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral_color?: (ctx: Literal_colorContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.grouped_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrouped_expression?: (ctx: Grouped_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.tuple_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple_expression?: (ctx: Tuple_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.import_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_statement?: (ctx: Import_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.break_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreak_statement?: (ctx: Break_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.continue_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinue_statement?: (ctx: Continue_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.var_declaration_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar_declaration_stmt?: (ctx: Var_declaration_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.tuple_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple_declaration?: (ctx: Tuple_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.declaration_mode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration_mode?: (ctx: Declaration_modeContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.assignment_target`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_target?: (ctx: Assignment_targetContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.assignment_target_attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_target_attribute?: (ctx: Assignment_target_attributeContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.assignment_target_subscript`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_target_subscript?: (ctx: Assignment_target_subscriptContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.assignment_target_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_target_name?: (ctx: Assignment_target_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.assignment_target_group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_target_group?: (ctx: Assignment_target_groupContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.augassign_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAugassign_op?: (ctx: Augassign_opContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.type_specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_specification?: (ctx: Type_specificationContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.type_qualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_qualifier?: (ctx: Type_qualifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.attributed_type_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributed_type_name?: (ctx: Attributed_type_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.template_spec_suffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplate_spec_suffix?: (ctx: Template_spec_suffixContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.array_type_suffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_type_suffix?: (ctx: Array_type_suffixContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.type_argument_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_argument_list?: (ctx: Type_argument_listContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.name_load`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName_load?: (ctx: Name_loadContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.name_store`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName_store?: (ctx: Name_storeContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.comments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComments?: (ctx: CommentsContext) => Result;

	/**
	 * Visit a parse tree produced by `PinescriptParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;
}

