import React, {
	Children,
	FC,
	ReactElement,
	ReactNode,
	useCallback,
	useEffect,
	useState
} from "react";
import StyledInfoList from "./InfoList.styled";

interface InfoListProps {
	children: ReactNode;
	marginBottom?: number;
	marginTop?: number;
	marginLeft?: number;
	marginRight?: number;
}

const InfoList: FC<InfoListProps> = ({children, ...props}) => {
	const count = Children.count(children);
	const [itemWidth, setItemWidth] = useState("");

	const getItemWidth = useCallback(() => {
		if (count >= 2 && count <= 3) {
			setItemWidth("20%");
		} else {
			setItemWidth(`${100 / count}%`);
		}
	}, [count]);

	useEffect(() => {
		getItemWidth();
	}, [getItemWidth]);

	return (
		<StyledInfoList {...props}>
			{React.Children.map(children, child =>
				React.cloneElement(child as ReactElement, {
					style: {flexBasis: itemWidth}
				})
			)}
		</StyledInfoList>
	);
};

export default InfoList;
