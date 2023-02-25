import logo from "./logo.svg";
import HomePage from "./pages/HomePage";
import "./App.css";
import Header from "./components/header";
import ContainerResults from "./components/containerResults";

function App() {
  return (
    <>
      {/*<div className="App">
      <header className="App-header">
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
      </header>
  */}
      <Header />
      <ContainerResults
        idEvent={"afasfsaf"}
        nameEvent={
          "Drake & Billie Eilish & Blink 182 - Lollapalooza Chile 2023- 3 Días"
        }
        date={"17 mar 2023"}
        hour={"18:00"}
        place={"Parque O'Higgins"}
        placeLink={"https://es.wikipedia.org/wiki/Parque_O%27Higgins"}
        country={"Santiago de Chile, Chile"}
        kindseat={"A23"}
        numseats={50}
      />
      <ContainerResults />
      <HomePage />
      {/*</div>*/}
    </>
  );
}

export default App;
