import styled from "styled-components";

export const StyledProjectItemSkeleton = styled.div`
	background: ${({theme}) => theme.colors.light};
	padding: 24px;
	border-radius: ${({theme}) => theme.borderRadiusSmaller};
`;

export const ProjectItemSkeletonHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 16px;
`;

export const ProjectItemSkeletonFooter = styled.div`
	display: flex;
`;
