const express = require("express");
const questionSchema = require("../models/questions");
const router = express();
require("dotenv/config");

// Get all questions
router.get("/api/getQuestions", async (req, res) => {
  const questions = await questionSchema.find();
  res.json(questions);
});

// Add a question
router.post("/api/addQuestion", async (req, res) => {
  const question = new questionSchema({ ...req.body});
  try {
    const savedQuestion = await question.save();
    res.json(savedQuestion);
  } catch (err) {
    res.json({ message: err });
  }
});


module.exports = router;
