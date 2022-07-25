const {Router} = require("express");
const EmailController = require("../controllers/email.controller");

const router = Router();

router.post("/", EmailController.send);

module.exports = router;
