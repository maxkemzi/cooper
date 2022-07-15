import React, {FC} from "react";
import {Dot, Dots, StyledLoader} from "./Loader.styled";

const Loader: FC = () => (
	<StyledLoader>
		<Dot />
		<Dots>
			<span />
			<span />
		</Dots>
	</StyledLoader>
);

export default Loader;
