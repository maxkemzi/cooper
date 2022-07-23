const {Router} = require("express");
const {body} = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");
const ProjectsController = require("../controllers/ProjectsController");

const router = Router();

router.get("/user/:username", ProjectsController.getByUsername);
router.get("/user", authMiddleware, ProjectsController.getByAuth);
router.get("/favorites", authMiddleware, ProjectsController.getFavorites);
router.get("/", ProjectsController.getAll);
router.get("/:id", ProjectsController.getOneById);
router.post(
	"/",
	authMiddleware,
	body("title", "Title is empty!").isLength({min: 6, max: 24}),
	body("description", "Text must be at least 10 symbols long").isLength({
		min: 11,
		max: 500
	}),
	ProjectsController.create
);
router.delete("/:id", authMiddleware, ProjectsController.deleteOne);
router.put("/:id", authMiddleware, ProjectsController.updateOne);

module.exports = router;
