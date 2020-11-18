const e = require("express");
const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscribers");

// Get all subscribers
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Get one subscriber
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});
// Create a subscriber
router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Updating a subscriber
router.patch("/:id", (req, res) => {});
// Delete a subscriber
router.delete("/:id", (req, res) => {});

module.exports = router;
