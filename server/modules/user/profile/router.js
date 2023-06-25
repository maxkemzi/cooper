const {Router} = require("express");
const ProfileController = require("./controller");
const {authMiddleware} = require("../../../common/auth");

const router = Router();

router.put("/", authMiddleware, ProfileController.updateById);

router.get("/:username", ProfileController.getByUsername);
router.get("/:username/projects", ProfileController.getProjectsByUsername);

router.post("/avatar", authMiddleware, ProfileController.uploadAvatar);
router.delete("/avatar", authMiddleware, ProfileController.deleteAvatar);

module.exports = router;
