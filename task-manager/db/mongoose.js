const mongoose = require("mongoose");
const validator = require("validator");

const moogooseURI =
  "mongodb+srv://test:info12345@cluster0.geqwj.mongodb.net/task-app?retryWrites=true&w=majority";
mongoose
  .connect(moogooseURI, {
    useNewUrlParser: true,
    // useCreateIndex: true,  //it will break our code
  })
  .then((result) => {
    console.log("connceted");
  })
  .catch((err) => {
    console.log("unable to connect!");
  });
// const userObj = new user({
//   name: "rajesh",
//   email: "rajeshisadev@gmail.com",
//   password: "test123",
//   age: 24,
// });

// userObj
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const taskObj = new task({
//   discription: "node app",
//   isCompleted: false,
// });

// // taskObj
// //   .save()
// //   .then((result) => {
// //     console.log(result);
// //     console.log(taskObj, "taskObj");
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });
