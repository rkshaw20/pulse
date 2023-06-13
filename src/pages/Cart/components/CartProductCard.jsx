import "./CartProductCard.css";

import {
  getPercentageOff,
  isProductInWishlist,
} from "../../../utils/productUtils";
import { useDataContext } from "../../../contexts/DataContextProvider";
import { useAuthContext } from "../../../contexts/AuthContextProvider";
import { useState } from "react";
import {
  addToWishlist,
  removeFromCart,
  removeFromWishlist,
  updateProductQty,
} from "../../../services/dataServices";
import { useLocation, useNavigate } from "react-router-dom";

const CartProductCard = ({ product }) => {
  const { wishlist, dataDispatch } = useDataContext();
  const { token } = useAuthContext();
  const [btnDisabled, setBtnDisabled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { _id, image, title, base_price, price, qty } = product;

  const removeFromCartHandler = (id) => {
    removeFromCart(id, dataDispatch, token, setBtnDisabled);
  };

  const updateProductQtyHandler = (id, type) =>
    updateProductQty(dataDispatch, id, token, type, setBtnDisabled);

  const isInWishlist = isProductInWishlist(wishlist, _id);

  const addToWishlistHandler = () => {
    token
      ? isInWishlist
        ? removeFromWishlist(_id, dataDispatch, token, setBtnDisabled)
        : addToWishlist(dataDispatch, product, token, setBtnDisabled)
      : navigate("/login", { state: { from: location?.pathname } });
  };
  const percentageOff = getPercentageOff(base_price, price);
  return (
    <div className="cart-product-card">
      <div className="cart-product-image">
        <img src={image} alt={title} className="cart-img" />
      </div>
      <div className="cart-product-info">
        <h3>{title}</h3>
        <div className="card-price">
          <p className="discount-price">₹{price}</p>
          <p className="original-price">₹{base_price}</p>
          <p className="percentage-off">({percentageOff}% OFF)</p>
        </div>
        <div className="cart-quantity">
          <button
            className="dec-btn"
            disabled={qty === 1 || btnDisabled}
            onClick={() => updateProductQtyHandler(_id, "DEC")}
          >
            -
          </button>
          <span className="quantity-value">{qty}</span>
          <button
            className="inc-btn"
            onClick={() => updateProductQtyHandler(_id, "INC")}
          >
            +
          </button>
        </div>
        <div className="cart-product-btn-group">
          <button
            className="cart-remove-btn"
            onClick={() => removeFromCartHandler(_id)}
            disabled={btnDisabled}
          >
            Remove
          </button>
          <button
            className="cart-addToWishlist-btn"
            onClick={() => addToWishlistHandler()}
          >
            {isInWishlist ? " Unwishlist" : "Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
