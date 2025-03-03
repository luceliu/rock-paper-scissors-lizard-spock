import Game from "./components/Game";

function App() {
  return (
    // <div className="bg-gradient-to-b from-blue-50 to-indigo-100 h-screen">
    <div className="bg-gradient-to-b from-blue-50 to-indigo-100 h-screen w-screen overflow-hidden">
      {/* <div>
        <a href="https://automata.tech/" target="_blank">
          <img src={String(automataLogo)} className="logo automata" alt="Automata logo"/>
        </a>
      </div>
      <h1>Frontend Exercise</h1>
      <h2>Rock, Paper, Scissors, Lizard, Spock</h2> */}
      <Game />
    </div>
  );
}

export default App;
