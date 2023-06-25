import {Widget} from "@shared/ui";
import styled from "styled-components";

const WidgetStyled = styled(Widget)`
	margin-bottom: ${({theme}) => theme.spacing.lg};
`;

// eslint-disable-next-line import/prefer-default-export
export {WidgetStyled};
