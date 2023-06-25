import {ThemingProps} from "@shared/theme";
import {ChangeEvent, forwardRef, useRef, useState} from "react";
import {StyledComponentPropsWithRef} from "styled-components";
import {useDebouncedCallback} from "../../../lib";
import {
	ClearButtonStyled,
	ClearIconStyled,
	InputStyled,
	SearchBarStyled,
	SearchIconStyled,
	SearchIconWrapperStyled
} from "./SearchBar.styled";

interface Props extends ThemingProps, StyledComponentPropsWithRef<"div"> {
	onSearch?: (value: string) => void;
	onClear?: () => void;
	InputProps?: StyledComponentPropsWithRef<"input">;
}

const SearchBar = forwardRef<HTMLDivElement, Props>(
	({onSearch, onClear, InputProps, ...rest}, ref) => {
		const [value, setValue] = useState("");
		const debouncedSearch = useDebouncedCallback(onSearch || null);
		const inputRef = useRef<HTMLInputElement | null>(null);

		const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
			const newValue = e.target.value;
			setValue(newValue);

			debouncedSearch?.(newValue);
		};

		const handleClear = () => {
			setValue("");
			onClear?.();

			inputRef.current?.focus();
		};

		return (
			<SearchBarStyled ref={ref} {...rest}>
				<InputStyled
					ref={inputRef}
					value={value}
					type="text"
					placeholder="Search"
					onChange={handleChange}
					{...InputProps}
				/>

				<SearchIconWrapperStyled>
					<SearchIconStyled name="search" />
				</SearchIconWrapperStyled>

				{value.length !== 0 ? (
					<ClearButtonStyled onClick={handleClear}>
						<ClearIconStyled name="close" />
					</ClearButtonStyled>
				) : null}
			</SearchBarStyled>
		);
	}
);

export default SearchBar;
