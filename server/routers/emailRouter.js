const {Router} = require("express");
const EmailController = require("../controllers/EmailController");

const router = Router();

router.post("/", EmailController.send);

module.exports = router;
