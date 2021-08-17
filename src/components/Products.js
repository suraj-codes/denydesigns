import React from "react";
import { useHistory } from "react-router";
import { ProductArray } from "../ProductsArray";
const Products = () => {
  const history = useHistory();
  return (
    <div className="products">
      <h1>FRAMED ART PRINT</h1>
      <ul>
        {ProductArray.map((product) => (
          <li
            onClick={() => {
              history.push(`/products/${product.title}`);
            }}
          >
            <img src={product.image} alt={product.title} />
            <h6>{product.title}</h6>
            <h6>Framed art print</h6>
            <h6>By {product.brand}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
