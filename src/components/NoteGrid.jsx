import { useContext } from "react";
import { NoteContext } from "./NoteProvider";
import NoteCard from "./NoteCard";

function NoteGrid() {
  function reverseArray(arr) {
    if (arr.length === 0) {
      return [];
    } else {
      return [arr[arr.length - 1]].concat(
        reverseArray(arr.slice(0, arr.length - 1))
      );
    }
  }

  var [notes, setNotes] = useContext(NoteContext);
  var revNotes = reverseArray(notes);
  notes = revNotes;

  return (
    <>
      <div className="d-flex flex-wrap min-vh-100">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteCard
              title={note.title}
              text={note.text}
              key={note.id}
              id={note.id}
            />
          ))
        ) : (
          <div className="container">No Note added</div>
        )}
      </div>
    </>
  );
}

export default NoteGrid;
