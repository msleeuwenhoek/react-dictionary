import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <Dictionary keyword="hello" />
      <div className="credits">
        <a href="https://github.com/msleeuwenhoek/react-dictionary">
          Open-source code
        </a>{" "}
        by Merel Sleeuwenhoek
      </div>
    </div>
  );
}

export default App;
