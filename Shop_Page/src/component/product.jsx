
import React, { useState } from "react";


function Product({ cart, setCart, data }) {
  
  const [isToggle, setToggle] = useState(true);

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img
          className="card-img-top"
          src={data.image}
          alt="Product"
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{data.name}</h5>
            {data.price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          {isToggle ? (
            <div className="text-center">
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={() => {
                  setCart(cart + 1);
                  setToggle(!isToggle);
                }}
              >
                Add to cart
              </button>
            </div>
          ) : (
            <div className="text-center">
              <button
                className="btn btn-dark mt-auto"
                onClick={() => {
                  setCart(cart - 1);
                  setToggle(!isToggle);
                }}
              >
                Remove from cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
 export default Product