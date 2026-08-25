import React from "react";
import { useSelector } from "react-redux";

function ProductList() {

  const products = useSelector(
    state => state.products
  );

  return (
    <div>

      <h1>Product Details</h1>

      {products.map(product => (

        <div key={product.id}>

          <h2>{product.name}</h2>

          <p>
            Product Type: {product.productType}
          </p>

          <p>
            Price: ₹{product.price}
          </p>

          <hr />

        </div>

      ))}

    </div>
  );
}

export default ProductList;