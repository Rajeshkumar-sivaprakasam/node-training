const fs = require("fs");

const getNotes = () => "Your Notes......";

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicate = notes.filter((note) => note.title === title);
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

const listNotes = () => {
  const notes = loadNotes();
  notes.map((note) => console.log(note.title));
};

const deleteNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log("Note deleted successfully!");
  } else {
    console.log("Note Not found!");
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  deleteNote: deleteNote,
  listNotes: listNotes,
};
