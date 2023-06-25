import {Loader} from "@shared/ui";
import {FC, ReactNode, useRef} from "react";
import useObserver from "../../lib/hooks/useObserver";
import {
	LastElement,
	LoaderWrapper,
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
	const lastElementRef = useRef<HTMLDivElement | null>(null);

	useObserver(lastElementRef, hasMore, isFetching, onFetchMore);

	return (
		<StyledInfiniteScrollList>
			{children}
			<LastElement ref={lastElementRef} />
			{isFetching ? (
				<LoaderWrapper>
					<Loader />
				</LoaderWrapper>
			) : null}
		</StyledInfiniteScrollList>
	);
};

export default InfiniteScrollList;
