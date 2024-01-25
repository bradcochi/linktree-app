import { React, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useGetAccountQuery, useLogoutMutation } from "../app/apiSlice";
import AlertSuccess from "./AlertSuccess";
import { Button } from "../components/ui/Button";
import LoginButton from "../components/LoginButton";

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
    <>
      {successAlert && <AlertSuccess></AlertSuccess>}
      <nav className="fixed top-0 left-0 right-0 z-[40]">
        <div className="px-6 pt-[var(--header-padding)]">
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
                      <NavLink to={`/${account.username}`}>
                        View My Linky
                      </NavLink>
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
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `http://localhost:3000/${account.username}`
                        );
                        setSuccessAlert(true);
                      }}
                    >
                      Share
                    </Button>
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
                    <LoginButton />
                  </li>
                  <li>
                    <Button size="rounded" asChild>
                      <NavLink to="signup">Sign up free</NavLink>
                    </Button>
                  </li>
                </div>
              )}
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
