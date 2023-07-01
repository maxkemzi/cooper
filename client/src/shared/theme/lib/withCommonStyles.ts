import {ComponentType} from "react";
import styled from "styled-components";
import {commonStyles} from "../constants/mixins";

const withCommonStyles = <T extends ComponentType>(Component: T) =>
	styled(Component)`
		${commonStyles}
	`;

export default withCommonStyles;
