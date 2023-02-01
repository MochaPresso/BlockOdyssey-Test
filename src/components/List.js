import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/List.scss";

const List = () => {
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/dummyData.json");
        setProductList(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="List">
      <div className="List-total">검색된 데이터: {productList && productList.total}건</div>
      <div className="List-table">
        <div className="List-table-head">
          <div>상품 번호</div>
          <div>상품명</div>
          <div>브랜드</div>
          <div>상품 내용</div>
          <div>가격</div>
          <div>평점</div>
          <div>재고</div>
        </div>
        <div className="List-table-body">
          {productList &&
            productList.products.map(({ id, title, brand, description, price, rating, stock }) => (
              <div className="List-table-content" key={id}>
                <div>{id}</div>
                <div>{title}</div>
                <div>{brand}</div>
                <div className="List-table-content-description">{description}</div>
                <div>${price}</div>
                <div>{rating}</div>
                <div>{stock}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default List;
