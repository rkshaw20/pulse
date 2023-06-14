import { Link, useLocation, useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useFilterContext } from "../contexts/FIlterContextProvider";
import { useState } from "react";
import { TYPE } from "../utils/constants";
import { useEffect } from "react";
import { useDataContext } from "../contexts/DataContextProvider";

const Header = () => {
  const { dispatchFilter } = useFilterContext();
  const {cart , wishlist}=useDataContext();
  const [search , setSearch] = useState("");

  const navigate = useNavigate();
  const location=useLocation();

  useEffect(() => {
    let timer;
    if (location?.pathname === "/productPage") {
      timer = setTimeout(() => {
        dispatchFilter({ type: TYPE.SEARCH_FILTER, payload: search });
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [search]);

 
  const handleSearchChange = (e) => {
      setSearch(e.target.value);
  };

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
        <input
          type="search"
          className="search-input"
          value={search}
          placeholder="search..."
          onChange={(e)=>handleSearchChange(e)}
        />
      </div>

      <div className="navbar-right">
        <div className='cartIcon' onClick={() => navigate("/cart")}>
       {cart.length>0 &&  (<div className="cart-popUp">{cart.length}</div>)}  
          <ShoppingBagIcon className="nav nav-bag" />
        </div>
        <div
          className="userProfileIcon"
          onClick={() => navigate("/userProfile")}
        >
          <AccountBoxIcon className="nav nav-userProfile" />
        </div>
        <div className="wishlistIcon" onClick={() => navigate("/wishlist")}>
       {wishlist.length>0 && (<div className="wishlist-popUp">{wishlist.length}</div>)}  
          <FavoriteBorderIcon className="nav nav-wishlist" />
        </div>
      </div>
    </div>
  );
};
export default Header;
