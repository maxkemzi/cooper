const {Router} = require("express");
const EmailController = require("../controllers/email.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const validateEmail = require("../validators/email");

const router = Router();

router.post("/", authMiddleware, validateEmail(), EmailController.send);

module.exports = router;
