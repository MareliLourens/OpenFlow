const express = require("express");
const jwt = require("jsonwebtoken");
const userSchema = require("../models/users");
const router = express();
require("dotenv/config");
const secretKey = process.env.SECRET_KEY;

// Get all users
router.get("/api/getUsers", async (req, res) => {
  const users = await userSchema.find();
  res.json(users);
});

// Add a user
router.post("/api/addUser", async (req, res) => {
  const user = new userSchema({ ...req.body});
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get a specific user
router.get("/api/getUser/:userId", async (req, res) => {
  try {
    const user = await userSchema.findById(req.params.userId);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete a specific user
router.delete("/api/deleteUser/:userId", async (req, res) => {
  try {
    const removedUser = await userSchema.remove({ _id: req.params.userId });
    res.json(removedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a specific user
router.patch("/api/updateUser/:userId", async (req, res) => {
  try {
    const updatedUser = await userSchema.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          name: req.body.name,
          surname: req.body.surname,
          profileimage: req.body.profileimage,
          email: req.body.email,
          password: req.body.password,
          superuser: req.body.superuser,
          karma: req.body.karma,
          tags: req.body.tags,
        },
      }
    );
    res.json(updatedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// Login a user
router.post("/api/login", async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await userSchema.findOne({ username, password });
      if (!user) {
        return res.status(401).json({ message: "Authentication failed" });
      }
  
      const token = jwt.sign({ userId: user._id }, secretKey, {
        expiresIn: "2h",
      });
      res.json({ token });
    } catch (error) {
      console.error("Error during login", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

module.exports = router;
