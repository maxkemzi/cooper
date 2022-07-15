import {useCallback, useRef} from "react";

const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
	const timer = useRef(null);

	return useCallback(
		(...args: any[]) => {
			if (timer.current) {
				clearTimeout(timer.current);
			}

			timer.current = setTimeout(() => callback(...args), delay);
		},
		[callback, delay]
	);
};

export default useDebounce;
