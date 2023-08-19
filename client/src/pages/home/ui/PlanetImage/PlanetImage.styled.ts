import styled from "styled-components";

const Continent = styled.path`
	transition: fill ${({theme}) => theme.transitions.main};

	&:hover {
		fill: ${({theme}) => theme.colors.secondary.main};
	}
`;

export {Continent};
