import { Link } from "react-router-dom";
import "./PriceDetails.css";

const PriceDetails = ({ cart }) => {
  const totalItemPrice = cart.reduce(
    (acc, { price, qty }) => acc + price * qty,
    0
  );
  const totalDiscount = totalItemPrice * 0.05;
  const totalCartPrice = totalItemPrice - totalDiscount + 40;
  return (
    <div className="price-details">
      <div className="price-details-header">
        <h3>Price Details</h3>
      </div>
      <div className="price-calculation">
        <div className="flex-container" >
          <p className="bold-style">Price({cart.length} item)</p>
          <p className="cal-price">₹ {totalItemPrice}</p>
        </div>
        <div className="flex-container">
          <p className="bold-style">Discount (5% off)</p>
          <p className="cal-price">-₹ {totalDiscount.toFixed()}</p>
        </div>
        <div className="flex-container">
          <p className="bold-style">Delivery Fee</p>
          <p className="cal-price">₹ 40</p>
        </div>

        <hr />
        <div className="total-amount flex-container">
        <p className="bold-style">Total Amount</p>
        <p className="cal-price">₹ {totalCartPrice.toFixed()}</p>
      </div>
      </div >
      

      <div className="price-details-checkout">
        <Link to="/checkoutPage">
          <button className="checkout-btn">Checkout</button>
        </Link>
      </div>
    </div>
  );
};
export default PriceDetails;
