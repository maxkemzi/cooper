import {Router} from "express";
import FavoriteProjectController from "./controller";
import {authMiddleware} from "../../../common/auth";

const router = Router();

router.get("/", authMiddleware, FavoriteProjectController.getAll);
router.post("/:projectId", authMiddleware, FavoriteProjectController.add);
router.delete("/:projectId", authMiddleware, FavoriteProjectController.remove);

export default router;
