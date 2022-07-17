import styled from "styled-components";

const StyledProjectsCountSkeleton = styled.div`
	display: flex;
	align-items: center;
	margin-right: 16px;
	width: 152px;
	align-self: center;
	background: ${({theme}) => theme.colors.light};
	padding: 0 20px;
	height: 100%;
	border-radius: ${({theme}) => theme.borderRadiusSmaller};
`;

export default StyledProjectsCountSkeleton;
