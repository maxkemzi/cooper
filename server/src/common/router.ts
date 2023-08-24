import {Router} from "express";
import {authRouter} from "../modules/auth";
import {categoryRouter} from "../modules/category";
import {emailRouter} from "../modules/email";
import {projectRouter} from "../modules/project";
import {userRouter} from "../modules/user";

const router = Router();

router.use("/auth", authRouter);
router.use("/category", categoryRouter);
router.use("/email", emailRouter);
router.use("/project", projectRouter);
router.use("/user", userRouter);

export default router;
