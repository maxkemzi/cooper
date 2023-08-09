import {v4 as uuidv4} from "uuid";
import fs from "fs";
import path from "path";
import {ErrorThrower} from "../error";

class FileManager {
	static #staticDirPath = process.env.STATIC_DIR_PATH;

	static async save(file, fileName) {
		await file.mv(FileManager.#getFullPath(fileName));
	}

	static async delete(fileName) {
		await fs.unlink(FileManager.#getFullPath(fileName), err => {
			if (err) {
				ErrorThrower.throwInternalServer();
			}
		});
	}

	static #getFullPath(fileName) {
		return path.join(FileManager.#staticDirPath, fileName);
	}

	static generateNameWithExt(extension) {
		return `${uuidv4()}${extension}`;
	}
}

export default FileManager;
