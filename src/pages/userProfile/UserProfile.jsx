import { useAuthContext } from "../../contexts/AuthContextProvider";

const UserProfile=()=>{
    const {user,setUser}=useAuthContext()

    const handleLogout=()=>{
        localStorage.removeItem('user');
        setUser(null)
    }
    return(
        <div className="profile-container">
            <div className="profile-details">
                <p>Full Name: {user.username}</p>
                <p>Email: {user.email}</p>
            </div>
            <div className="logOut-btn"><button onClick={handleLogout}>Log Out</button></div>
        </div>
    )
}

export default UserProfile;