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
    const imageQuestion = {
      question_img: req.files['question_img'][0].path,
    }
    const savedQuestion = await question.save();
    res.json(savedQuestion);
  } catch (err) {
    res.status(500).json({ message: "Error uploading the image", error: err });
  }
});


module.exports = router;
