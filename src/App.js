import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <Dictionary keyword="sunset" />
      <footer>
        <a href="https://github.com/msleeuwenhoek/react-dictionary">
          Open-source code
        </a>{" "}
        by Merel Sleeuwenhoek
      </footer>
    </div>
  );
}

export default App;
