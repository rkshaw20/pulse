import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import "./UserProfile.css";
import { useDataContext } from "../../contexts/DataContextProvider";
import { TYPE } from "../../utils/constants";
import { useFilterContext } from "../../contexts/FIlterContextProvider";

const UserProfile = () => {
  const { user, setUser, setToken } = useAuthContext();
  const { dataDispatch,setLoader } = useDataContext();
  const { dispatchFilter } = useFilterContext();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    dataDispatch({ type: TYPE.CLEAR_CART });
    dispatchFilter({ type: TYPE.CLEAR_FILTER });
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 500);
  };

  const fullName = `${user?.firstName}  ${ user?.lastName}`;
  return (
    <div className="profile-page">
      <h2>Account</h2>
      <div className="profile-container">
        <div className="profile-details">
          <div className="profile-details-header">
            <h3>Profile Details</h3>
            <Link to="/address">
              <button className="address-btn">Address</button>
            </Link>
          </div>

          <p>Full Name: {fullName}</p>
          <p>Email: {user.email}</p>
        </div>
        <div className="logout-btn">
          <button onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
