import {
	FormButton,
	FormFields,
	FormTextareaField,
	FormTextField
} from "@components/Form";
import Title from "@components/Title/Title";
import useToast from "@hooks/useToast";
import useTypedDispatch from "@hooks/useTypedDispatch";
import useTypedSelector from "@hooks/useTypedSelector";
import EmailService from "@services/email/email.service";
import {contactFormValidation} from "@validation/index";
import {Form, Formik} from "formik";
import React, {useCallback} from "react";
import {
	ContactFormAlert,
	ContactFormContent,
	StyledContactForm
} from "./ContactForm.styled";

const ContactForm = () => {
	const dispatch = useTypedDispatch();
	const isAuth = useTypedSelector(state => state.authState.isAuth);
	const error = useTypedSelector(state => state.appState.error);
	const {showToast} = useToast();

	const handleError = useCallback(() => {
		if (error) {
			showToast("danger", "Something went wrong.");
		} else {
			showToast("success", "Email has been sent.");
		}
	}, [error, showToast]);

	return (
		<StyledContactForm>
			<ContactFormContent>
				<Title marginBottom="24px" size="large">
					Contact
				</Title>
				<Formik
					initialValues={{
						name: "",
						email: "",
						text: ""
					}}
					onSubmit={async values => {
						await dispatch(EmailService.send(values));
						handleError();
					}}
					validationSchema={contactFormValidation}
					validateOnBlur
				>
					<Form>
						<FormFields marginBottom="24px" gap="20px">
							<FormTextField name="name" type="text" placeholder="Name" />
							<FormTextField name="email" type="email" placeholder="Email" />
							<FormTextareaField
								name="text"
								placeholder="Text"
								maxRows={3}
								minRows={3}
							/>
						</FormFields>

						{!isAuth && (
							<ContactFormAlert>
								* You must be logged in to send the form.
							</ContactFormAlert>
						)}

						<FormButton
							onClick={() => showToast("success", "Email has been sent.")}
						>
							Send
						</FormButton>
					</Form>
				</Formik>
			</ContactFormContent>
		</StyledContactForm>
	);
};

export default ContactForm;
