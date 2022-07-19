import styled from "styled-components";

interface ContainerProps {
	maxWidth?: string;
}

const Container = styled.div<ContainerProps>`
	position: relative;
	max-width: ${({maxWidth}) => maxWidth || "1472px"};
	padding: 0 16px;
	margin: 0 auto;
`;

export default Container;
