import { Link, useLocation, useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useFilterContext } from "../contexts/FIlterContextProvider";
import { useState } from "react";
import { TYPE } from "../utils/constants";
import { useEffect } from "react";

const Header = () => {
  const { appliedFilters, dispatchFilter } = useFilterContext();
  const [search , setSearch] = useState("");

  const navigate = useNavigate();
  const location=useLocation();
  // useEffect(()=>{
  //   setSearch(appliedFilters.searchFilter)
  // },[appliedFilters])

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
      dispatchFilter({ type: TYPE.SEARCH_FILTER, payload: search });
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
        <div>
          {" "}
          <Link to="/login" className="login-btn">
            {" "}
            Login
          </Link>
        </div>

        <div onClick={() => navigate("/cart")}>
          <ShoppingBagIcon className="nav nav-bag" />
        </div>
        <div
          className="userProfileIcon"
          onClick={() => navigate("/userProfile")}
        >
          <AccountBoxIcon className="nav nav-userProfile" />
        </div>
        <div onClick={() => navigate("/wishlist")}>
          <FavoriteBorderIcon className="nav nav-wishlist" />
        </div>
      </div>
    </div>
  );
};
export default Header;
