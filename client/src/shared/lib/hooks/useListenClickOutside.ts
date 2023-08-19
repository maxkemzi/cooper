import {RefObject, useEffect} from "react";

const useListenClickOutside = (
	ref: RefObject<HTMLElement>,
	onClickOutside: () => void
) => {
	useEffect(() => {
		const handleClickOutside = ({target}: MouseEvent): void => {
			const targetIsTheRefElement =
				ref.current && ref.current.contains(target as Node);
			if (targetIsTheRefElement) {
				return;
			}

			onClickOutside();
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [ref, onClickOutside]);
};

export default useListenClickOutside;
