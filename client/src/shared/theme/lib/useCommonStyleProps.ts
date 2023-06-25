import {CommonStyleProps} from "../types";
import ThemingPropsDTO from "./ThemingPropsDTO";
import convertPropsToTransient from "./convertPropsToTransient";
import deletePropsFromObject from "./deletePropsFromObject";

type Props = {[key: string]: any};
type Result<T> = Omit<T, keyof ThemingPropsDTO> & {
	commonStyleProps: CommonStyleProps;
};

const useCommonStyleProps = <T extends Props>(props: T): Result<T> => {
	const themingProps = new ThemingPropsDTO(props);
	const otherProps = deletePropsFromObject(
		props,
		Object.keys(themingProps) as (keyof typeof themingProps)[]
	);

	const commonStyleProps = convertPropsToTransient(themingProps);

	return {...otherProps, commonStyleProps};
};

export default useCommonStyleProps;
