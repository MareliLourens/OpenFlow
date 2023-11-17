const express = require('express');
const router = express.Router();
const { Like } = require("../models/Like");
const { Dislike } = require("../models/Dislike");

// Route to handle getting likes and dislikes for a specific answer
router.post("/api/getLikesAndDislikes", async (req, res) => {
  const { answerId } = req.body;

  try {
    const likes = await Like.find({ answerId }).exec();
    const dislikes = await Dislike.find({ answerId }).exec();

    res.status(200).json({
      userId: req.user.id, 
      likes: likes.map((like) => like.userId),
      dislikes: dislikes.map((dislike) => dislike.userId),
    });
  } catch (error) {
    console.error("Error fetching likes and dislikes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to handle liking an answer
router.post("/api/like", async (req, res) => {
  const { answerId, userId } = req.body;

  try {
    // Your logic to handle liking an answer goes here
    // Save the like information in the Like model
    await Like.create({ answerId, userId });

    res.status(200).json({ message: "Answer liked successfully" });
  } catch (error) {
    console.error("Error liking answer:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to handle disliking an answer
router.post("/api/dislike", async (req, res) => {
  const { answerId, userId } = req.body;

  try {
    // Your logic to handle disliking an answer goes here
    // Save the dislike information in the Dislike model
    await Dislike.create({ answerId, userId });

    res.status(200).json({ message: "Answer disliked successfully" });
  } catch (error) {
    console.error("Error disliking answer:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
