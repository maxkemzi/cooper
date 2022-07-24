import styled from "styled-components";
import {MarginProps} from "@customTypes/styled";

interface AvatarProps extends MarginProps {
	width?: string;
	height?: string;
}

const StyledAvatar = styled.img<AvatarProps>`
	margin-bottom: ${({marginBottom}) => marginBottom};
	margin-top: ${({marginTop}) => marginTop};
	margin-left: ${({marginLeft}) => marginLeft};
	margin-right: ${({marginRight}) => marginRight};
	display: block;
	object-fit: cover;
	max-width: 100%;
	border-radius: ${({theme}) => theme.borderRadiusSmaller};
`;

export default StyledAvatar;
