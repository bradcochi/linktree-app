import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  useGetAccountQuery,
  useLogoutMutation,
  useGetTreesByUsernameQuery,
} from "../app/apiSlice";
import LoginForm from "./LoginForm";

const NavBar = () => {
  const { data: account, isLoading } = useGetAccountQuery();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const logoutAndRedirect = () => {
    logout();
    navigate("/");
    window.location.reload(false);
  };

  if (isLoading) {
    return null;
  }

  console.log(account.username, isLoading);
  return (
    <nav className="navbar navbar-dark bg-dark  navbar-expand-lg">
      <div className="container-fluid bg-dark">
        <Link className="navbar-brand" href="#">
          Linky
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {account && (
              <div>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">
                    Edit Links
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    View My Linky
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Analytics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Share
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={logoutAndRedirect}>
                    Logout
                  </button>
                </li>
              </div>
            )}

            {!account && (
              <div>
                <li className="nav-item">
                  <NavLink to="signup" className="nav-link">
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="nav-link"
                    style={{ backgroundColor: "white" }}
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Login
                  </button>
                </li>
              </div>
            )}
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      Login
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div>
                      <LoginForm></LoginForm>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;