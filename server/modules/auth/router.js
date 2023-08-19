import {Router} from "express";
import AuthController from "./controller";
import {validationMiddleware} from "../../common/validation";
import {
	signupRules,
	loginWithEmailRules,
	loginWithUsernameRules
} from "./validationRules";

const router = Router();

router.post(
	"/signup",
	validationMiddleware(signupRules),
	AuthController.signUp
);
router.post(
	"/login-email",
	validationMiddleware(loginWithEmailRules),
	AuthController.loginWithEmail
);
router.post(
	"/login-username",
	validationMiddleware(loginWithUsernameRules),
	AuthController.loginWithUsername
);
router.post("/logout", AuthController.logout);
router.get("/refresh", AuthController.refresh);

export default router;
