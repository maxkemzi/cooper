import {RouteNames} from "@shared/constants";
import {Button} from "@shared/ui";
import {memo} from "react";

const SignupButton = memo(() => (
	<Button as="routeLink" to={RouteNames.Signup} size="md" variant="outline">
		SIGN UP
	</Button>
));

export default SignupButton;
