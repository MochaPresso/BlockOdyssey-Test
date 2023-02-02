import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modifySearchEvent } from "../features/searchEventSlice";

import "../styles/Search.scss";

const Search = () => {
  const [formValue, setFormValue] = useState({
    condition: "all",
    keyword: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(modifySearchEvent(formValue));
  };

  return (
    <div className="search">
      <div className="search-title">상품 검색</div>
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <select
          value={formValue.condition}
          onChange={(e) =>
            setFormValue((state) => ({
              ...state,
              condition: e.target.value,
            }))
          }
        >
          <option value="all">전체</option>
          <option value="title">상품명</option>
          <option value="brand">브랜드</option>
          <option value="description">상품내용</option>
        </select>
        <input
          type="text"
          value={formValue.keyword}
          onChange={(e) =>
            setFormValue((state) => ({
              ...state,
              keyword: e.target.value,
            }))
          }
        />
        <button>조회</button>
      </form>
    </div>
  );
};

export default Search;
