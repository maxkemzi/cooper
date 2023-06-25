const {Router} = require("express");
const AuthController = require("./controller");
const {validationMiddleware} = require("../../common/validation");
const {
	signupRules,
	loginWithEmailRules,
	loginWithUsernameRules
} = require("./validationRules");

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

module.exports = router;
