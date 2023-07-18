import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const state = useSelector((state) => state.HandleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-1 shadow   mb-0">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            <span className="color">P</span>RODUCTS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <button className="btn">
                {/* <Link to="/Login" className="btn btn-dark">
                  <i className="fa fa-sign-in me-1"></i>Login
                </Link> */}
                <Link to="/Register" className="btn btn-dark ms-2">
                  <i className="fa fa-user-plus me-1"></i>Register
                </Link>
                <a href="#" className="btn btn-dark ms-2">
                  <i className="fa fa-shopping-cart me-1"></i>Cart(
                  {state.length})
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
