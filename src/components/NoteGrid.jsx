import { useContext } from "react";
import { NoteContext } from "./NoteProvider";
import NoteCard from "./NoteCard";

function NoteGrid() {
  const [notes, setNotes] = useContext(NoteContext);
  return (
    <>
      <div className="m-5 d-flex flex-wrap min-vh-100">
        {notes.map((note) => (
          <NoteCard title={note.title} text={note.text} key={note.index} />
        ))}
      </div>
    </>
  );
}

export default NoteGrid;
