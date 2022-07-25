const {Router} = require("express");
const CategoriesController = require("../controllers/categories.controller");

const router = Router();

router.get("/", CategoriesController.getAll);

module.exports = router;
