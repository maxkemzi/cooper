import {ConvertPropsToTransient} from "../types";

type Props = {[key: string]: any};

const convertPropsToTransient = <T extends Props>(
	props: T
): ConvertPropsToTransient<T> => {
	const result = {} as ConvertPropsToTransient<T>;

	Object.keys(props).forEach(prop => {
		const newProp = `$${prop}` as keyof ConvertPropsToTransient<T>;
		result[newProp] = props[prop];
	});

	return result;
};

export default convertPropsToTransient;
