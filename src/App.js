import signature from "./signature.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={signature}
          className="App-signature img-fluid"
          alt="signature"
        />
        <span className="App-header-text">Dictionary App</span>
      </header>
    </div>
  );
}
