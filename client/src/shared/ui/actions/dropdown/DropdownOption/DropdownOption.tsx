import {ThemingProps} from "@shared/theme";
import {LiHTMLAttributes, forwardRef} from "react";
import {ButtonStyled, DropdownOptionStyled} from "./DropdownOption.styled";

interface DropdownOptionData {
	id: number | string;
	title: string;
	value: string;
}

interface BaseProps extends ThemingProps {
	id: number | string;
	title: string;
	value: string;
	isActive?: boolean;
	onClick: (option: DropdownOptionData) => void;
	disabled?: boolean;
}

type Props = BaseProps & Omit<LiHTMLAttributes<HTMLLIElement>, keyof BaseProps>;

const DropdownOption = forwardRef<HTMLLIElement, Props>(
	({isActive, disabled, id, title, value, onClick}, ref) => (
		<DropdownOptionStyled ref={ref} $isActive={isActive}>
			<ButtonStyled
				disabled={disabled}
				type="button"
				onClick={() => onClick({id, title, value})}
			>
				{title}
			</ButtonStyled>
		</DropdownOptionStyled>
	)
);

export default DropdownOption;
export type {DropdownOptionData};
