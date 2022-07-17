import styled from "styled-components";

const ProfileProjectsInner = styled.div`
	position: relative;
	background: ${({theme}) => theme.colors.darkLighter};
	padding: 28px;
	border-radius: ${({theme}) => theme.borderRadiusSmaller};
`;

export default ProfileProjectsInner;
