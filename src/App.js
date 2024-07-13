import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { NoteProvider } from "./components/NoteProvider";
import NoteGrid from "./components/NoteGrid";
import AddNote from "./components/AddNote";

function App() {
  return (
    <>
      <NoteProvider>
        <body data-bs-theme="dark">
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <h2>Notes</h2>
              </a>
            </div>
          </nav>

          <AddNote />
          <NoteGrid />
        </body>
      </NoteProvider>
    </>
  );
}

export default App;
