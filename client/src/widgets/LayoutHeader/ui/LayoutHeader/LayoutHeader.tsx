import {FC, ReactNode} from "react";
import {Container} from "@shared/ui";
import {FlexContainer, StyledHeader} from "./LayoutHeader.styles";

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
			<FlexContainer>
				{leftContentSlot}
				{centerContentSlot}
				{rightContentSlot}
			</FlexContainer>
		</Container>
	</StyledHeader>
);

export default LayoutHeader;
