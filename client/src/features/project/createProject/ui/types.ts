import {ProjectToApi} from "@entities/project";

interface CreateFormValues extends Omit<Required<ProjectToApi>, "budget"> {
	budget: number | "";
}

export type {CreateFormValues};
