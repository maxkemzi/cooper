import {NextFunction, Response} from "express";
import {CustomRequest} from "../../types";
import CategoryService from "./service";

class CategoryController {
	static async getAll(req: CustomRequest, res: Response, next: NextFunction) {
		try {
			const categories = await CategoryService.getAll();

			res.json(categories);
		} catch (e) {
			next(e);
		}
	}

	static async create(req: CustomRequest, res: Response, next: NextFunction) {
		try {
			const {name} = req.body;

			const category = await CategoryService.create({name});

			res.json(category);
		} catch (e) {
			next(e);
		}
	}
}

export default CategoryController;
