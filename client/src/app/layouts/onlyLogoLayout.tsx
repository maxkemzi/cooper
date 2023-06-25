import {Layout} from "@shared/ui";
import {LayoutHeader} from "@widgets/LayoutHeader";
import {Logo} from "@widgets/Logo";

const onlyLogoLayout = (
	<Layout headerSlot={<LayoutHeader isAbsolute leftContentSlot={<Logo />} />} />
);

export default onlyLogoLayout;
