import styled from "styled-components";

const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100vh;
`;

const Content = styled.div`
	max-width: 500px;
	z-index: 10;

	${({theme}) => theme.media.md} {
		max-width: 400px;
		margin: 0 auto;
	}
`;

const ImageWrapper = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	z-index: 5;

	@media (max-width: 1280px) {
		width: 400px;
		height: 384px;
	}
`;

export {Content, FlexContainer, ImageWrapper};
