
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
          <Dictionary defaultKeyword="Forest"/>
        </main>
        <footer className="text-center">
          Coded by
          <a href="https://github.com/TandiweBeta">Tandiwe Beta </a>
          open sourced on
          <a href="https://github.com/TandiweBeta/Dictionary-portifolio">
            {" "}
            Github
          </a>{" "}
          and Hosted on
          <a href="https://dictionary-app-tandi.netlify.app/"> Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
