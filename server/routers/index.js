const {Router} = require("express");
const authRouter = require("./authRouter");
const projectsRouter = require("./projectsRouter");
const usersRouter = require("./usersRouter");
const filesRouter = require("./filesRouter");
const emailRouter = require("./emailRouter");
const categoriesRouter = require("./categoriesRouter");

const router = Router();

router.use("/auth", authRouter);
router.use("/projects", projectsRouter);
router.use("/users", usersRouter);
router.use("/files", filesRouter);
router.use("/email", emailRouter);
router.use("/categories", categoriesRouter);

module.exports = router;
