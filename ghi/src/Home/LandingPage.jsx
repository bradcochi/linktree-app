import LinkyLogo from "../Images/logo-512x512.png";
import { NavLink } from "react-router-dom";
import LoginForm from "../Global/LoginForm";

const LandingPage = ({ account }) => {
  return (
    <>
      <div>
        <img src={LinkyLogo} alt="..." />
        <h1>Welcome to Linky!</h1>
        <div>
          <div></div>
          <div></div>
        </div>
        <p>A link sharing platform</p>
        <div>
          <NavLink to="signup" id="btn2">
            Sign Up
          </NavLink>
          <button
            type="button"
            id="btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop2"
          >
            Login
          </button>
        </div>
      </div>
      <div
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div>
          <div>
            <div>
              <h1 id="staticBackdropLabel2">Login</h1>
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
    </>
  );
};

export default LandingPage;
