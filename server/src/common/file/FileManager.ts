import {v4 as uuidv4} from "uuid";
import fs from "fs/promises";
import path from "path";
import {UploadedFile} from "express-fileupload";

class FileManager {
	static async save(file: UploadedFile, fileName: string): Promise<void> {
		await file.mv(FileManager.#getUploadPath(fileName));
	}

	static async delete(fileName: string): Promise<void> {
		await fs.unlink(FileManager.#getUploadPath(fileName));
	}

	static #getUploadPath(fileName: string): string {
		return path.join(process.cwd(), "uploads", fileName);
	}

	static generateNameWithExt(extension: string): string {
		return `${uuidv4()}${extension}`;
	}
}

export default FileManager;
