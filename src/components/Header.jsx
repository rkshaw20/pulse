import { Link, useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Header = () => {
  const navigate=useNavigate()

  // const handleUserClick=()=>{}
  return (
    <div className="header">
      <div className="nav left">
        <Link to="/" className="main-title">
          Pulse.
        </Link>
      </div>

      <div className="search-container">
        <div className="search-icon">
          <SearchIcon className="nav nav-search" />
        </div>
        <input type="search" className="search-input" placeholder="search" />
      </div>

      <div className="navbar-right">
        <div>
          {" "}
          <Link to="/login" className="login-btn">
            {" "}
            Login
          </Link>
        </div>

        <div onClick={()=>navigate('/cart')}>
          <ShoppingBagIcon className="nav nav-bag" />
        </div>
        <div className="userProfileIcon" onClick={()=>navigate('/userProfile')}>
          <AccountBoxIcon className="nav nav-userProfile" />
        </div>
        <div onClick={()=>navigate('/wishlist')}>
          <FavoriteBorderIcon className="nav nav-wishlist" />
        </div>
      </div>
    </div>
  );
};
export default Header;
