import {useState, ChangeEvent} from "react";

const useInput = (initialValue: string) => {
	const [value, setValue] = useState(initialValue);

	const handleChange = (e: ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		setValue(target.value);
	};

	const handleClear = () => setValue(initialValue);

	return {value, handleChange, handleClear};
};

export default useInput;
