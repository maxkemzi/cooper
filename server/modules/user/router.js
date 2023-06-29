const {Router} = require("express");
const {authMiddleware} = require("../../common/auth");
const UserController = require("./controller");
const {profileRouter} = require("./profile");
const {favoriteProjectRouter} = require("./favoriteProject");

const router = Router();

router.get("/activate/:link", UserController.activate);

router.get("/projects", authMiddleware, UserController.getProjects);

router.delete("/", authMiddleware, UserController.deleteById);

router.use("/profile", profileRouter);

router.use("/favoriteProject", favoriteProjectRouter);

module.exports = router;
