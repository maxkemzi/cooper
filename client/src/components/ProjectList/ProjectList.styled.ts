import styled from "styled-components";

export const StyledProjectList = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	position: relative;
	gap: 16px;
`;

export const ProjectListLoadMore = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	text-align: center;
`;

export const ProjectListLoadMoreWrapper = styled.div`
	height: 20px;
`;
