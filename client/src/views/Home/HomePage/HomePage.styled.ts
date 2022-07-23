import styled from "styled-components";
import PlanetIcon from "@icons/PlanetIcon/PlanetIcon";

export const HomePageContent = styled.div`
	max-width: 500px;
	z-index: 10;

	@media (max-width: 768px) {
		max-width: 400px;
		margin: 0 auto;
	}
`;

export const HomePagePlanetImage = styled(PlanetIcon)`
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	z-index: 5;

	@media (max-width: 1280px) {
		width: 400px;
		height: 384px;
	}
`;
