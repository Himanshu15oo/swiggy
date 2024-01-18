import React, { useEffect, useState } from "react";
import axios from "axios";

function DataGrid({ filteredData, setFoodItems }) {
  //   useEffect(() => {}, [filteredData]);

  return (
    <div className="datagrid-container">
      {filteredData.map((item) => {
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
