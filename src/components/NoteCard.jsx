import { useContext } from "react";
import { NoteContext } from "./NoteProvider";

function NoteCard(props) {
  const [notes, setNotes] = useContext(NoteContext);

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <>
      <div className="card w-25 m-4 h-25" style={{ minHeight: "100px" }}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <button onClick={() => handleDeleteNote(props.id)}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default NoteCard;
