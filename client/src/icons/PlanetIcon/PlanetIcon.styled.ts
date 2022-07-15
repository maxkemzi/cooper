import styled from "styled-components";

const PlanetIconContinent = styled.path`
	transition: fill ${({theme}) => theme.transitionBase};

	&:hover {
		fill: ${({theme}) => theme.colors.accent};
	}
`;

export default PlanetIconContinent;
