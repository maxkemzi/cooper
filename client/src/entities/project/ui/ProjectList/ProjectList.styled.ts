import styled from "styled-components";

const StyledProjectList = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	position: relative;
	gap: ${({theme}) => theme.spacing.md};

	${({theme}) => theme.media.md} {
		grid-template-columns: 1fr;
	}
`;

export {StyledProjectList};
