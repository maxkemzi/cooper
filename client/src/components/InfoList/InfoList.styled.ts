import styled from "styled-components";

interface StyledInfoListProps {
	marginBottom?: number;
	marginTop?: number;
	marginLeft?: number;
	marginRight?: number;
}

const StyledInfoList = styled.ul<StyledInfoListProps>`
	margin-bottom: ${({marginBottom}) => marginBottom}px;
	margin-top: ${({marginTop}) => marginTop}px;
	margin-left: ${({marginLeft}) => marginLeft}px;
	margin-right: ${({marginRight}) => marginRight}px;
	display: flex;
	flex-wrap: wrap;
	row-gap: 12px;
`;

export default StyledInfoList;
