import {v4 as uuidv4} from "uuid";
import fs from "fs/promises";
import path from "path";
import {UploadedFile} from "express-fileupload";

class FileManager {
	static #staticDirPath: string = process.env.STATIC_DIR_PATH as string;

	static async save(file: UploadedFile, fileName: string): Promise<void> {
		await file.mv(FileManager.#getFullPath(fileName));
	}

	static async delete(fileName: string): Promise<void> {
		await fs.unlink(FileManager.#getFullPath(fileName));
	}

	static #getFullPath(fileName: string): string {
		return path.join(FileManager.#staticDirPath, fileName);
	}

	static generateNameWithExt(extension: string): string {
		return `${uuidv4()}${extension}`;
	}
}

export default FileManager;
