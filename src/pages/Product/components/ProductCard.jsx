import { useLocation, useNavigate } from "react-router-dom";

import "./ProductCard.css";

import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getPercentageOff, isProductInCard } from "../../../utils/productUtils";
import { useAuthContext } from "../../../contexts/AuthContextProvider";
import { useDataContext } from "../../../contexts/DataContextProvider";
import { useState } from "react";
import { addToCart } from "../../../services/dataServices";

//   const toggleWishlist=()=>{}
const ProductCard = ({ product }) => {
  const {
    _id,
    image,
    category,
    rating,
    description,
    title,
    trending,
    base_price,
    price,
    reviews,
    in_stock,
    stock_count,
  } = product;
  const { user, token } = useAuthContext();
  const { cart, dataDispatch } = useDataContext();
  const [btnDisabled, setBtnDisabled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const percentageOff = getPercentageOff(base_price, price);
  const isInCart = isProductInCard(cart, _id);

  const addToCartHandler = () =>
    token
      ? isInCart
        ? navigate("/cart")
        : addToCart(dataDispatch, product, token, setBtnDisabled)
      : navigate("/login", { state: { from: location?.pathname } });

  return (
    <div className="productCard">
      <img
        className="card-image"
        src={image}
        alt={title}
        onClick={() => navigate(`/product/${product._id}`)}
      />
      {trending && <span className="card-trending">Trending</span>}
      <span>
        <FavoriteIcon className="wishlist-icon" />
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
            {isInCart && <ArrowForwardIcon className="forward-icon"/>}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
