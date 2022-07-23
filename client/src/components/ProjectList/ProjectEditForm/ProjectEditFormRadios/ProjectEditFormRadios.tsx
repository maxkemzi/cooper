import {RadioButton, RadioGroup} from "@components/RadioGroup";
import {useField} from "formik";
import React from "react";

const ProjectEditFormRadios = () => {
	const [visibilityField] = useField("visibility");
	const [workTypeField] = useField("workType");

	return (
		<div>
			<RadioGroup marginBottom="16px" title="Visibility" name="visibility">
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

export default ProjectEditFormRadios;
