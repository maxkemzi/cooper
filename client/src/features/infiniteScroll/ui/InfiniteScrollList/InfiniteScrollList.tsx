import {FC, ReactNode, useRef} from "react";
import useObserver from "../../lib/hooks/useObserver";
import {
	LastElement,
	StyledInfiniteScrollList
} from "./InfiniteScrollList.styled";

interface Props {
	hasMore: boolean;
	isFetching: boolean;
	onFetchMore: () => void;
	children: ReactNode;
}

const InfiniteScrollList: FC<Props> = ({
	children,
	hasMore,
	isFetching,
	onFetchMore
}) => {
	const lastElementRef = useRef<HTMLDivElement>(null);

	useObserver(lastElementRef, hasMore, isFetching, onFetchMore);

	return (
		<StyledInfiniteScrollList>
			{children}
			<LastElement ref={lastElementRef} />
		</StyledInfiniteScrollList>
	);
};

export default InfiniteScrollList;
