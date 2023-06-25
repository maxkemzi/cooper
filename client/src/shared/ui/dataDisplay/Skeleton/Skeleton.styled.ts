import {commonStyles} from "@shared/theme";
import styled from "styled-components";

interface Props {
	$height: string;
	$flexGrow?: number;
}

const SkeletonStyled = styled.div<Props>`
	position: relative;
	overflow: hidden;
	width: 100%;
	background: ${({theme}) => theme.colors.surface.main};
	border-radius: ${({theme}) => theme.borderRadiuses.main};
	height: ${({$height}) => $height};
	flex-grow: ${({$flexGrow}) => $flexGrow};

	${commonStyles}
`;

export {SkeletonStyled};
