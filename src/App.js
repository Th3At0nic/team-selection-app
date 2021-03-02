import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Players/Header/Header";
import Players from "./components/Players/Players";

function App() {
  return (
    <div className="App">
      <Header></Header> {/*from header component */}
      <Players></Players> {/*from players component */}
    </div>
  );
}

export default App;
