import useDebounce from "@hooks/useDebounce";
import CrossIcon from "@icons/CrossIcon/CrossIcon";
import React, {ChangeEvent, FC, useState} from "react";
import {
	SearchBarClearButton,
	SearchBarIcon,
	SearchBarInput,
	StyledSearchBar
} from "./SearchBar.styled";

interface SearchBarProps {
	onSearch: (query: string) => void;
	onClear: () => void;
}

const SearchBar: FC<SearchBarProps> = ({onSearch, onClear}) => {
	const [value, setValue] = useState("");

	const handleChange = (e: ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		setValue(target.value);
	};

	const handleClear = () => setValue("");

	const debouncedSearch = useDebounce(onSearch, 500);

	return (
		<StyledSearchBar>
			<SearchBarInput
				value={value}
				type="text"
				placeholder="Search"
				onChange={e => {
					handleChange(e);
					debouncedSearch(e.target.value);
				}}
			/>

			<SearchBarIcon />

			{value.length !== 0 && (
				<SearchBarClearButton
					onClick={() => {
						handleClear();
						onClear();
					}}
				>
					<CrossIcon />
				</SearchBarClearButton>
			)}
		</StyledSearchBar>
	);
};

export default SearchBar;
