const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

router.post("/user", UsersController.Create);
router.get("/user", UsersController.Find);

module.exports = router;
