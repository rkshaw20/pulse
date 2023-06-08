import { useState } from "react";

import "./Cart.css";

import { products } from "../../backend/db/products";
import CartProductCard from "./components/CartProductCard";
import PriceDetails from "./components/PriceDetails";

const Cart = () => {
  // console.log(products)
  const [cart, setCart] = useState(true);

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
            {products.map((product) => (
              <CartProductCard key={product._id} product={product} />
            ))}
          </div>
        {/* </div> */}
        <div className="price-details-section">
        <PriceDetails cart={products} />
      </div>
      </div>

      
    </div>
  );
};

export default Cart;
