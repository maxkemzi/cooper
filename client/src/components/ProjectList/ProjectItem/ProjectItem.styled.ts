import styled from "styled-components";

export const StyledProjectItem = styled.div`
	background: ${({theme}) => theme.colors.light};
	padding: 24px;
	border-radius: ${({theme}) => theme.borderRadiusSmaller};
	transition: box-shadow ${({theme}) => theme.transitionBase};
	overflow: hidden;

	&:hover {
		box-shadow: ${({theme}) => theme.boxShadowBase};
	}
`;

export const ProjectItemDesc = styled.p`
	flex-grow: 1;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	word-wrap: break-word;
	line-height: 1.5;
	margin-bottom: 16px;
`;
