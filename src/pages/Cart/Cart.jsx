import { useState } from "react";
import "./Cart.css";
import CartProductCard from "./components/CartProductCard";
import PriceDetails from "./components/PriceDetails";
import { useDataContext } from "../../contexts/DataContextProvider";

const Cart = () => {
  // console.log(products)
const {cart}=useDataContext()
  return (
    <div className="cart-page">
         <div className="cart-header">
          <h1>Cart (2)</h1>
          {!cart && (
            <p className="cart-empty-message">Your Cart Is Empty ! ☹️</p>
          )}
        </div>
      <div className="cart-details">
        {/* <div className="cart-container"> */}
          <div className="cart-products-section">
            {cart.map((product) => (
              <CartProductCard key={product._id} product={product} />
            ))}
          </div>
        {/* </div> */}
        <div className="price-details-section">
        <PriceDetails cart={cart} />
      </div>
      </div>

      
    </div>
  );
};

export default Cart;
