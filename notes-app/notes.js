const fs = require("fs");

const getNotes = () => {
  return "Your Notes......";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicate = notes.filter((note) => {
    return note.title === title;
  });
  if (duplicate.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("new note added!");
  } else {
    console.log("Title already exsits!");
  }
};

const saveNotes = (notes) => {
  const data = JSON.stringify(notes);
  fs.writeFileSync("notes.json", data);
};

const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync("notes.json");
    const notesJson = notesBuffer.toString();
    const notes = JSON.parse(notesJson);
    return notes;
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
};
