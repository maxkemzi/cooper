import {FC} from "react";
import {DotStyled, DotsStyled, LoaderStyled} from "./Loader.styled";

const Loader: FC = () => (
	<LoaderStyled>
		<DotStyled />
		<DotsStyled>
			<span />
			<span />
		</DotsStyled>
	</LoaderStyled>
);

export default Loader;
