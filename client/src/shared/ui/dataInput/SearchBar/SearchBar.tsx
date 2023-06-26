import {ThemingProps} from "@shared/theme";
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

type Props = ThemingProps &
	HTMLAttributes<HTMLDivElement> & {
		onSearch?: (value: string) => void;
		onClear?: () => void;
		InputProps?: Partial<InputHTMLAttributes<HTMLInputElement>>;
	};

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
