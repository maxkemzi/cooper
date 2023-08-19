import {Router} from "express";
import {authMiddleware} from "../../common/auth";
import UserController from "./controller";
import {profileRouter} from "./profile";
import {favoriteProjectRouter} from "./favoriteProject";

const router = Router();

router.get("/activate/:link", UserController.activate);
router.get("/projects", authMiddleware, UserController.getProjects);
router.delete("/", authMiddleware, UserController.delete);

router.use("/profile", profileRouter);

router.use("/favoriteProject", favoriteProjectRouter);

export default router;
