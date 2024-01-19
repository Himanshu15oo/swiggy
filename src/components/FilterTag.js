import React, { useState, useEffect } from "react";

function FilterTag({
  elementName,
  icon,
  data,
  value,
  checkList,
  setCheckList,
  children,
}) {
  const expandArea = () => {
    const areaDropDown = document.querySelector(`.${elementName}-list`);
    // const sortDropDown = document.querySelector(".sort-list");
    areaDropDown.classList.toggle("hidden");
    // sortDropDown.classList.add("hidden");
    // areaDropDown.classList.toggle("flex");
    // console.log(areaDropDown);
  };

  const changeArea = (e) => {
    const name = e.target.value;
    // console.log("check box:", name);
    setCheckList(name);
    // setSort("");
  };
  return (
    <>
      <button className={elementName + "-btn"} onClick={expandArea}>
        {children}
        <span className={elementName + "-icon"}>{icon}</span>
      </button>
      <div className={elementName + "-list hidden"}>
        <ul className="flex flex-col items-start">
          {data.map((item) => {
            return (
              <li key={item[value]}>
                <input
                  type="checkbox"
                  value={item.strArea}
                  onChange={changeArea}
                  checked={checkList === item[value] ? true : false}
                />
                <label className={elementName + "-list-labels"}>
                  {item[value]}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default FilterTag;
