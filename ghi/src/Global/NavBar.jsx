import { React, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useGetAccountQuery, useLogoutMutation } from "../app/apiSlice";
import LoginForm from "./LoginForm";
import AlertSuccess from "./AlertSuccess";

const NavBar = () => {
  const { data: account, isLoading } = useGetAccountQuery();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const [successAlert, setSuccessAlert] = useState(false);

  const logoutAndRedirect = () => {
    logout();
    navigate("/");
  };

  if (isLoading) {
    return null;
  }

  return (
    <nav>
      <div>
        <Link to="/">Linky</Link>
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
        </button>
        <div id="navbarSupportedContent">
          <ul>
            {account && (
              <>
                <li>
                  <NavLink to="/">Edit Links</NavLink>
                </li>
                <li>
                  <Link to={`/${account.username}`}>View My Linky</Link>
                </li>
                <li>
                  <Link to="analytics">Analytics</Link>
                </li>
                <li>
                  <button
                    id="liveAlertBtn"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `http://localhost:3000/${account.username}`
                      );
                      setSuccessAlert(true);
                    }}
                  >
                    Share
                  </button>
                  {successAlert && <AlertSuccess></AlertSuccess>}
                </li>
                <li>
                  <button onClick={logoutAndRedirect}>Logout</button>
                </li>
              </>
            )}

            {!account && (
              <>
                <li>
                  <NavLink to="signup">Sign Up</NavLink>
                </li>
                <li>
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Login
                  </button>
                </li>
              </>
            )}
            <div
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div>
                <div>
                  <div>
                    <h1 id="staticBackdropLabel">Login</h1>
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div>
                    <div>
                      {!account && <LoginForm></LoginForm>}
                      {account && <p>Thanks for logging in!</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
