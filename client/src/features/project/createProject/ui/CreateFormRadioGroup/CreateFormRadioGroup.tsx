import {Radio} from "@shared/ui";
import {useField} from "formik";
import {FormRadioGroupFieldStyled} from "./CreateFormRadioGroup.styled";

const CreateFormRadioGroup = () => {
	const [visibilityField] = useField("visibility");
	const [workTypeField] = useField("workType");

	return (
		<>
			<FormRadioGroupFieldStyled title="Visibility" name="visibility">
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
			</FormRadioGroupFieldStyled>
			<FormRadioGroupFieldStyled title="Work type" name="workType">
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
			</FormRadioGroupFieldStyled>
		</>
	);
};

export default CreateFormRadioGroup;
