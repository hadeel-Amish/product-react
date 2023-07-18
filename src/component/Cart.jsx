import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Cart() {
  const { id } = useParams();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProducts(await response.json());
    };
    getProducts();
  }, []);

  return (
    <>
      <div className="container">
        <div className="card-body text-center mt-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkf8Qb602JP3GwlQwtlrU6ZxXAP8wj9gp8w&usqp=CAU"
            width="250px"
            height="250px"
          />
          <p className="card-text mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
            tempora libero porro eligendi repudiandae expedita non? Ratione,
            error ullam? Earum mollitia deserunt non dolorem sit enim ea
            architecto! Cum, ipsum?
          </p>
          <a href="#" class="btn btn-primary">
            More Details
          </a>
        </div>
      </div>
    </>
  );
}

export default Cart;
