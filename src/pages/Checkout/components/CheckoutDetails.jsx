import { Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContextProvider";
import { useDataContext } from "../../../contexts/DataContextProvider";
import { useFilterContext } from "../../../contexts/FIlterContextProvider";

const CheckoutDetails = ({ addressSelected }) => {
  const { cart } = useDataContext();

  const totalItemPrice = cart.reduce(
    (acc, { price, qty }) => acc + price * qty,
    0
  );
  const totalDiscount = totalItemPrice * 0.05;
  const totalAmount = totalItemPrice - totalDiscount + 40;

  const handlePlaceOrder=()=>{}
  return (
    <div className="chechout-order-details">
      <h3>Order Details </h3>
      <div className="order-details">
        <div className="flex-row bold">
          <p>Items</p>
          <p>Quantity</p>
        </div>
        <div className="flex-items-col">
          {cart.map(({ _id, title, qty }) => {
            
            return (
              <div className="flex-row" key={_id}>
                <p>{title}</p>
                <p>{qty}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <h3>Price Details</h3>
      <div className="flex-coloumn">
        <div className="flex-items-col">
          <div className="flex-row">
            <p>Price</p>
            <p>₹ {totalItemPrice}</p>
          </div>
          <div className="flex-row">
            <p>Discount (5% off)</p>
            <p>₹ {totalDiscount}</p>
          </div>
          <hr />
          <div className="flex-row">
            <p> <b>Total Amount</b> </p>
            <p><b>₹ {totalAmount}</b></p>
          </div>
        </div>
      </div>
      <Link to='/orderPage'>
      <button className="place-order-btn" onClick={handlePlaceOrder}>
        Place Order
      </button>
      </Link>
    </div>
  );
};

export default CheckoutDetails;