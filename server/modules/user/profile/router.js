import {Router} from "express";
import ProfileController from "./controller";
import {authMiddleware} from "../../../common/auth";

const router = Router();

router.put("/", authMiddleware, ProfileController.updateById);

router.get("/:username", ProfileController.getByUsername);
router.get("/:username/projects", ProfileController.getProjectsByUsername);

router.post("/avatar", authMiddleware, ProfileController.uploadAvatar);
router.delete("/avatar", authMiddleware, ProfileController.deleteAvatar);

export default router;
