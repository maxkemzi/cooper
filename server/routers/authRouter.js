const {Router} = require("express");
const {body} = require("express-validator");
const AuthController = require("../controllers/AuthController");

const router = Router();

router.post(
	"/register",
	body("email", "Invalid email").isEmail(),
	body("password", "Password must contain at least 4 symbols").isLength({
		min: 4,
		max: 12
	}),
	body("username", "Username must contain at least 3 symbols").isLength({
		min: 3,
		max: 10
	}),
	AuthController.register
);
router.post("/login-email", AuthController.loginWithEmail);
router.post("/login-username", AuthController.loginWithUsername);
router.post("/logout", AuthController.logout);
router.get("/refresh", AuthController.refresh);

module.exports = router;
