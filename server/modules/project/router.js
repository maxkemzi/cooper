const {Router} = require("express");
const {authMiddleware} = require("../../common/auth");
const ProjectController = require("./controller");
const {createRules, updateRules} = require("./validationRules");
const {validationMiddleware} = require("../../common/validation");

const router = Router();

router.post(
	"/",
	authMiddleware,
	validationMiddleware(createRules),
	ProjectController.create
);

router.get("/", ProjectController.getAll);
router.get("/:id", ProjectController.getById);

router.put(
	"/:id",
	authMiddleware,
	validationMiddleware(updateRules),
	ProjectController.updateById
);

router.delete("/:id", authMiddleware, ProjectController.deleteById);

module.exports = router;
