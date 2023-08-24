import {Router} from "express";
import {authMiddleware} from "../../common/auth";
import {validationMiddleware} from "../../common/validation";
import ProjectController from "./controller";
import {createRules, updateRules} from "./validationRules";

const router = Router();

router.post(
	"/",
	authMiddleware,
	validationMiddleware(createRules),
	ProjectController.create
);
router.put(
	"/:id",
	authMiddleware,
	validationMiddleware(updateRules),
	ProjectController.updateById
);
router.delete("/:id", authMiddleware, ProjectController.deleteById);
router.get("/", ProjectController.getAll);
router.get("/:id", ProjectController.getById);

export default router;
