import { useLocation, useNavigate, useParams } from "react-router-dom";

import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./Product.css";
import { useDataContext } from "../../contexts/DataContextProvider";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import {
  getPercentageOff,
  isProductInCard,
  isProductInWishlist,
} from "../../utils/productUtils";
import { useState } from "react";
import {
  addToCart,
  addToWishlist,
  getSingleProduct,
  removeFromWishlist,
} from "../../services/dataServices";
import { useEffect } from "react";

const Product = () => {
  const { token } = useAuthContext();
  const { cart, wishlist, dataDispatch, setLoader } = useDataContext();
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getSingleProduct(productId, setProduct, setLoader);
  }, [productId, setLoader]);

  if (!product) {
    return <div>Loading...</div>;
  }

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
    <div className="single-card-container">
      <div className="single-card">
        <div className="card-left">
          <img className="card-image" src={image} alt={title} />
          {trending && <span className="product-trending-icon">Trending</span>}

          <span
            className={`product-wishlist-icon ${isInWishlist && "in-wishlist"}`}
            onClick={() => addToWishlistHandler()}
          >
            <FavoriteIcon />
          </span>
        </div>

        <div className="card-details">
          <div className="product-header">
            <h3>{title}</h3>
            <div className="review">
              <div className="product-rating">
                {rating} <StarIcon />
              </div>
              <div className="product-review">{reviews} Reviews</div>
            </div>

            <div className="product-price">
              <p className="discount-price">₹{price}</p>
              <p className="original-price">₹{base_price}</p>
              <p className="percentage-off">({percentageOff}% OFF)</p>
            </div>
          </div>
          <div className="product-info">
            <p className="product-category">
              {" "}
              <b>Category:</b> {category}{" "}
            </p>
            <p className="availability">
              <b>Availability :</b>
              {stock_count > 0 ? " In Stock" : " Out Of Stock"}{" "}
            </p>
            <p className="product-description">
              {" "}
              <b>Description :</b> {description}
            </p>
          </div>
          <div>
            <button
              className={`add-to-cart-btn ${isInCart && "in-cart"}`}
              onClick={addToCartHandler}
              disabled={btnDisabled}
            >
              {isInCart ? "Go to Cart " : "Add to Cart "}
              {isInCart && <ArrowForwardIcon className="forward-icon" />}
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
