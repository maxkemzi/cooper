import styled from "styled-components";

const StyledAddToFavoritesButton = styled.button`
	position: relative;
	z-index: 15;
	display: flex;
	align-items: center;

	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		margin: -${({theme}) => theme.spacing.md};
	}
`;

export {StyledAddToFavoritesButton};
