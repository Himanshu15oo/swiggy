import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Modal from "./Modal";

function DataGrid({ filteredData, checkedArea }) {
  const [selectedID, setSelectedID] = useState("");
  const [modal, setModal] = useState(false);

  const handleDivClick = (ID) => {
    // const modal = document.querySelector(".modal-container");
    // console.log(ID);
    setSelectedID(ID);
    // modal.classList.toggle("hidden");
    setModal(true);
  };

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = filteredData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredData.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel={<span className="break">...</span>}
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination-container"
        pageClassName="page"
        pageLinkClassName="page-links"
        activeClassName="active-page" // Add this line for the active page link
        breakClassName="break" // Add this line for the ellipsis
        previousClassName="page prev-btn"
        nextClassName="page next-btn"
      />
      <div className="datagrid-container">
        {currentItems.map((item) => {
          return (
            <div
              key={item.idMeal}
              className="grid-card"
              onClick={() => handleDivClick(item.idMeal)}
            >
              <img
                className="card-img"
                src={item.strMealThumb}
                alt="Sunset in the mountains"
              />
              <span className="card-span">₹120 off above ₹190</span>
              <div className="card-body">
                <p className="card-title">{item.strMeal}</p>
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
                <p className="card-desc">
                  {item.strArea ? item.strArea : checkedArea}
                </p>
              </div>
            </div>
          );
          // console.log(item.strMealThumb);
        })}
      </div>
      {modal ? (
        <div class="overlay">
          <Modal modal={modal} setModal={setModal} ID={selectedID} />{" "}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default DataGrid;
