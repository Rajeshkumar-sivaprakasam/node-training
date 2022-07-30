require("../db/mongoose");

const Task = require("../model/task");

Task.findByIdAndDelete("62e1fa28639e432be28b9340")
  .then((result) => {
    return Task.countDocuments({ isCompleted: true });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
