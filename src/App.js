import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import DataGrid from "./components/DataGrid";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [area, setArea] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => {
        // console.log("areas API called: " + res.data);
        setArea(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="body">
        <Filter area={area} setFilteredData={setFilteredData} />
        <DataGrid filteredData={filteredData} setFoodItems={setFoodItems} />
      </div>
    </div>
  );
}

export default App;
