import styled from "styled-components";

interface SkeletonProps {
	height: number;
	margin: string;
	flexGrow: number;
}

const StyledSkeleton = styled.div<SkeletonProps>`
	position: relative;
	overflow: hidden;
	width: 100%;
	background: var(--color-secondary-lighter);
	border-radius: var(--border-radius-milli);
	height: ${({height}) => height}px;
	margin: ${({margin}) => margin};
	flex-grow: ${({flexGrow}) => flexGrow};
`;

export default StyledSkeleton;
