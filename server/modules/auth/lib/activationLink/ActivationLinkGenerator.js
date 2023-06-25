const uuid = require("uuid");

class ActivationLinkGenerator {
	static generate() {
		return uuid.v4();
	}
}

module.exports = ActivationLinkGenerator;
