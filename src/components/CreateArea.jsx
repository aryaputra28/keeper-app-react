import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: "",
  });

  function addNote(event) {
    const { value, name } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={addNote}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={addNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.onAdd(note);
            setNote(() => {
              return {
                ["title"]: "",
                ["content"]: "",
              };
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
