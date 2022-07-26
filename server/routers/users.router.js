const {Router} = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const UsersController = require("../controllers/users.controller");
const validateUser = require("../validators/users");

const router = Router();

router.get("/", authMiddleware, UsersController.getAll);

router.get("/:username", UsersController.getByUsername);

router.put("/", authMiddleware, validateUser(), UsersController.updateOne);

router.get("/activate/:link", UsersController.activate);

router.post(
	"/favorites/:projectId",
	authMiddleware,
	UsersController.addToFavorites
);

router.delete(
	"/favorites/:projectId",
	authMiddleware,
	UsersController.removeFromFavorites
);

module.exports = router;
