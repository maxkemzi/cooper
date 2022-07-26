import {
	FormButton,
	FormFields,
	FormTextareaField,
	FormTextField
} from "@components/Form";
import Title from "@components/Title/Title";
import useTypedDispatch from "@hooks/useTypedDispatch";
import useTypedSelector from "@hooks/useTypedSelector";
import useWindowSize from "@hooks/useWindowSize";
import EmailService from "@services/email/email.service";
import {getAuthIsAuth} from "@store/auth/auth.selectors";
import ScreenSizes from "@utils/constants/screenSizes";
import {contactFormValidation} from "@validation/index";
import {Form, Formik} from "formik";
import React from "react";
import {
	ContactFormAlert,
	ContactFormContent,
	StyledContactForm
} from "./ContactForm.styled";

const ContactForm = () => {
	const dispatch = useTypedDispatch();
	const isAuth = useTypedSelector(getAuthIsAuth);
	const {width} = useWindowSize();

	return (
		<StyledContactForm>
			<ContactFormContent>
				<Title
					marginBottom={width <= ScreenSizes.TabletWidth ? "12px" : "24px"}
					size="large"
				>
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
					}}
					validationSchema={contactFormValidation}
					validateOnBlur
				>
					<Form>
						<FormFields
							marginBottom={width <= ScreenSizes.TabletWidth ? "12px" : "24px"}
							gap={width <= ScreenSizes.TabletWidth ? "12px" : "20px"}
						>
							<FormTextField name="name" type="text" placeholder="Name" />
							<FormTextField name="email" type="email" placeholder="Email" />
							<FormTextareaField name="text" placeholder="Text" rows={3} />
						</FormFields>

						{!isAuth && (
							<ContactFormAlert>
								* You must be logged in to send the form.
							</ContactFormAlert>
						)}

						<FormButton disableCondition={!isAuth}>Send</FormButton>
					</Form>
				</Formik>
			</ContactFormContent>
		</StyledContactForm>
	);
};

export default ContactForm;
