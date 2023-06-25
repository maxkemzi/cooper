import {Dropdown} from "@shared/ui";
import styled from "styled-components";

const StyledCreateFormDropdown = styled(Dropdown)`
	${({theme}) => theme.media.md} {
		order: -1;
	}
`;

// eslint-disable-next-line import/prefer-default-export
export {StyledCreateFormDropdown};
