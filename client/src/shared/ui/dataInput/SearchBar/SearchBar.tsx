import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {
	ChangeEvent,
	HTMLAttributes,
	InputHTMLAttributes,
	forwardRef,
	useRef,
	useState
} from "react";
import {useDebouncedCallback} from "../../../lib";
import {
	ClearButtonStyled,
	ClearIconStyled,
	InputStyled,
	SearchBarStyled,
	SearchIconStyled,
	SearchIconWrapperStyled
} from "./SearchBar.styled";

interface Props extends ThemingProps, HTMLAttributes<HTMLDivElement> {
	onSearch?: (value: string) => void;
	onClear?: () => void;
	InputProps?: Partial<InputHTMLAttributes<HTMLInputElement>>;
	defaultValue?: string;
}

const SearchBar = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		onSearch,
		onClear,
		InputProps,
		defaultValue = "",
		commonStyleProps,
		...rest
	} = useCommonStyleProps(props);

	const [value, setValue] = useState(defaultValue);
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
		<SearchBarStyled ref={ref} {...commonStyleProps} {...rest}>
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
});

export default SearchBar;
