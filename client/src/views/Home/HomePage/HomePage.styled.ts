import styled from "styled-components";
import PlanetIcon from "@icons/PlanetIcon/PlanetIcon";

export const HomePageContent = styled.div`
	max-width: 500px;
`;

export const HomePagePlanetImage = styled(PlanetIcon)`
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	z-index: 5;
`;
