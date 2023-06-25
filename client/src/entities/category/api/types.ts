import {AxiosResponse} from "axios";
import {Category} from "../model/types";

interface CategoryFromApi {
	id: string;
	name: string;
}

type MultipleCategoryRes = AxiosResponse<Category[]>;
type MultipleCategoryResFromApi = CategoryFromApi[];

export type {CategoryFromApi, MultipleCategoryRes, MultipleCategoryResFromApi};
