import {FormRadioGroupField} from "@shared/form";
import {Radio} from "@shared/ui";
import {useField} from "formik";
import {RadioGroupsStyled} from "./CreateFormRadioGroup.styled";

const CreateFormRadioGroup = () => {
	const [visibilityField] = useField("visibility");
	const [workTypeField] = useField("workType");

	return (
		<RadioGroupsStyled>
			<FormRadioGroupField title="Visibility" name="visibility">
				<Radio
					label="Public"
					InputProps={{
						value: "public",
						checked: visibilityField.value === "public"
					}}
				/>
				<Radio
					label="Private"
					InputProps={{
						value: "private",
						checked: visibilityField.value === "private"
					}}
				/>
			</FormRadioGroupField>
			<FormRadioGroupField title="Work type" name="workType">
				<Radio
					label="Onsite"
					InputProps={{
						value: "onsite",
						checked: workTypeField.value === "onsite"
					}}
				/>
				<Radio
					label="Remote"
					InputProps={{
						value: "remote",
						checked: workTypeField.value === "remote"
					}}
				/>
			</FormRadioGroupField>
		</RadioGroupsStyled>
	);
};

export default CreateFormRadioGroup;
