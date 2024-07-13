import { useContext } from "react";
import { NoteContext } from "./NoteProvider";

function NoteCard(props) {
  const [notes, setNotes] = useContext(NoteContext);

  return (
    <>
      <div className="card w-25 m-4 " style={{ minHeight: "100px" }}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default NoteCard;
