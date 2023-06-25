import {ThemingProps} from "@shared/theme";
import {useFormikContext} from "formik";
import {FC} from "react";
import {FormStatusStyled} from "./FormStatus.styled";

interface Props extends ThemingProps {}

const FormStatus: FC<Props> = ({...rest}) => {
	const {status} = useFormikContext();

	if (!status) {
		return null;
	}

	return <FormStatusStyled {...rest}>{status}</FormStatusStyled>;
};

export default FormStatus;
