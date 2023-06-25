const {Router} = require("express");
const EmailController = require("./controller");
const {authMiddleware} = require("../../common/auth");
const {emailRules} = require("./validationRules");
const {validationMiddleware} = require("../../common/validation");

const router = Router();

router.post(
	"/contact",
	authMiddleware,
	validationMiddleware(emailRules),
	EmailController.sendContact
);

module.exports = router;
