import logo from "./logo.svg";
import IndexPage from "./pages/IndexPage";
import "./App.css";
import Header from "./components/header";
import ContainerResults from "./components/containerResults";
import ContainerImageSeats from "./components/containerImageSeats";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <HomePage/>
    </>
  );
}

export default App;
