import React from "react";
import { useState } from "react";
export const Childitem = (prop) => {
  const [cartvalue, setCartvalue] = useState("Add Cart");
  const childChange = (n) => {
    if (cartvalue === "Add Cart") {
      prop.parentChange(1);
      setCartvalue("Remove cart");
    } else {
      prop.parentChange(-1);
      setCartvalue("Add Cart");
    }
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{prop.name}</h5>

            {prop.star && (
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
              </div>
            )}
            {prop.price}
          </div>
        </div>
        {/*  */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a
              className="btn btn-outline-dark mt-auto bg-dark text-white"
              onClick={childChange}
              href="#"
            >
              {cartvalue}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
