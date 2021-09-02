import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNotes] = React.useState([]);

  function addNote(inputNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, inputNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {noteList.map((notes, index) => (
        <Note
          key={index}
          id={index}
          title={notes.title}
          content={notes.content}
          onDelete={deleteNote}
        />
      ))}
      ;
      <Footer />
    </div>
  );
}

export default App;
