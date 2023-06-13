import "./Cart.css";
import CartProductCard from "./components/CartProductCard";
import PriceDetails from "./components/PriceDetails";
import { useDataContext } from "../../contexts/DataContextProvider";

const Cart = () => {
  const { cart, wishlist } = useDataContext();
  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Cart ({cart.length})</h1>
      </div>
      {!cart.length ? <p className="cart-empty-message">Your Cart Is Empty ! ☹️</p> :
      <div className="cart-details">
        <div className="cart-products-section">
          {cart.map((product) => (
            <CartProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className="price-details-section">
          <PriceDetails cart={cart} />
        </div>
      </div>}
    </div>
  );
};

export default Cart;
