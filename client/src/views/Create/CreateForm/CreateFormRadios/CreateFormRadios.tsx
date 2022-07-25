import {RadioButton, RadioGroup} from "@components/RadioGroup";
import useWindowSize from "@hooks/useWindowSize";
import ScreenSizes from "@utils/constants/screenSizes";
import {useField} from "formik";
import React from "react";

const CreateFormRadios = () => {
	const [visibilityField] = useField("visibility");
	const [workTypeField] = useField("workType");
	const {width} = useWindowSize();

	return (
		<div>
			<RadioGroup
				marginBottom={width <= ScreenSizes.TabletWidth ? "12px" : "24px"}
				title="Visibility"
				name="visibility"
			>
				<RadioButton
					value="public"
					checked={visibilityField.value === "public"}
					text="Public"
					onChange={visibilityField.onChange}
				/>
				<RadioButton
					value="private"
					checked={visibilityField.value === "private"}
					text="Private"
					onChange={visibilityField.onChange}
				/>
			</RadioGroup>
			<RadioGroup title="Employment type" name="workType">
				<RadioButton
					value="default"
					checked={workTypeField.value === "default"}
					text="Default"
					onChange={workTypeField.onChange}
				/>
				<RadioButton
					value="remote"
					checked={workTypeField.value === "remote"}
					text="Remote"
					onChange={workTypeField.onChange}
				/>
			</RadioGroup>
		</div>
	);
};

export default CreateFormRadios;
