const {Router} = require("express");
const AuthController = require("../controllers/auth.controller");
const {
	validateLoginWithEmail,
	validateLoginWithUsername,
	validateRegistration
} = require("../validators/auth");

const router = Router();

router.post("/register", validateRegistration(), AuthController.register);

router.post(
	"/login-email",
	validateLoginWithEmail(),
	AuthController.loginWithEmail
);

router.post(
	"/login-username",
	validateLoginWithUsername(),
	AuthController.loginWithUsername
);

router.post("/logout", AuthController.logout);

router.get("/refresh", AuthController.refresh);

module.exports = router;
