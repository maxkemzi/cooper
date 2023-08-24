import {ValidationChain, body} from "express-validator";

const usernameRule: ValidationChain = body("username")
	.isString()
	.notEmpty()
	.isLength({
		min: 3,
		max: 10
	});
const emailRule: ValidationChain = body("email")
	.isString()
	.notEmpty()
	.isLength({max: 200})
	.isEmail();
const passwordRule: ValidationChain = body("password")
	.isString()
	.notEmpty()
	.isLength({
		min: 4,
		max: 12
	});

const signupRules: ValidationChain[] = [emailRule, usernameRule, passwordRule];
const loginWithUsernameRules: ValidationChain[] = [usernameRule, passwordRule];
const loginWithEmailRules: ValidationChain[] = [emailRule, passwordRule];

export {loginWithEmailRules, loginWithUsernameRules, signupRules};
