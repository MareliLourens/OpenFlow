
const express = require("express");
const answerSchema = require("../models/answers");
const router = express();
require("dotenv/config");

// Get all answers
router.get("/api/getAnswers", async (req, res) => {
  const answers = await answerSchema.find();
  res.json(answers);
});

// Add an answer
router.post("/api/addAnswer", async (req, res) => {
  const answer = new answerSchema({ ...req.body});
  try {
    const savedAnswer = await answer.save();
    res.json(savedAnswer);
  } catch (err) {
    res.json({ message: err });
  }
});


module.exports = router;

// const express = require("express");
// const router = express.Router();
// const mongoose = require('mongoose');
// const Answer = require("../models/answers");
// // const requireLogin = require('../middleware/requireLogin'); 
// require("dotenv/config");

// // Get all answers
// router.get("/api/getAnswers", async (req, res) => {
//   try {
//     const answers = await Answer.find();
//     res.json(answers);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Add an answer
// router.post("/api/addAnswer", async (req, res) => {
//   try {
//     const answer = new Answer({ ...req.body });
//     const savedAnswer = await answer.save();
//     res.json(savedAnswer);
//   } catch (err) {
//     res.status(422).json({ error: err.message });
//   }
// });

// // Like an answer
// router.put('/api/likeAnswer', requireLogin, async (req, res) => {
//   try {
//     const updatedAnswer = await Answer.findByIdAndUpdate(
//       req.body.answerId,
//       { $push: { upRating: req.user._id } },
//       { new: true }
//     );
//     res.json(updatedAnswer);
//   } catch (err) {
//     res.status(422).json({ error: err.message });
//   }
// });

// // Unlike an answer
// router.put('/api/unlikeAnswer', requireLogin, async (req, res) => {
//   try {
//     const updatedAnswer = await Answer.findByIdAndUpdate(
//       req.body.answerId,
//       { $pull: { upRating: req.user._id } },
//       { new: true }
//     );
//     res.json(updatedAnswer);
//   } catch (err) {
//     res.status(422).json({ error: err.message });
//   }
// });

// // Dislike an answer
// router.put('/api/dislikeAnswer', requireLogin, async (req, res) => {
//   try {
//     const updatedAnswer = await Answer.findByIdAndUpdate(
//       req.body.answerId,
//       { $push: { downRating: req.user._id } },
//       { new: true }
//     );
//     res.json(updatedAnswer);
//   } catch (err) {
//     res.status(422).json({ error: err.message });
//   }
// });

// // Undislike an answer
// router.put('/api/undislikeAnswer', requireLogin, async (req, res) => {
//   try {
//     const updatedAnswer = await Answer.findByIdAndUpdate(
//       req.body.answerId,
//       { $pull: { downRating: req.user._id } },
//       { new: true }
//     );
//     res.json(updatedAnswer);
//   } catch (err) {
//     res.status(422).json({ error: err.message });
//   }
// });

// module.exports = router;


// // Toggle like or unlike an answer
// router.put('/api/toggleLikeAnswer', requireLogin, async (req, res) => {
//   try {
//     const { answerId } = req.body;
//     const answer = await Answer.findById(answerId);

//     if (!answer) {
//       return res.status(404).json({ error: "Answer not found" });
//     }

//     const userId = req.user._id;

//     // Check if the user already liked the answer
//     const isLiked = answer.upRating.includes(userId);

//     if (isLiked) {
//       // If liked, unlike the answer
//       answer.upRating.pull(userId);
//     } else {
//       // If not liked, like the answer
//       answer.upRating.push(userId);
//     }

//     const updatedAnswer = await answer.save();
//     res.json(updatedAnswer);
//   } catch (err) {
//     res.status(422).json({ error: err.message });
//   }
// });

// // Toggle dislike or undislike an answer
// router.put('/api/toggleDislikeAnswer', requireLogin, async (req, res) => {
//   try {
//     const { answerId } = req.body;
//     const answer = await Answer.findById(answerId);

//     if (!answer) {
//       return res.status(404).json({ error: "Answer not found" });
//     }

//     const userId = req.user._id;

//     // Check if the user already disliked the answer
//     const isDisliked = answer.downRating.includes(userId);

//     if (isDisliked) {
//       // If disliked, undislike the answer
//       answer.downRating.pull(userId);
//     } else {
//       // If not disliked, dislike the answer
//       answer.downRating.push(userId);
//     }

//     const updatedAnswer = await answer.save();
//     res.json(updatedAnswer);
//   } catch (err) {
//     res.status(422).json({ error: err.message });
//   }
// });

// module.exports = router;
