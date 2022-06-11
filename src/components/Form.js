import React, { useState } from "react";
import searchIcon from "../images/icons8-search-50.png";

const Form = ({ getArticle, disablePagination }) => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);

  const handleQueryInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleNextClick = (e) => {
    if (page <= 100) {
      const updatedPage = page + 1;
      getArticle(e, query, updatedPage);
      setPage(updatedPage);
    }
  };

  const handlePreviousClick = (e) => {
    if (page !== 0) {
      const updatedPage = page - 1;
      getArticle(e, query, updatedPage);
      setPage(updatedPage);
    }
  };
  return (
    <>
      <form
        onSubmit={(e) => getArticle(e, query)}
        className="box border border-1"
      >
        <input
          type="text"
          name="articleName"
          onChange={handleQueryInputChange}
          placeholder="e.g sports"
          className="py-1"
        />
        <img src={searchIcon} alt={searchIcon} />
      </form>
      <div className="d-flex justify-content-between">
        {disablePagination && (
          <button
            className="btn fw-bold text-primary"
            disabled={page === 0}
            onClick={handlePreviousClick}
          >
            Previous
          </button>
        )}
        {disablePagination && (
          <button
            className="btn fw-bold text-primary"
            onClick={handleNextClick}
          >
            Next
          </button>
        )}
      </div>{" "}
    </>
  );
};

export default Form;
