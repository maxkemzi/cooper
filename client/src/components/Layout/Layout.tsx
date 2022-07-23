import Container from "@components/Container/Container";
import Header from "@views/Header/Header";
import React, {FC, ReactNode} from "react";

interface LayoutProps {
	children: ReactNode;
	isHeaderAbsolute?: boolean;
}

const Layout: FC<LayoutProps> = ({children, isHeaderAbsolute}) => (
	<>
		<Header isAbsolute={isHeaderAbsolute} />
		<main>
			<Container>{children}</Container>
		</main>
	</>
);

export default Layout;
