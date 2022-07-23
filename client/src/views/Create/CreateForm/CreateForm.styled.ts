import {Dropdown} from "@components/Dropdown";
import {FormTextField} from "@components/Form";
import styled from "styled-components";

export const CreateFormTitleInput = styled(FormTextField)`
	font-size: 24px;
`;

export const CreateFormGrid = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	grid-gap: 20px;
	margin-bottom: 28px;
`;

export const CreateFormDropdown = styled(Dropdown)`
	height: 100%;
`;
