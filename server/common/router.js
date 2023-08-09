import {Router} from "express";
import {authRouter} from "../modules/auth";
import {projectRouter} from "../modules/project";
import {userRouter} from "../modules/user";
import {emailRouter} from "../modules/email";
import {categoryRouter} from "../modules/category";

const router = Router();

router.use("/auth", authRouter);
router.use("/project", projectRouter);
router.use("/user", userRouter);
router.use("/email", emailRouter);
router.use("/category", categoryRouter);

export default router;
