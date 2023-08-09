import {Router} from "express";
import CategoryController from "./controller";

const router = Router();

router.post("/", CategoryController.create);

router.get("/", CategoryController.getAll);

export default router;
