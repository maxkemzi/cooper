import {Router} from "express";
import {authMiddleware} from "../../../common/auth";
import FavoriteProjectController from "./controller";

const router = Router();

router.get("/", authMiddleware, FavoriteProjectController.getAll);
router.post("/:projectId", authMiddleware, FavoriteProjectController.add);
router.delete("/:projectId", authMiddleware, FavoriteProjectController.remove);

export default router;
