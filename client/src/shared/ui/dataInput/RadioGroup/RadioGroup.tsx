import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {
	HTMLAttributes,
	createContext,
	forwardRef,
	useContext,
	useMemo
} from "react";
import {Typography} from "../../Typography";
import {List} from "../../dataDisplay/List";
import type {RadioProps} from "../Radio/Radio";
import {RadioGroupStyled} from "./RadioGroup.styled";

type RadioGroupContextValue = {RadioProps: Partial<RadioProps>};
const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);
const useRadioGroupContext = () => useContext(RadioGroupContext);

interface Props extends ThemingProps, HTMLAttributes<HTMLDivElement> {
	groupTitle: string;
	RadioProps?: Partial<RadioProps>;
}

const RadioGroup = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {groupTitle, children, RadioProps, commonStyleProps, ...rest} =
		useCommonStyleProps(props);

	const value = useMemo(() => ({RadioProps: RadioProps || {}}), [RadioProps]);

	return (
		<RadioGroupStyled ref={ref} {...commonStyleProps} {...rest}>
			<Typography variant="h6" mb="sm">
				{groupTitle}
			</Typography>
			<RadioGroupContext.Provider value={value}>
				<List noWrap>{children}</List>
			</RadioGroupContext.Provider>
		</RadioGroupStyled>
	);
});

export {useRadioGroupContext};
export type {RadioGroupContextValue};
export default RadioGroup;
