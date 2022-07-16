import {Loader} from "@components/Loader";
import useObserver from "@hooks/useObserver";
import React, {FC, ReactNode, useRef} from "react";
import {
	ListLastElement,
	ListLoaderWrapper,
	StyledInfiniteScrollList
} from "./InfiniteScrollList.styled";

interface InfiniteScrollListProps {
	hasMore: boolean;
	isLoading: boolean;
	onLoadMore: () => void;
	children: ReactNode;
}

const InfiniteScrollList: FC<InfiniteScrollListProps> = ({
	hasMore,
	children,
	isLoading,
	onLoadMore
}) => {
	const lastElementRef = useRef<HTMLDivElement>(null);

	useObserver(lastElementRef, hasMore, isLoading, onLoadMore);

	return (
		<StyledInfiniteScrollList>
			{children}
			<ListLastElement ref={lastElementRef} />
			{isLoading && (
				<ListLoaderWrapper>
					<Loader />
				</ListLoaderWrapper>
			)}
		</StyledInfiniteScrollList>
	);
};

export default InfiniteScrollList;
