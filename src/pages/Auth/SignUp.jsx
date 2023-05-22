import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import { useFormInput } from "../../hooks/useFormInput";
import { setLocalStorage, handleToast } from "../../utils/utils";
import { signUpService } from "../../services/services";

const SignUp = () => {
  const { user, setUser } = useAuthContext();

  const signUpLocation = useLocation();
  const navigate = useNavigate();

  const { inputValue, handleInputChange } = useFormInput({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const createAccount = async (e) => {
    // console.log('outside');
    try {
      e.preventDefault();
      // console.log('inside')

      const { firstName, lastName, email, password, confirmPassword } =
        inputValue;

      if (password !== confirmPassword) {
        handleToast("error", "Passwords do not match");
        return;
      }

      const data = await signUpService({
        firstName,
        lastName,
        email,
        password,
      });

      // updating AuthContext
      setUser(data);
      setLocalStorage("user", data);
      // handleToast("success", "Sign up successful");
      navigate("/");
    } catch (error) {
      console.log(error)
      handleToast("error", error.response.data.errors);
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
