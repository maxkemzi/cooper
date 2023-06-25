import {Layout} from "@shared/ui";
import {LayoutHeader} from "@widgets/LayoutHeader";
import {LayoutNavbar} from "@widgets/LayoutNavbar";
import {LayoutProfileCard} from "@widgets/LayoutProfileCard";
import {Logo} from "@widgets/Logo";

const fullscreenLayout = (
	<Layout
		headerSlot={
			<LayoutHeader
				isAbsolute
				leftContentSlot={<Logo />}
				centerContentSlot={<LayoutNavbar />}
				rightContentSlot={<LayoutProfileCard />}
			/>
		}
	/>
);

export default fullscreenLayout;
