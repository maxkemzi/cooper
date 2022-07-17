import styled from "styled-components";

const CategoryItem = styled.li`
	font-size: 16px;
	padding: 4px 12px;
	background: ${({theme}) => theme.colors.darkLighter};
	border-radius: ${({theme}) => theme.borderRadius};
`;

export default CategoryItem;
