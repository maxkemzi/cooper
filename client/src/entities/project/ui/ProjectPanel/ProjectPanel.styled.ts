import styled from "styled-components";

const ProjectPanelStyled = styled.div`
	display: flex;
	align-items: center;
	padding: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.lg};
	border-bottom: 1px solid ${({theme}) => theme.colors.surface.main};
`;

export {ProjectPanelStyled};
