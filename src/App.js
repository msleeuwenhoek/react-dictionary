import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary keyword="sunset" />
        <footer>
          <a href="https://github.com/msleeuwenhoek/react-dictionary">
            Open-source code
          </a>{" "}
          by Merel Sleeuwenhoek
        </footer>
      </div>
    </div>
  );
}

export default App;
