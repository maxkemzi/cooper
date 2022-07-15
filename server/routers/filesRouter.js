const {Router} = require("express");
const FilesController = require("../controllers/FilesController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = Router();

router.post("/avatar", authMiddleware, FilesController.uploadAvatar);
router.delete("/avatar", authMiddleware, FilesController.deleteAvatar);

module.exports = router;
