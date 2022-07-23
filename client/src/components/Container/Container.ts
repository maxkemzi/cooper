import styled, {css} from "styled-components";

interface ContainerProps {
	maxWidth?: string;
	isRelative?: boolean;
}

const Container = styled.div<ContainerProps>`
	${({isRelative}) =>
		isRelative &&
		css`
			position: relative;
		`}
	max-width: ${({maxWidth}) => maxWidth || "1472px"};
	padding: 0 16px;
	margin: 0 auto;
`;

export default Container;
