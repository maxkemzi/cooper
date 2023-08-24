import {Router} from "express";
import {authMiddleware} from "../../common/auth";
import {validationMiddleware} from "../../common/validation";
import EmailController from "./controller";
import {emailRules} from "./validationRules";

const router = Router();

router.post(
	"/contact",
	authMiddleware,
	validationMiddleware(emailRules),
	EmailController.sendContact
);

export default router;
