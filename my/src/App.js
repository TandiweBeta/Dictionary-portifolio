
import './App.css';
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Dictionary App</h1>
        </header>
        <main>
          <Dictionary/>
        </main>
        <footer className="text-center">
          Coded by Tandiwe Beta
        </footer>
      </div>
    </div>
  );
}

export default App;
