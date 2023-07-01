import {FC, ReactNode} from "react";
import {Container} from "@shared/ui";
import {
	CenterContentStyled,
	GridContainer,
	LeftContentStyled,
	RightContentStyled,
	StyledHeader
} from "./LayoutHeader.styles";

interface Props {
	isAbsolute?: boolean;
	leftContentSlot?: ReactNode;
	centerContentSlot?: ReactNode;
	rightContentSlot?: ReactNode;
}

const LayoutHeader: FC<Props> = ({
	isAbsolute,
	centerContentSlot,
	leftContentSlot,
	rightContentSlot
}) => (
	<StyledHeader isAbsolute={isAbsolute}>
		<Container>
			<GridContainer>
				{leftContentSlot ? (
					<LeftContentStyled>{leftContentSlot}</LeftContentStyled>
				) : null}
				{centerContentSlot ? (
					<CenterContentStyled>{centerContentSlot}</CenterContentStyled>
				) : null}
				{rightContentSlot ? (
					<RightContentStyled>{rightContentSlot}</RightContentStyled>
				) : null}
			</GridContainer>
		</Container>
	</StyledHeader>
);

export default LayoutHeader;
