import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { modifyPageLimit, switchCurrentPage } from "../features/paginationEventSlice";

import "../styles/Pagination.scss";

const Pagination = () => {
  const { numberOfProduct, pageLimit, currentPage } = useSelector((state) => state.paginationEvent);
  const dispatch = useDispatch();
  const numberOfPages = numberOfProduct !== 0 ? Math.ceil(numberOfProduct / pageLimit) : 1;

  return (
    <div className="Pagination">
      <div className="Pagination-rows-per-page">
        <span>페이지 당 행: </span>
        <select
          value={pageLimit}
          onChange={(e) => {
            dispatch(modifyPageLimit(parseInt(e.target.value)));
          }}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
      <div className="Pagination-button">
        <button
          onClick={() => dispatch(switchCurrentPage(currentPage - 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {Array(numberOfPages)
          .fill()
          .map((_, i) => (
            <button key={i + 1} onClick={() => dispatch(switchCurrentPage(i + 1))}>
              {i + 1}
            </button>
          ))}
        <button
          onClick={() => dispatch(switchCurrentPage(currentPage + 1))}
          disabled={currentPage === numberOfPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
