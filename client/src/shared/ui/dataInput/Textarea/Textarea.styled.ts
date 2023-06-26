import {commonStyles} from "@shared/theme";
import styled from "styled-components";
import {inputStyles} from "../Input/Input.styled";

const TextareaStyled = styled.textarea`
	${inputStyles}
	resize: none;
	${commonStyles}
`;

export {TextareaStyled};
