import $api from "@axios/index";
import FilesResponse from "@customTypes/apis/files";
import {AxiosResponse} from "axios";

class FilesAPI {
	static async uploadAvatar(file: any): Promise<AxiosResponse<FilesResponse>> {
		const formData = new FormData();
		formData.append("file", file);
		return $api.post<FilesResponse>("/files/avatar", formData);
	}

	static async deleteAvatar(): Promise<AxiosResponse<FilesResponse>> {
		return $api.delete<FilesResponse>("/files/avatar");
	}
}

export default FilesAPI;
