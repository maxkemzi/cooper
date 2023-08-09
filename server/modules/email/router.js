import {Router} from "express";
import EmailController from "./controller";
import {authMiddleware} from "../../common/auth";
import {emailRules} from "./validationRules";
import {validationMiddleware} from "../../common/validation";

const router = Router();

router.post(
	"/contact",
	authMiddleware,
	validationMiddleware(emailRules),
	EmailController.sendContact
);

export default router;
