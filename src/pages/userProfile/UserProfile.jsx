import { useAuthContext } from "../../contexts/AuthContextProvider";
import "./UserProfile.css";

const UserProfile = () => {
  const { user, setUser, token, setToken } = useAuthContext();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token")
    setUser(null);
    setToken(null);
  };

  const fullName=user.firstName + user.lastName;
  return (
    <div className="profile-page">
      <h2>Account</h2>
      <div className="profile-container">
        <div className="profile-details">
          <div className="profile-details-header">
            <h3>Profile Details</h3>
            <button className="address-btn">Address</button>
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
