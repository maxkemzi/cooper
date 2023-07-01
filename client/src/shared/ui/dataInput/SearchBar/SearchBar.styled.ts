import {commonStyles} from "@shared/theme";
import styled from "styled-components";
import {Icon} from "../../icons";

const SearchBarStyled = styled.div`
	position: relative;

	${commonStyles}
`;

const SearchIconStyled = styled(Icon)`
	transition: color ${({theme}) => theme.transitions.main};
`;

const SearchIconWrapperStyled = styled.div`
	position: absolute;
	display: flex;
	left: ${({theme}) => theme.spacing.lg};
	top: 50%;
	transform: translateY(-50%);
`;

const InputStyled = styled.input`
	width: 100%;
	height: 100%;
	padding: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.lg};
	padding-left: calc(
		${({theme}) => theme.spacing.lg} + 10px + ${({theme}) => theme.spacing.lg}
	);
	border: none;
	transition: box-shadow ${({theme}) => theme.transitions.main};
	border-radius: ${({theme}) => theme.borderRadiuses.full};
	background-color: ${({theme}) => theme.colors.background.main};
	box-shadow: ${({theme}) => theme.boxShadows.main};

	&:focus {
		outline-color: ${({theme}) => theme.colors.textPrimary.main};
		outline-style: solid;
	}

	&:focus + ${SearchIconWrapperStyled} ${SearchIconStyled} {
		color: ${({theme}) => theme.colors.secondary.main} !important;
	}
`;

const ClearIconStyled = styled(Icon)`
	transition: color ${({theme}) => theme.transitions.main};
`;

const ClearButtonStyled = styled.button`
	position: absolute;
	display: flex;
	align-items: center;
	right: ${({theme}) => theme.spacing.lg};
	top: 50%;
	transform: translateY(-50%);

	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		margin: -${({theme}) => theme.spacing.md};
	}

	&:hover ${ClearIconStyled} {
		color: ${({theme}) => theme.colors.secondary.main} !important;
	}
`;

export {
	ClearButtonStyled,
	ClearIconStyled,
	InputStyled,
	SearchBarStyled,
	SearchIconStyled,
	SearchIconWrapperStyled
};
