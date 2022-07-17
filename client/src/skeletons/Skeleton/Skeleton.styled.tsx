import styled from "styled-components";

interface SkeletonProps {
	height: string;
	margin: string;
	flexGrow: string;
}

const StyledSkeleton = styled.div<SkeletonProps>`
	position: relative;
	overflow: hidden;
	width: 100%;
	background: ${({theme}) => theme.colors.darkLighter};
	border-radius: ${({theme}) => theme.borderRadiusSmaller};
	height: ${({height}) => height};
	margin: ${({margin}) => margin};
	flex-grow: ${({flexGrow}) => flexGrow};
`;

export default StyledSkeleton;
