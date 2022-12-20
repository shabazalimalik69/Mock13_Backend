const express = require("express");
const { postUser, randomApi, getUser, updateScore } = require("../Controllers/userController");

const router = express.Router();

router.post("/user",postUser)
router.get("/randomword",randomApi)
router.get("/user",getUser)
router.put("/user/:id",updateScore)


module.exports = router;