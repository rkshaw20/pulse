import { Link, useLocation, useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useFilterContext } from "../contexts/FIlterContextProvider";
import { useState } from "react";
import { TYPE } from "../utils/constants";
import logo from "../assets/favicon.ico";
import { useEffect } from "react";
import { useDataContext } from "../contexts/DataContextProvider";
import { getFilteredProducts } from "../utils/getFilteredProducts";

const Header = () => {
  const { dispatchFilter } = useFilterContext();
  const { cart, wishlist, products } = useDataContext();
  const { appliedFilters } = useFilterContext();

  const [search, setSearch] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let timer = setTimeout(() => {
      dispatchFilter({ type: TYPE.SEARCH_FILTER, payload: search });
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    setSearch(appliedFilters.searchFilter);
  }, [appliedFilters]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const closeSuggestion = () => {
    setTimeout(() => {
      setShowSuggestion(false);
    }, 250);
  };
  const filteredProduct = getFilteredProducts(products, appliedFilters);

  return (
    <div className="header">
      <div className="nav left">
        <Link to="/" className="main-title">
          Pulse.
        </Link>
        <Link to="/" className="main-logo">
          <img src={logo} alt="logo" />
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
          onChange={(e) => {
            handleSearchChange(e);
            setShowSuggestion(true);
          }}
          onBlur={closeSuggestion}
        />
        {showSuggestion && search.length ? (
          <div className="search-suggestion">
            {filteredProduct.length ? (
              filteredProduct.map((product) => (
                <div key={product._id}>
                  <Link to="/productPage" className="search-item">
                    {product.title}
                  </Link>
                </div>
              ))
            ) : (
              <p className="no-product-found">No product with this name </p>
            )}{" "}
          </div>
        ): null}
      </div>

      <div className="navbar-right">
        <div className="cartIcon" onClick={() => navigate("/cart")}>
          {cart.length > 0 && <div className="cart-popUp">{cart.length}</div>}
          <ShoppingBagIcon className="nav nav-bag" />
        </div>
        <div
          className="userProfileIcon"
          onClick={() => navigate("/userProfile")}
        >
          <AccountBoxIcon className="nav nav-userProfile" />
        </div>
        <div className="wishlistIcon" onClick={() => navigate("/wishlist")}>
          {wishlist.length > 0 && (
            <div className="wishlist-popUp">{wishlist.length}</div>
          )}
          <FavoriteBorderIcon className="nav nav-wishlist" />
        </div>
      </div>
    </div>
  );
};
export default Header;
