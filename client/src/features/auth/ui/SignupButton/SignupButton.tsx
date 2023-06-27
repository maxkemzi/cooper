import {RouteName} from "@shared/constants";
import {Button} from "@shared/ui";
import {memo} from "react";

const SignupButton = memo(() => (
	<Button as="routeLink" to={RouteName.SIGNUP} size="md" variant="outline">
		SIGN UP
	</Button>
));

export default SignupButton;
