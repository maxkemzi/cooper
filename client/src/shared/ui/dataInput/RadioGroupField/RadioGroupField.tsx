import {ThemingProps} from "@shared/theme";
import {HTMLAttributes, forwardRef, useId} from "react";
import Field from "../Field/Field";
import type {RadioProps} from "../Radio/Radio";
import RadioGroup from "../RadioGroup/RadioGroup";

interface Props extends ThemingProps, HTMLAttributes<HTMLDivElement> {
	isInvalid?: boolean;
	error?: string;
	groupTitle: string;
	RadioProps?: Partial<RadioProps>;
}

const RadioGroupField = forwardRef<HTMLDivElement, Props>(
	({error, isInvalid, groupTitle, RadioProps, children, ...rest}, ref) => {
		const id = useId();

		return (
			<Field
				ref={ref}
				inputId={id}
				error={error}
				isInvalid={isInvalid}
				{...rest}
			>
				<RadioGroup groupTitle={groupTitle} RadioProps={RadioProps}>
					{children}
				</RadioGroup>
			</Field>
		);
	}
);

export default RadioGroupField;
