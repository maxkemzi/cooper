import $api from "@axios/index";

class FilesAPI {
	static async uploadAvatar(file: any) {
		const formData = new FormData();
		formData.append("file", file);
		return $api.post("/files/avatar", formData);
	}

	static async deleteAvatar() {
		return $api.delete("/files/avatar");
	}
}

export default FilesAPI;
