const {Router} = require("express");
const FavoriteProjectController = require("./controller");
const {authMiddleware} = require("../../../common/auth");

const router = Router();

router.get("/", authMiddleware, FavoriteProjectController.getAll);
router.post("/:projectId", authMiddleware, FavoriteProjectController.add);
router.delete("/:projectId", authMiddleware, FavoriteProjectController.remove);

module.exports = router;
