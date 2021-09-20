const express = require("express");
const router = express.Router();
const user = require("../controller/sign.controller");

// Create User Router
router.post("/createuser", user.createuser);

// Create Tag Router
router.post("/createtag", user.createtag);

// Get all Tag
router.get("/gettag", user.gettag);

// User can get all tag created by him
router.get("/mytag/:id", user.mytag);

// Filter Tag by keyword or alphabetical order
router.get("/filtertag", user.filtertag);

// User can updated tag created by him
router.post("/updatetag", user.updatetag);

// User Can Delete Tag Created By Him
router.delete("/deletetag/:id/:tagId", user.deletetag);

module.exports = router;
