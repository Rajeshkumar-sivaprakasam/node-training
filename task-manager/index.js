const express = require("express");
const { findById } = require("./model/user");
const userRouter = require("./routers/users");
const taskRouter = require("./routers/tasks");
require("./db/mongoose");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("Get service is disabled!");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Site is currently down!");
// });
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const Task = require("./model/task");
const User = require("./model/user");

const main = async () => {
  // const task = await Task.findById('5c2e505a3253e18a43e612e6')
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)

  const user = await User.findById("5c2e4dcb5eac678a23725b5b");
  if (user) {
    await user.populate("tasks").execPopulate();
    console.log(user.tasks);
  }
};

main();
