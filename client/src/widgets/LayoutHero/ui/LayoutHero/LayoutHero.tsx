import {FC, ReactNode} from "react";
import {useWindowSize} from "@shared/lib";
import {Content, FlexContainer, ImageWrapper} from "./LayoutHero.styles";

interface Props {
	leftContentSlot: ReactNode;
	rightSVGImageSlot: ReactNode;
}

const LayoutHero: FC<Props> = ({leftContentSlot, rightSVGImageSlot}) => {
	const {width} = useWindowSize();

	return (
		<FlexContainer>
			<Content>{leftContentSlot}</Content>
			{/* todo: replace with media query */}
			{width >= 930 ? <ImageWrapper>{rightSVGImageSlot}</ImageWrapper> : null}
		</FlexContainer>
	);
};

export default LayoutHero;
