import styled from "styled-components";

const SkillItem = styled.li`
	font-size: 16px;
	padding: 4px 12px;
	background: ${({theme}) => theme.colors.dark};
	border-radius: ${({theme}) => theme.borderRadius};
`;

export default SkillItem;
