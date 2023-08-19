import {v4 as uuidv4} from "uuid";
import fs from "fs/promises";
import path from "path";

class FileManager {
	static #staticDirPath = process.env.STATIC_DIR_PATH;

	static async save(file, fileName) {
		await file.mv(FileManager.#getFullPath(fileName));
	}

	static async delete(fileName) {
		await fs.unlink(FileManager.#getFullPath(fileName));
	}

	static #getFullPath(fileName) {
		return path.join(FileManager.#staticDirPath, fileName);
	}

	static generateNameWithExt(extension) {
		return `${uuidv4()}${extension}`;
	}
}

export default FileManager;
