import { useSignupMutation } from "../app/apiSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AlertError from "./AlertError";

const SignUp = () => {
  const navigate = useNavigate();
  const [signup, signupResult] = useSignupMutation();
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  useEffect(() => {
    if (signupResult.error) {
      console.log(signupResult?.error);
      setErrorMessage(signupResult?.error?.data?.detail);
    }
    if (signupResult.isSuccess) navigate("/");
  }, [signupResult, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      setErrorMessage("Password does not match confirmation");
      return;
    }
    signup({ first_name, last_name, email, username, password });
  };
  return (
    <div>
      <div></div>
      <div>
        <div>
          <h1>SignUp</h1>
          <form onSubmit={handleSubmit}>
            {errorMessage && <AlertError>{errorMessage}</AlertError>}

            <div>
              <label htmlFor="SignUp__first_name">First Name</label>
              <input
                type="text"
                id="SignUp__first_name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="SignUp__last_name">Last Name</label>
              <input
                type="text"
                id="SignUp__last_name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="SignUp__email">Email</label>
              <input
                type="text"
                id="SignUp__email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="SignUp__username">Username</label>
              <input
                type="text"
                id="SignUp__username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="SignUp__password">Password</label>
              <input
                type="password"
                id="SignUp__password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage("");
                }}
              />
            </div>
            <div>
              <label htmlFor="SignUp__password_confirmation">
                Confirm Password
              </label>
              <input
                type="password"
                id="SignUp__password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => {
                  setPasswordConfirmation(e.target.value);
                  setErrorMessage("");
                }}
              />
            </div>
            <button type="submit" style={{ color: "#f8f8ff" }}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SignUp;
