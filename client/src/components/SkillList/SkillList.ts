import styled from "styled-components";

interface SkillListProps {
	marginBottom?: number;
	marginTop?: number;
	marginLeft?: number;
	marginRight?: number;
}

const SkillList = styled.ul<SkillListProps>`
	margin-bottom: ${({marginBottom}) => marginBottom}px;
	margin-top: ${({marginTop}) => marginTop}px;
	margin-left: ${({marginLeft}) => marginLeft}px;
	margin-right: ${({marginRight}) => marginRight}px;
	display: flex;
	flex-wrap: wrap;
	column-gap: 12px;
	row-gap: 12px;
`;

export default SkillList;
