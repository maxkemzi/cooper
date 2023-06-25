import {ThemingProps} from "@shared/theme";
import {FC, forwardRef, memo} from "react";
import {StyledComponentPropsWithRef} from "styled-components";
import {TagItemStyled} from "./TagItem.styled";

interface Props extends ThemingProps, StyledComponentPropsWithRef<"div"> {
	text: string;
}

const TagItem: FC<Props> = memo(
	forwardRef(({text, ...rest}, ref) => (
		<TagItemStyled ref={ref} {...rest}>
			{text}
		</TagItemStyled>
	))
);

export default TagItem;
