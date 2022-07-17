import {MarginProps} from "@customTypes/styled";
import styled from "styled-components";

const CategoryList = styled.ul<MarginProps>`
	margin-bottom: ${({marginBottom}) => marginBottom};
	margin-top: ${({marginTop}) => marginTop};
	margin-left: ${({marginLeft}) => marginLeft};
	margin-right: ${({marginRight}) => marginRight};
	display: flex;
	flex-wrap: wrap;
	column-gap: 12px;
	row-gap: 12px;
`;

export default CategoryList;
