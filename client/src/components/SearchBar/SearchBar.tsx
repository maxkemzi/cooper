import CrossIcon from "@icons/CrossIcon/CrossIcon";
import useDebounce from "@hooks/useDebounce";
import useInput from "@hooks/useInput";
import React, {FC} from "react";
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
	const {value, handleChange, handleClear} = useInput("");

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
