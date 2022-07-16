import styled from "styled-components";

const SocialList = styled.ul<{gap?: string}>`
	display: flex;
	align-items: center;
	gap: ${({gap}) => gap};
`;

export default SocialList;
