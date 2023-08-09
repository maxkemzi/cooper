import bcrypt from "bcryptjs";

class PasswordComparer {
	static async compareToHash(password, hashedPassword) {
		const isEqual = await bcrypt.compare(password, hashedPassword);
		return isEqual;
	}
}

export default PasswordComparer;
