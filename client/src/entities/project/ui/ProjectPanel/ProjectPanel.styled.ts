import styled from "styled-components";

const StyledProjectPanel = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.lg};
	gap: ${({theme}) => theme.spacing.lg};
	border-bottom: 1px solid ${({theme}) => theme.colors.surface.main};
`;

// eslint-disable-next-line import/prefer-default-export
export {StyledProjectPanel};
