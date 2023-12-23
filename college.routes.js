const express = require("express");
const router = express.Router();
const collegeController = require("./Controller/college.controller");

// Define your college routes here
router.post("/", collegeController.CollegePostFunction);
router.get("/", collegeController.collegeGetFunction);
router.get("/:id", collegeController.collegeGetSingleFunction);
router.put("/:id", collegeController.collegeUpdateFunction);
router.delete("/:id", collegeController.collegeDeleteFunction);

module.exports = router;
