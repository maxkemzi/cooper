import {RefObject, useEffect, useRef} from "react";

const useObserver = (
	ref: RefObject<any>,
	hasMore: boolean,
	isLoading: boolean,
	callback: () => void
) => {
	const observer = useRef<IntersectionObserver>(null);

	useEffect(() => {
		if (isLoading) {
			return;
		}

		if (observer.current) {
			observer.current.disconnect();
		}

		const cb = (entries: IntersectionObserverEntry[]) => {
			if (entries[0].isIntersecting && hasMore) {
				callback();
			}
		};

		observer.current = new IntersectionObserver(cb);
		observer.current.observe(ref.current);
	}, [callback, hasMore, isLoading, ref]);
};

export default useObserver;
