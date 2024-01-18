import React, { useEffect, useState } from "react";
import trial from "../trial.avif";
import axios from "axios";

function DataGrid() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => {
        setData(res.data.meals);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="datagrid-container">
      {data.map((item) => {
        return (
          <div key={item.idMeal} className="grid-card">
            <img
              className="card-img"
              src={item.strMealThumb}
              alt="Sunset in the mountains"
            />
            <span className="card-span">$120 off above $190</span>
            <div className="card-body">
              <p className="card-title">{item.strMeal}</p>
              <p className="card-time">43 mins</p>
              <p className="card-desc">Kothrud</p>
            </div>
          </div>
        );
        // console.log(item.strMealThumb);
      })}
    </div>
  );
}

export default DataGrid;
