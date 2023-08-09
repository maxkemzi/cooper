import {body} from "express-validator";

const userRules = [
	body("username").isString().notEmpty().isLength({
		min: 3,
		max: 10
	}),
	body("email").isString().notEmpty().isLength({max: 200}).isEmail(),
	body("description").isString().isLength({max: 200}),
	body("location").isString().isLength({max: 30})
];

export {userRules};
