import { React, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useGetAccountQuery, useLogoutMutation } from "../app/apiSlice";
import LoginForm from "./LoginForm";
import AlertSuccess from "./AlertSuccess";
import { Button } from "../components/Button";

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
    <nav className="sticky top-0 left-0 right-0 z-[100]">
      <div className="px-24 pt-12">
        <ul className="flex justify-between bg-slate-300 rounded-full p-3">
          <div className="flex">
            <Button asChild variant="ghost">
              <NavLink to="/">Linky</NavLink>
            </Button>
            {account && (
              <>
                <li>
                  <Button asChild variant="ghost">
                    <NavLink to="/">Edit Links</NavLink>
                  </Button>
                </li>
                <li>
                  <Button asChild variant="ghost">
                    <NavLink to={`/${account.username}`}>View My Linky</NavLink>
                  </Button>
                </li>
                <li>
                  <Button asChild variant="ghost">
                    <NavLink to="analytics">Analytics</NavLink>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    id="liveAlertBtn"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `http://localhost:3000/${account.username}`
                      );
                      setSuccessAlert(true);
                    }}
                  >
                    Share
                  </Button>
                  {successAlert && <AlertSuccess></AlertSuccess>}
                </li>
              </>
            )}
          </div>

          <div className="flex">
            {account && (
              <li>
                <Button className="rounded-full" onClick={logoutAndRedirect}>
                  Logout
                </Button>
              </li>
            )}

            {!account && (
              <>
                <li>
                  <Button asChild>
                    <NavLink to="signup">Sign Up</NavLink>
                  </Button>
                </li>
                <li>
                  <Button
                  // data-bs-toggle="modal"
                  // data-bs-target="#staticBackdrop"
                  >
                    Login
                  </Button>
                </li>
              </>
            )}
          </div>
          {/* <div
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
            </div> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
