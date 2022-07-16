import styled from "styled-components";

export const ProjectPageSection = styled.div`
	padding: 28px 0;

	&:not(:last-child) {
		border-bottom: 1px solid ${({theme}) => theme.colors.darkLight};
	}
`;

export const ProjectPageInner = styled.div`
	padding: 0 28px;
`;

export const ProjectPageBlock = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 24px;
`;

export const ProjectsPageDate = styled.p`
	font-size: 16px;
`;

export const ProjectsPageSkillList = styled.div`
	display: flex;
	flex-wrap: wrap;
	column-gap: 12px;
	row-gap: 12px;
`;

export const ProjectPageInfoList = styled.div`
	display: flex;
	flex-wrap: wrap;
	row-gap: 12px;
`;
