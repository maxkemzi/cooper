const {Router} = require("express");
const {authRouter} = require("../modules/auth");
const {projectRouter} = require("../modules/project");
const {userRouter} = require("../modules/user");
const {emailRouter} = require("../modules/email");
const {categoryRouter} = require("../modules/category");

const router = Router();

router.use("/auth", authRouter);
router.use("/project", projectRouter);
router.use("/user", userRouter);
router.use("/email", emailRouter);
router.use("/category", categoryRouter);

module.exports = router;
