import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { NoteProvider } from "./components/NoteProvider";
import NoteGrid from "./components/NoteGrid";
import AddNote from "./components/AddNote";

function App() {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <>
      <NoteProvider>
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
                onChange={toggleTheme}
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
      </NoteProvider>
    </>
  );
}

export default App;
