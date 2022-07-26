const {body} = require("express-validator");

const validateRegistration = () => [
	body("email").isString().notEmpty().isLength({max: 200}).isEmail(),
	body("password").isString().notEmpty().isLength({
		min: 4,
		max: 12
	}),
	body("username").isString().notEmpty().isLength({
		min: 3,
		max: 10
	})
];

const validateLoginWithUsername = () => [
	body("username").isString().notEmpty().isLength({
		min: 3,
		max: 10
	}),
	body("password").isString().notEmpty().isLength({
		min: 4,
		max: 12
	})
];

const validateLoginWithEmail = () => [
	body("email").isString().notEmpty().isLength({max: 200}).isEmail(),
	body("password").isString().notEmpty().isLength({
		min: 4,
		max: 12
	})
];

module.exports = {
	validateLoginWithEmail,
	validateLoginWithUsername,
	validateRegistration
};
