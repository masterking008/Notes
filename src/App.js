import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { NoteProvider } from "./components/NoteProvider";
import NoteGrid from "./components/NoteGrid";
import AddNote from "./components/AddNote";

function App() {
  function myFunction() {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
  }
  return (
    <>
      <NoteProvider>
        <body data-bs-theme="light">
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <h2>Notes</h2>
              </a>
              <div className="form-check form-switch mx-4">
                DARK MODE
                <input
                  className="form-check-input p-2 "
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  onclick={() => myFunction()}
                />
              </div>
            </div>
          </nav>

          <AddNote />
          <NoteGrid />
          <footer className="py-5 text-center text-body-secondary bg-body-tertiary">
            <p>Made by Dinesh</p>
            <p className="mb-0">
              <a href="#">Back to top</a>
            </p>
          </footer>
        </body>
      </NoteProvider>
    </>
  );
}

export default App;
