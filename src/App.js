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
        <Dictioanary />
      </main>
      <footer className="text-center">
        This Project was coded by Jessica Boos.
      </footer>
    </div>
  );
}
