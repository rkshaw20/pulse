import { useAuthContext } from "../../contexts/AuthContextProvider";
import "./UserProfile.css";

const UserProfile = () => {
  const { user, setUser } = useAuthContext();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <div className="profile-page">
      <h2>Account</h2>
      <div className="profile-container">
        <div className="profile-details">
          <div className="profile-details-header">
            <h3>Profile Details</h3>
            <button className="address-btn">Address</button>
          </div>

          <p>Full Name: {user.username}</p>
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
