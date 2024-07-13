import { useContext, useState } from "react";
import { NoteContext } from "./NoteProvider";

function AddNote() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [notes, setNotes] = useContext(NoteContext);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleAddNote = (e) => {
    e.preventDefault();
    setNotes((prevNotes) => [...prevNotes, { title: title, text: text }]);
    setTitle("");
    setText("");
  };

  return (
    <>
      <div className="container m-4 ">
        <h3>Add Note</h3>
        <input
          type="text"
          placeholder="Note title"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Note Here"
          value={text}
          onChange={handleTextChange}
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
    </>
  );
}

export default AddNote;
