import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import { signUpService } from "../../services/authServices";
import { setLocalStorage } from "../../utils/utils";
import { useEffect } from "react";

const SignUp = () => {
  const { user, setUser, token, setToken } = useAuthContext();

  const signUpLocation = useLocation();
  const navigate = useNavigate();

  const [inputValue, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [token]);

  const handleInputChange = (e) =>
    setValue({ ...inputValue, [e.target.name]: e.target.value });

  const createAccount = async (e) => {
    e.preventDefault();

    try {
      const { firstName, lastName, email, password, confirmPassword } =
        inputValue;

      if (password !== confirmPassword) {
        return;
      }

      const { user, token } = await signUpService({
        firstName,
        lastName,
        email,
        password,
      });

      // updating AuthContext
      setUser(user);
      setToken(token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-container">
      <div className="login-form">
        <h1>Sign Up</h1>
        <form className="auth-form" onSubmit={createAccount}>
          <div className="username">
            <div>
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-input"
                placeholder="First Name"
                value={inputValue.firstName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="laststName"
                name="lastName"
                className="form-input"
                placeholder="Last Name"
                value={inputValue.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="email">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="form-input"
              placeholder="Email"
              value={inputValue.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="password">
            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                placeholder="Password"
                value={inputValue.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-input"
                placeholder="Confirm Password"
                value={inputValue.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <button className="login-btn" type="submit">
              Create New Account
            </button>
          </div>
        </form>
        <Link to="/login">
          <div className="auth-secondary-btn">Aleady have a account</div>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
