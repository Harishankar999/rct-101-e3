import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Product = () => {
  // Note: this id should come from api
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    const getData = async () => {
      let res = await fetch("http://localhost:8080/products");
      let data = await res.json();
      setData(data);
    };
    getData();
  });
  const handleDelete = () => {
    const updateData = data.splice(1,0);
    setData(updateData)
  }
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <div>
        <span data-cy="product-count">Cart Items: {count}</span>
      </div>
      {data.map((el) => {
        //console.log(el);
        return (
          <div key={el.id}>
            <h3 data-cy="product-name">{el.name}</h3>
            <h6 data-cy="product-description">{el.description}</h6>
            <button
              onClick={() => setCount(count - 1)}
              onClock
              data-cy="product-increment-cart-item-count-button"
            >
              -
            </button>
            <button
              onClick={() => setCount(count + 1)}
              data-cy="product-decrement-cart-item-count-button"
            >
              +
            </button>
            <button onClick={handleDelete} data-cy="product-remove-cart-item-button">X</button>
            <button
              onClick={() => setCount(count + 1)}
              data-cy="product-add-item-to-cart-button"
            >
              Add ToCart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
