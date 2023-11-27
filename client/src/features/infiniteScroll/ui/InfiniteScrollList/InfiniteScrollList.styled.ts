import styled from "styled-components";

const StyledInfiniteScrollList = styled.div`
	position: relative;
`;

const LastElement = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
`;

export {LastElement, StyledInfiniteScrollList};
