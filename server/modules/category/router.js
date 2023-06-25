const {Router} = require("express");
const CategoryController = require("./controller");

const router = Router();

router.post("/", CategoryController.create);

router.get("/", CategoryController.getAll);

module.exports = router;
