const bcrypt = require("bcryptjs");

class PasswordComparer {
	static async compareToHash(password, hashedPassword) {
		const isEqual = await bcrypt.compare(password, hashedPassword);
		return isEqual;
	}
}

module.exports = PasswordComparer;
