import {Router} from "express";
import {authMiddleware} from "../../common/auth";
import UserController from "./controller";
import {favoriteProjectRouter} from "./favoriteProject";
import {profileRouter} from "./profile";

const router = Router();

router.get("/activate/:link", UserController.activate);
router.delete("/", authMiddleware, UserController.delete);
router.get("/projects", authMiddleware, UserController.getProjects);

router.use("/profile", profileRouter);
router.use("/favoriteProject", favoriteProjectRouter);

export default router;
