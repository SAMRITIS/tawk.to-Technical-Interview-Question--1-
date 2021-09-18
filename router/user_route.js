const express = require("express");
const router = express.Router();
const user = require("../controller/sign.controller");

router.post("/createuser", user.createuser);
router.post("/createtag", user.createtag);
router.get("/gettag", user.gettag);
router.get("/mytag", user.mytag);
router.get("/filtertag", user.filtertag);
router.post("/updatetag", user.updatetag);
router.delete("/deletetag", user.deletetag);

module.exports = router;
