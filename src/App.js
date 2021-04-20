import logo from "./logo.svg";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
function App() {
  const guessedWords = [
    {
      guessedWord: "abc",
      letterMatchCount: 2,
    },
  ];
  return (
    <div data-test="component-app" className="App">
      <Congrats success={true} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
