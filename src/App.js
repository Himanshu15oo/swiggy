import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import DataGrid from "./components/DataGrid";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Filter />
        <DataGrid />
      </div>
    </div>
  );
}

export default App;
