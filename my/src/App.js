
import './App.css';
import Dictionary from "./Dictionary.js";
import img1 from "./images/dictionary.jpg"

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div  className="heading">
            <h1> English Dictionary</h1>
            <img src={img1} alt="" />
          </div>
        </header>
        <main>
          <Dictionary defaultKeyword="Restaurant" />
        </main>
        <footer className="text-center">
          Coded by
          <a href="https://github.com/TandiweBeta">Tandiwe Beta, </a>
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
