const {Router} = require("express");
const CategoriesController = require("../controllers/CategoriesController");

const router = Router();

router.get("/", CategoriesController.getAll);

module.exports = router;
