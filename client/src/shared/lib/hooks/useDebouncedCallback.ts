import {useCallback, useRef} from "react";

const useDebouncedCallback = (
	callback: ((...args: any[]) => void) | null,
	delay = 500
) => {
	const timer = useRef<NodeJS.Timeout | null>(null);

	const debouncedCallback = useCallback(
		(...args: any[]) => {
			if (!callback) {
				return;
			}

			if (timer.current) {
				clearTimeout(timer.current);
			}

			timer.current = setTimeout(() => callback(...args), delay);
		},
		[callback, delay]
	);

	return debouncedCallback;
};

export default useDebouncedCallback;
