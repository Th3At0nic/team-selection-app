import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Players/Header/Header";
import Players from "./components/Players/Players";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Players></Players>
    </div>
  );
}

export default App;
