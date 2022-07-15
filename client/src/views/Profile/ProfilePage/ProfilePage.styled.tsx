import styled from "styled-components";

export const ProfilePageGrid = styled.div`
	display: grid;
	grid-template-columns: 200px 1fr;
	grid-gap: 20px;
`;

export const ProfilePageHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	align-self: flex-end;
`;

export const ProfilePageUsername = styled.h2`
	font-size: 36px;
	font-weight: 600;
	margin-bottom: 4px;
`;

export const ProfilePageLocation = styled.p`
	margin-bottom: 4px;
	display: flex;
	align-items: flex-end;
`;

export const ProfilePageBtns = styled.div`
	display: flex;
	align-items: center;
`;

export const ProfilePageChatBtn = styled.button`
	margin-right: 20px;
`;
