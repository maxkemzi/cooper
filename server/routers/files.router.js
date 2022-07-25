const {Router} = require("express");
const FilesController = require("../controllers/files.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.post("/avatar", authMiddleware, FilesController.uploadAvatar);
router.delete("/avatar", authMiddleware, FilesController.deleteAvatar);

module.exports = router;
