import styled from "styled-components";
import Button from "../../../Button/Button";

export const StyledProjectItemFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const ItemFooterDate = styled.p`
	font-size: 16px;
	align-self: flex-end;
`;

export const ItemFooterButtons = styled.div`
	display: flex;
	align-items: center;
	margin-right: 16px;
`;

export const SeeMoreButton = styled(Button)`
	font-size: 14px;
	padding: 8px 16px;
	margin-right: 12px;
`;
