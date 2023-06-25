import styled from "styled-components";

const StyledProjectSkeleton = styled.div`
	background: ${({theme}) => theme.colors.background.main};
	padding: ${({theme}) => theme.spacing.lg};
	border-radius: ${({theme}) => theme.borderRadiuses.main};
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: ${({theme}) => theme.spacing.md};
`;

const Footer = styled.div`
	display: flex;
`;

export {Footer, Header, StyledProjectSkeleton};
