import {Layout} from "@shared/ui";
import {LayoutHeader} from "@widgets/LayoutHeader";
import {LayoutNavbar} from "@widgets/LayoutNavbar";
import {LayoutProfileCard} from "@widgets/LayoutProfileCard";
import {Logo} from "@widgets/Logo";

const baseLayout = (
	<Layout
		withMainContentPadding
		headerSlot={
			<LayoutHeader
				leftContentSlot={<Logo />}
				centerContentSlot={<LayoutNavbar />}
				rightContentSlot={<LayoutProfileCard />}
			/>
		}
	/>
);

export default baseLayout;
