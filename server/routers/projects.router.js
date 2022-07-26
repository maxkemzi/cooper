const {Router} = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const ProjectsController = require("../controllers/projects.controller");
const validateProject = require("../validators/projects");

const router = Router();

router.get("/user/:username", ProjectsController.getByUsername);

router.get("/user", authMiddleware, ProjectsController.getByAuth);

router.get("/favorites", authMiddleware, ProjectsController.getFavorites);

router.get("/", ProjectsController.getAll);

router.get("/:id", ProjectsController.getById);

router.post("/", authMiddleware, validateProject(), ProjectsController.create);

router.delete("/:id", authMiddleware, ProjectsController.deleteOne);

router.put(
	"/:id",
	authMiddleware,
	validateProject(),
	ProjectsController.updateOne
);

module.exports = router;
