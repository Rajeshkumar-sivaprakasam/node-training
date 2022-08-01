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
