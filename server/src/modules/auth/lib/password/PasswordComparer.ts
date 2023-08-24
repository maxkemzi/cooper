import bcrypt from "bcryptjs";

class PasswordComparer {
	static async compareToHash(
		password: string,
		hashedPassword: string
	): Promise<boolean> {
		const isEqual = await bcrypt.compare(password, hashedPassword);
		return isEqual;
	}
}

export default PasswordComparer;
