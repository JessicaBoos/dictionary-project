import signature from "./signature.png";
import "./App.css";
import Dictioanary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={signature}
          className="App-signature img-fluid"
          alt="signature"
        />
        <span className="App-header-text">Dictionary</span>
      </header>
      <main>
        <Dictioanary defaultKeyword="Star" />
      </main>
      <footer className="text-center">
        This Project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/jessica-boos-9282b8294/"
          target="_blank"
          rel="noreferrer"
        >
          Jessica Boos
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/JessicaBoos/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          open sourced on GitHub
        </a>
        .
      </footer>
    </div>
  );
}
