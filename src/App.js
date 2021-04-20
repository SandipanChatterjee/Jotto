import logo from "./logo.svg";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
function App() {
  const success = false;
  const secretWord = "party";
  const guessedWords = [];

  return (
    <div data-test="component-app" className="App">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <Input success={success} secret={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
