const {validationResult} = require("express-validator");
const {ErrorThrower} = require("../error");

const validationMiddleware = validationRules => async (req, res, next) => {
	try {
		for (let i = 0; i < validationRules.length; i += 1) {
			const validationRule = validationRules[i];
			// eslint-disable-next-line no-await-in-loop
			const result = await validationRule.run(req);
			if (result.errors.length) {
				break;
			}
		}

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			ErrorThrower.throwValidation(errors.array());
		}

		next();
	} catch (e) {
		next(e);
	}
};

module.exports = validationMiddleware;
