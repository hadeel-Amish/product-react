import React, { useEffect, useState } from "react";
// import Skeleton from "react-loading-skeleton";
import Product from "./Product";

function Products() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setproducts] = useState([]);
  const [categories, setcategories] = useState([]);
  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setcategories(data));
  };
  const getProductsCategories = (catName) => {
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <>
      <h2 className="text-center p-3 mt-1 ">Our Products</h2>
      <div className="container ">
        <div className="buttons d-flex justify-content-center mb-1 pb-5 ">
          <button
            className="btn btn-outline-dark me-2 "
            onClick={() => {
              getProducts();
            }}
          >
            All
          </button>
          {categories.map((cat) => {
            return (
              <button
                className="btn btn-outline-dark me-2"
                key={cat}
                onClick={() => {
                  getProductsCategories(cat);
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true}></Product>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
