const express = require("express");
const User = require("./model/user");
const Task = require("./model/task");
const { findById } = require("./model/user");
require("./db/mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch {
    res.status(500).send(e);
  }
});

app.get("/users/:id", async (req, res) => {
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

app.post("/tasks", async (req, res) => {
  const task = new Task(req.body);

  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch {
    res.status(500).send(e);
  }
});

app.get("/tasks/:id", async (req, res) => {
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

app.patch("/users/:id", async (req, res) => {
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

app.patch("/tasks/:id", async (req, res) => {
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

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
