import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Players/Header/Header";
import Players from "./components/Players/Players";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Players></Players>




      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
