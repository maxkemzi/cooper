import bcrypt from "bcryptjs";

class PasswordHasher {
	static async hash(password: string): Promise<string> {
		const hashedPassword = await bcrypt.hash(password, 5);
		return hashedPassword;
	}
}

export default PasswordHasher;
