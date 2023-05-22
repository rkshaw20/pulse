import { useAuthContext } from "../../contexts/AuthContextProvider";

const UserPage=()=>{
    const {setUser}=useAuthContext()

    const handleLogout=()=>{
        localStorage.removeItem('user');
        setUser(null)
    }
    return(
        <div className="profile-container">
            <div className="profile-details">
                <p>Full Name: Raj</p>
                <p>Email:raj@gmail.com</p>
            </div>
            <div className="logOut-btn"><button onClick={handleLogout}>Log Out</button></div>
        </div>
    )
}

export default UserPage;