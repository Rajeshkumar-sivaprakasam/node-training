const express = require("express");
const router = express.Router();
const Task = require("../model/task");

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);

  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/tasks/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  console.log(updates, "up");
  const allowedUpdated = ["discription", "isCompleted"];
  const isValideUpdate = updates.every((update) =>
    allowedUpdated.includes(update)
  );
  if (!isValideUpdate) {
    return res.status(500).send({ error: "send a proper input" });
  }
  try {
    const task = Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).send();
    }
  } catch (e) {
    res.status.send(e);
  }
  res.status(200).send({ success: true });
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
  } catch (e) {
    res.status.send(e);
  }
  res.status(200).send({ success: true });
});

module.exports = router;
