import bcrypt from "bcryptjs";

class PasswordHasher {
	static async hash(password) {
		const hashedPassword = await bcrypt.hash(password, 5);
		return hashedPassword;
	}
}

export default PasswordHasher;
