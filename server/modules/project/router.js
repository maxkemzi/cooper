import {Router} from "express";
import {authMiddleware} from "../../common/auth";
import ProjectController from "./controller";
import {createRules, updateRules} from "./validationRules";
import {validationMiddleware} from "../../common/validation";

const router = Router();

router.post(
	"/",
	authMiddleware,
	validationMiddleware(createRules),
	ProjectController.create
);

router.get("/", ProjectController.getAll);
router.get("/:id", ProjectController.getById);

router.put(
	"/:id",
	authMiddleware,
	validationMiddleware(updateRules),
	ProjectController.updateById
);

router.delete("/:id", authMiddleware, ProjectController.deleteById);

export default router;
