import {ThemingProps} from "@shared/theme";
import {FC, forwardRef, memo} from "react";
import {StyledComponentPropsWithRef} from "styled-components";
import {InfoItemStyled, TitleStyled, ValueStyled} from "./InfoItem.styled";

interface Props extends ThemingProps, StyledComponentPropsWithRef<"div"> {
	value: string | number;
	title: string;
}

const InfoItem: FC<Props> = memo(
	forwardRef(({value, title, ...rest}, ref) => (
		<InfoItemStyled ref={ref} {...rest}>
			<ValueStyled>{value}</ValueStyled>
			<TitleStyled>{title}</TitleStyled>
		</InfoItemStyled>
	))
);

export default InfoItem;
