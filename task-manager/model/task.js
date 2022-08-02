const mongoose = require("mongoose");
// const validator = require("validator");
const TaksSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);
const Task = mongoose.model("tasks");

module.exports = Task;
