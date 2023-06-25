const {body} = require("express-validator");

const emailRules = [
	body("name").isString().notEmpty().isLength({min: 3, max: 16}),
	body("email").isString().notEmpty().isLength({max: 200}).isEmail()
];

module.exports = {emailRules};
