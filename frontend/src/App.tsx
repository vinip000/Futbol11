import { useState } from "react";
import "./App.css";

const positions = [
  { id: "LW", top: "20%", left: "18%" },
  { id: "ST", top: "12%", left: "50%" },
  { id: "RW", top: "20%", left: "82%" },
  { id: "CM1", top: "42%", left: "25%" },
  { id: "CM2", top: "50%", left: "50%" },
  { id: "CM3", top: "42%", left: "75%" },
  { id: "LB", top: "70%", left: "12%" },
  { id: "CB1", top: "76%", left: "38%" },
  { id: "CB2", top: "76%", left: "62%" },
  { id: "RB", top: "70%", left: "88%" },
  { id: "GK", top: "92%", left: "50%" },
];

function App() {
  const [started, setStarted] = useState(false);

  return (
    <main className="app">
      <header>
        <h1>⚽ Football11</h1>
        <p>Monte sua escalação perfeita!</p>
      </header>

      <section className="game">
        <div className="game-info">
          <h2>Formação 4-3-3</h2>
          <p>
            {started
              ? "País atual: Brasil 🇧🇷"
              : "Clique em iniciar para começar!"}
          </p>
        </div>

        <div className="field">
          <div className="center-line" />
          <div className="center-circle" />

          {positions.map((position) => (
            <div
              key={position.id}
              className="position"
              style={{
                top: position.top,
                left: position.left,
              }}
            >
              {position.id}
            </div>
          ))}
        </div>

        {!started && (
          <button onClick={() => setStarted(true)}>
            Iniciar partida
          </button>
        )}
      </section>
    </main>
  );
}

export default App;