const {Router} = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const UsersController = require("../controllers/UsersController");

const router = Router();

router.get("/", authMiddleware, UsersController.getAll);
router.get("/:username", UsersController.getOneByUsername);
router.put("/save/:projectId", authMiddleware, UsersController.saveProject);
router.put("/unsave/:projectId", authMiddleware, UsersController.unsaveProject);
router.put("/", authMiddleware, UsersController.updateOne);
router.get("/activate/:link", UsersController.activate);

module.exports = router;
