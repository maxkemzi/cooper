import {Widget} from "@shared/ui";
import styled from "styled-components";

const WidgetStyled = styled(Widget)`
	margin-bottom: ${({theme}) => theme.spacing.lg};
`;

export {WidgetStyled};
