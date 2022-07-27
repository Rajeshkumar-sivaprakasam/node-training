const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURI =
  "mongodb+srv://test:info12345@cluster0.geqwj.mongodb.net/?retryWrites=true&w=majority";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURI,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect db!");
    }
    const db = client.db(databaseName);
    console.log("connection created successfully!");

    // db.collection("tasks").insertOne(
    db.collection("tasks").insertMany(
      [
        {
          discription: "node task",
          completed: "Success",
        },
        {
          discription: "clear-MERN",
          completed: "Failed",
        },
        {
          discription: "clear-React",
          completed: "Success",
        },
      ],
      (error, result) => {
        if (error) return console.log("unable to insert data");
        console.log(result);
      }
    );

    // //findone
    // db.collection("tasks").findOne({ completed: "Failed" }, (error, task) => {
    //   console.log(task);
    // });

    // //find
    // db.collection("tasks")
    //   .find({ completed: "Success" })
    //   .toArray((error, tasks) => {
    //     console.log(tasks);
    //   });

    // //upateone
    // db.collection("tasks")
    //   .updateOne(
    //     {
    //       _id: mongodb.ObjectId("62e0a4ffb9a255377e7675d6"),
    //     },
    //     {
    //       $set: {
    //         completed: "Failed",
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // //updateMany
    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       completed: "Failed",
    //     },
    //     {
    //       $set: {
    //         discription: "test update",
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    //delete
    // db.collection("tasks")
    //   .deleteOne({
    //     completed: "Success",
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // //deleteMany
    // db.collection("tasks")
    //   .deleteMany({
    //     completed: "Failed",
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
);
