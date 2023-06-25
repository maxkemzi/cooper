const {body} = require("express-validator");

const createRules = [
	body("title").isString().notEmpty().isLength({min: 5, max: 25}),
	body("description").isString().notEmpty().isLength({min: 10, max: 400}),
	body("visibility").isString().notEmpty().isIn(["public", "private"]),
	body("budget").isNumeric().isLength({min: 0, max: 1_000_000}),
	body("workType").isString().notEmpty().isIn(["remote", "onsite"]),
	body("categoryIds").isArray()
];

const updateRules = createRules.map(rule => rule.optional());

module.exports = {createRules, updateRules};
