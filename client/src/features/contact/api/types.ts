import {AxiosResponse} from "axios";

type EmailSuccessRes = AxiosResponse<{
	success: boolean;
}>;

type EmailSuccessResFromApi = {
	success: boolean;
};

type EmailContactDataToApi = {
	text: string;
	name: string;
	email: string;
};

export type {EmailContactDataToApi, EmailSuccessRes, EmailSuccessResFromApi};
