import {Button} from "@shared/ui";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
	margin-right: ${({theme}) => theme.spacing.xs};
`;

const ButtonsStyled = styled.div`
	display: flex;
	align-items: center;
	gap: ${({theme}) => theme.spacing.md};
	margin-top: ${({theme}) => theme.spacing.md};
`;

// eslint-disable-next-line import/prefer-default-export
export {ButtonStyled, ButtonsStyled};
