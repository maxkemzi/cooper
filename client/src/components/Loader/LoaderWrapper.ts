import styled from "styled-components";

const LoaderWrapper = styled.div`
	background: ${({theme}) => theme.colors.light};
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	z-index: 999;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export default LoaderWrapper;
