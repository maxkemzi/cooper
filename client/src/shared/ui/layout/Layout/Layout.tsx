import {FC, ReactNode} from "react";
import {Outlet} from "react-router-dom";
import Container from "../Container/Container";
import {LayoutStyled, MainStyled} from "./Layout.styled";

interface Props {
	headerSlot?: ReactNode;
	footerSlot?: ReactNode;
	withMainContentPadding?: boolean;
}

const Layout: FC<Props> = ({
	headerSlot,
	footerSlot,
	withMainContentPadding
}) => (
	<LayoutStyled>
		{headerSlot}
		<MainStyled withPadding={withMainContentPadding}>
			<Container>
				<Outlet />
			</Container>
		</MainStyled>
		{footerSlot}
	</LayoutStyled>
);

export default Layout;
