import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import DataGrid from "./components/DataGrid";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [area, setArea] = useState([]);
  const [checkedArea, setCheckedArea] = useState("American");
  // const [foodItems, setFoodItems] = useState([]);
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
        <Filter
          area={area}
          setFilteredData={setFilteredData}
          checkedArea={checkedArea}
          setCheckedArea={setCheckedArea}
        />
        <DataGrid filteredData={filteredData} checkedArea={checkedArea} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
