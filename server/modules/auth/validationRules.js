const {body} = require("express-validator");

const usernameRule = body("username").isString().notEmpty().isLength({
	min: 3,
	max: 10
});
const emailRule = body("email")
	.isString()
	.notEmpty()
	.isLength({max: 200})
	.isEmail();
const passwordRule = body("password").isString().notEmpty().isLength({
	min: 4,
	max: 12
});

const signupRules = [emailRule, usernameRule, passwordRule];
const loginWithUsernameRules = [usernameRule, passwordRule];
const loginWithEmailRules = [emailRule, passwordRule];

module.exports = {
	signupRules,
	loginWithUsernameRules,
	loginWithEmailRules
};
