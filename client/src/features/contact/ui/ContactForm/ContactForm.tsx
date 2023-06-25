import {selectIsAuth} from "@features/auth";
import {Form, FormButton, FormTextField} from "@shared/form";
import {useTypedDispatch, useTypedSelector} from "@shared/model";
import {Typography} from "@shared/ui";
import {Formik} from "formik";
import {EmailContactDataToApi} from "../../api/types";
import contactFormValidationSchema from "../../lib/contactFormValidationSchema";
import sendContactEmailThunk from "../../model/thunks/sendContactEmailThunk";
import {
	ContactFormAlert,
	ContactFormFields,
	StyledContactForm
} from "./ContactForm.styled";

type ContactFormValues = EmailContactDataToApi;

const ContactForm = () => {
	const dispatch = useTypedDispatch();
	const isAuth = useTypedSelector(selectIsAuth);

	const initialValues: ContactFormValues = {
		name: "",
		email: "",
		text: ""
	};

	const handleSubmit = async (values: ContactFormValues) => {
		await dispatch(sendContactEmailThunk(values));
	};

	return (
		<StyledContactForm>
			<Typography variant="h1" mb="lg">
				Contact
			</Typography>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={contactFormValidationSchema}
				validateOnBlur
			>
				<Form>
					<ContactFormFields>
						<FormTextField name="name" InputProps={{placeholder: "Name"}} />
						<FormTextField
							name="email"
							InputProps={{type: "email", placeholder: "Email"}}
						/>
						<FormTextField
							name="text"
							isMultiline
							TextareaProps={{rows: 3, placeholder: "Text"}}
						/>
					</ContactFormFields>

					{!isAuth ? (
						<ContactFormAlert>
							* You must be logged in to send the form.
						</ContactFormAlert>
					) : null}

					<FormButton isDisabled={!isAuth}>Send</FormButton>
				</Form>
			</Formik>
		</StyledContactForm>
	);
};

export default ContactForm;
