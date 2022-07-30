const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch {
    res.status(500).send(e);
  }
});

router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  console.log(updates, "up");
  const allowedUpdated = ["name", "email", "age", "password"];
  const isValideUpdate = updates.every((update) =>
    allowedUpdated.includes(update)
  );
  if (!isValideUpdate) {
    return res.status(500).send({ error: "send a proper input" });
  }
  try {
    const user = User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send();
    }
  } catch (e) {
    res.status.send(e);
  }

  res.status(200).send({ success: true });
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
  } catch (e) {
    res.status.send(e);
  }
  res.status(200).send({ success: true });
});

module.exports = router;
