const tasks = {
  tasks: [
    { text: "read doc", completed: false },
    { text: "read KYC", completed: false },
    { text: "read GUIDE", completed: true },
    { text: "read ackowledgement", completed: true },
  ],
  getTasksToDo() {
    return this.tasks.filter((task) => task.completed === false);
  },
};

console.log(tasks.getTasksToDo());
