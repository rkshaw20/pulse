import SearchIcon from "@mui/icons-material/Search";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Header = () => {
  return (
    <div className="header">

      <div className="nav left"><span>Pulse.</span></div>

      <div className="search-container">
        <div className="search-icon">
         <SearchIcon className="nav nav-search" />
        </div>
        <input type="search" className="search-input" placeholder="search" />
      </div>

      <div className="navbar-right">
       <div><ShoppingBagIcon className="nav nav-bag" /></div> 
       <div><AccountBoxIcon className="nav nav-userProfile" /></div> 
       <div><FavoriteBorderIcon className="nav nav-wishlist" /></div> 
      </div>
    </div>
  );
};
export default Header;
