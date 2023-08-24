import {Router} from "express";
import {authMiddleware} from "../../../common/auth";
import ProfileController from "./controller";

const router = Router();

router.put("/", authMiddleware, ProfileController.update);
router.get("/:username", ProfileController.getByUsername);
router.get("/:username/projects", ProfileController.getProjectsByUsername);
router.post("/avatar", authMiddleware, ProfileController.uploadAvatar);
router.delete("/avatar", authMiddleware, ProfileController.deleteAvatar);

export default router;
