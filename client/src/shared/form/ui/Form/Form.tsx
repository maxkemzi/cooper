import {ThemingProps} from "@shared/theme";
import {FC, ReactNode} from "react";
import {FormStyled} from "./Form.styled";

interface Props extends ThemingProps {
	children: ReactNode;
}

const Form: FC<Props> = ({children, ...rest}) => (
	<FormStyled {...rest}>{children}</FormStyled>
);

export default Form;
