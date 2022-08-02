const mongoose = require("mongoose");
// const validator = require("validator");

const Task = mongoose.model("tasks", {
  discription: {
    type: String,
    validate(value) {
      if (value > 6) {
        throw new Error("Discription should be more then 6 char");
      }
    },
  },
  isCompleted: {
    type: Boolean,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = Task;
