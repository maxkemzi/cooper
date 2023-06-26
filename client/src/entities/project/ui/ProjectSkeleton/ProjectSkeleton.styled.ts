import styled, {css} from "styled-components";

const StyledProjectSkeleton = styled.div`
	background: ${({theme}) => theme.colors.background.main};
	padding: ${({theme}) => theme.spacing.lg};
	border-radius: ${({theme}) => theme.borderRadiuses.main};
`;

const flexStyles = css`
	display: flex;
	align-items: center;
	column-gap: ${({theme}) => theme.spacing.md};
`;

const Header = styled.div`
	${flexStyles}
	margin-bottom: ${({theme}) => theme.spacing.md};
`;

const Footer = styled.div`
	${flexStyles}
`;

export {Footer, Header, StyledProjectSkeleton};
