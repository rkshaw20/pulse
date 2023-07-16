import { useLocation, useNavigate } from "react-router-dom";

import "./ProductCard.css";

import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  getPercentageOff,
  isProductInCard,
  isProductInWishlist,
} from "../../../utils/productUtils";
import { useAuthContext } from "../../../contexts/AuthContextProvider";
import { useDataContext } from "../../../contexts/DataContextProvider";
import { useState } from "react";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../../services/dataServices";

const ProductCard = ({ product }) => {
  const {
    _id,
    image,
    title,
    rating,
    trending,
    base_price,
    price,
  } = product;
  const { token } = useAuthContext();
  const { cart, wishlist, dataDispatch } = useDataContext();
  const [btnDisabled, setBtnDisabled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const percentageOff = getPercentageOff(base_price, price);
  const isInCart = isProductInCard(cart, _id);
  const isInWishlist = isProductInWishlist(wishlist, _id);

  const addToCartHandler = () =>
    token
      ? isInCart
        ? navigate("/cart")
        : addToCart(dataDispatch, product, token, setBtnDisabled)
      : navigate("/login", { state: { from: location?.pathname } });

  const addToWishlistHandler = () => {
    token
      ? isInWishlist
        ? removeFromWishlist(_id, dataDispatch, token, setBtnDisabled)
        : addToWishlist(dataDispatch, product, token, setBtnDisabled)
      : navigate("/login", { state: { from: location?.pathname } });
  };

  return (
    <div className="productCard">
      <img
        className="card-image"
        src={image}
        alt={title}
        onClick={() => navigate(`/product/${product._id}`)}
      />
      {trending && <span className="card-trending">Trending</span>}
      <span
        className={`wishlist-icon ${isInWishlist && "in-wishlist"}`}
        onClick={()=>addToWishlistHandler()}
      >
        <FavoriteIcon />
      </span>
      <div className="card-info">
        <div className="card-header">
          <div className="card-title">{title}</div>
          <div className="card-rating">
            {rating}
            <StarIcon className="rating-star" />
          </div>
        </div>

        <div className="card-price">
          <p className="discount-price">₹{price}</p>
          <p className="original-price">₹{base_price}</p>
          <p className="percentage-off">({percentageOff}% OFF)</p>
        </div>
        <div>
          <button
            className={`add-to-cart-btn ${isInCart && "in-cart"}`}
            onClick={addToCartHandler}
            disabled={btnDisabled}
          >
            {isInCart ? "Go to Cart " : "Add to Cart "}
            {isInCart && <ArrowForwardIcon className="forward-icon" />}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
