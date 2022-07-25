const {Router} = require("express");
const authRouter = require("./auth.router");
const projectsRouter = require("./projects.router");
const usersRouter = require("./users.router");
const filesRouter = require("./files.router");
const emailRouter = require("./email.router");
const categoriesRouter = require("./categories.router");

const router = Router();

router.use("/auth", authRouter);
router.use("/projects", projectsRouter);
router.use("/users", usersRouter);
router.use("/files", filesRouter);
router.use("/email", emailRouter);
router.use("/categories", categoriesRouter);

module.exports = router;
