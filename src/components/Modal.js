import axios from "axios";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";

function Modal({ modal, setModal, ID }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const API = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

  useEffect(() => {
    setLoading(true);
    console.log(API + ID);
    axios
      .get(API + ID)
      .then((res) => {
        console.log(res.data.meals[0]);
        setData(res.data.meals[0]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [modal, ID]);

  const closeModal = () => {
    // modalRef.current.classList.add("hidden");
    setModal(false);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <button className="modal-close" onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="modal-container">
            {" "}
            <img
              className="modal-img"
              src={data.strMealThumb}
              alt="Sunset in the mountains"
            />
            <div className="modal-title">
              {data.strMeal}
              <p className="card-time">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                4 • 43 mins
              </p>
            </div>
            <div className="modal-data">
              <div className="modal-mini-title">
                <span>Category:</span>
              </div>
              <div className="modal-text">
                <p>{data.strCategory}</p>
              </div>
              <div className="modal-mini-title">
                <span>Area:</span>
              </div>
              <div className="modal-text">
                <p>{data.strArea}</p>
              </div>
              <div className="modal-mini-title">
                <span>Instructions:</span>
              </div>
              <div className="modal-text">
                <p>{data.strInstructions}</p>
              </div>
              <div className="modal-mini-title">
                <span>Ingredients:</span>
              </div>
              <div className="modal-text">
                <ul className="modal-ingredient">
                  <li>{data.strIngredient1}</li>
                  <li>{data.strIngredient2}</li>
                  <li>{data.strIngredient3}</li>
                  <li>{data.strIngredient4}</li>
                  <li>{data.strIngredient5}</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Modal;
