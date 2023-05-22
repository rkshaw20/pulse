import { Link, useNavigate } from "react-router-dom";

import "./Auth.css";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import { useState } from "react";
import { guestUser, localStorageKeys } from "../../constant";
import { loginService } from "../../services/services";
import { setLocalStorage } from "../../utils/utils";

// const userType = { Guest: "guest", Registered: "registered" };
const intialLoginState = { email: "", password: "" };

export const Login = () => {
  const { setUser } = useAuthContext();

  const navigate = useNavigate();

  const [userInput, setUserInput] = useState(intialLoginState);

  const handleGuestInput=(e)=>{
    setUserInput(guestUser)
    loginSubmit(e,guestUser)
  }

  const handleUserInput = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
    // console.log({ ...userInput, [e.target.name]: e.target.value })
  };

  const loginSubmit = async (e, loginDetails) => {

    
    e.preventDefault();
    try {
      const data = await loginService(loginDetails);

      setUser(data);

      setLocalStorage(localStorageKeys.User, data);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-container">
      <div className="login-form">
        <h1>Login</h1>
        <form
          className="auth-form"
          onSubmit={(e) => loginSubmit(e, userInput)}
        >
          <div className="auth-email">
            <label className="email-label" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="text-input"
              id="email"
              placeholder="pulse@gmail.com"
              value={userInput.email}
              onChange={handleUserInput}
              required
            />
            <small id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="auth-password">
            <label className="password-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="password-input"
              name="password"
              id="password"
              placeholder="********"
              value={userInput.password}
              onChange={handleUserInput}
              required
            />
          </div>
          <div className="btn-container">
            <button className="login-btn" type="submit">
              Login
            </button>
          </div>
        </form>
        <button
          className="login-guest-btn"
          onClick={(e)=>handleGuestInput(e)}
        >
          Login As a Guest
        </button>
        <div className="auth-secondary-btn">
          <Link to="/signup">Create your Pulse account</Link>
        </div>
      </div>
    </div>
  );
};
