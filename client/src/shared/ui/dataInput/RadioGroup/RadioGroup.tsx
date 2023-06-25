import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {
	HTMLAttributes,
	createContext,
	forwardRef,
	useContext,
	useMemo
} from "react";
import type {RadioProps} from "../Radio/Radio";
import {
	FlexContainerStyled,
	RadioGroupStyled,
	TitleStyled
} from "./RadioGroup.styled";

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
			<TitleStyled>{groupTitle}</TitleStyled>
			<FlexContainerStyled>
				<RadioGroupContext.Provider value={value}>
					{children}
				</RadioGroupContext.Provider>
			</FlexContainerStyled>
		</RadioGroupStyled>
	);
});

export {useRadioGroupContext};
export type {RadioGroupContextValue};
export default RadioGroup;
