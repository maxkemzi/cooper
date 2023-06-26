const uuid = require("uuid");
const fs = require("fs");
const path = require("path");
const {ErrorThrower} = require("../error");

class FileManager {
	static #staticDirPath = process.env.STATIC_DIR_PATH;

	static async save(file, fileName) {
		await file.mv(this.#getFullPath(fileName));
	}

	static async delete(fileName) {
		await fs.unlink(this.#getFullPath(fileName), err => {
			if (err) {
				ErrorThrower.throwInternalServer();
			}
		});
	}

	static #getFullPath(fileName) {
		return path.join(this.#staticDirPath, fileName);
	}

	static generateNameWithExt(extension) {
		return `${uuid.v4()}${extension}`;
	}
}

module.exports = FileManager;
