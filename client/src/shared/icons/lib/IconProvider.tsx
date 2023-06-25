import {FC, ReactNode, useMemo} from "react";
import {IconContext} from "react-icons";

interface Props {
	children: ReactNode;
}

const IconProvider: FC<Props> = ({children}) => {
	const value: IconContext = useMemo(
		() => ({
			size: "20",
			color: "#1F1F1F"
		}),
		[]
	);

	return <IconContext.Provider value={value}>{children}</IconContext.Provider>;
};

export default IconProvider;
