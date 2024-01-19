import { React, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
      <div className="px-24 pt-[var(--header-padding)]">
        <ul className="flex justify-between items-center bg-white rounded-full p-3 pl-5">
          <div className="flex items-center">
            <NavLink to="/" className="mr-2">
              <img src="/logo-512x512.png" className="h-10" alt="..." />
            </NavLink>
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
                <Button size="rounded" onClick={logoutAndRedirect}>
                  Logout
                </Button>
              </li>
            )}

            {!account && (
              <div className="flex gap-2">
                <li>
                  <Button variant="secondary" size="lg">
                    Log in
                  </Button>
                </li>
                <li>
                  <Button size="rounded" asChild>
                    <NavLink to="signup">Sign up free</NavLink>
                  </Button>
                </li>
              </div>
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
