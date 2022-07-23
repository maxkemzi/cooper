import styled from "styled-components";

const StyledProjectItemPanel = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 12px 24px;
	border-bottom: 1px solid ${({theme}) => theme.colors.darkLighter};
`;

export default StyledProjectItemPanel;
