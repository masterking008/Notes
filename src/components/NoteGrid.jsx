import { useContext } from "react";
import { NoteContext } from "./NoteProvider";
import NoteCard from "./NoteCard";

function NoteGrid() {
  const [notes, setNotes] = useContext(NoteContext);
  return (
    <>
      <div className="d-flex flex-wrap min-vh-100">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteCard title={note.title} text={note.text} key={note.index} />
          ))
        ) : (
          <div className="container">No Note added</div>
        )}
      </div>
    </>
  );
}

export default NoteGrid;
