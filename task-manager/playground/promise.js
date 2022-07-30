require("../db/mongoose");
const User = require("../model/user");
const Task = require("../model/task");

// Task.findByIdAndDelete("62e1fa28639e432be28b9340")
//   .then((result) => {
//     return Task.countDocuments({ isCompleted: true });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = Task.findByIdAndDelete(id);
  const count = Task.countDocuments({ isCompleted: true });
  return count;
};

deleteTaskAndCount("62e4c09d07de6518aff9efc4")
  .then((count) => {
    console.log(count, "Count");
  })
  .catch((e) => {
    console.log("e", e);
  });
