import { useNavigate } from "react-router-dom";

import { useDataContext } from "../../../contexts/DataContextProvider";

import { showToast } from "../../../utils/utils";
import { ToastType } from "../../../utils/constants";

const CheckoutDetails = ({ selectedAddress}) => {
  const { cart } = useDataContext();
  const navigate = useNavigate();

  const totalItemPrice = cart.reduce(
    (acc, { price, qty }) => acc + price * qty,
    0
  );
  const totalDiscount = totalItemPrice * 0.05;
  const totalAmount = totalItemPrice - totalDiscount + 40;

  const handlePlaceOrder = () =>
    !selectedAddress
      ? showToast(ToastType.Warn, "Select a Address")
      : navigate("/orderPage");

  return (
    <div className="checkout-order-details">
      <h3>Order Details </h3>
      <div className="order-list">
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
            <p>
              {" "}
              <b>Total Amount</b>{" "}
            </p>
            <p>
              <b>₹ {totalAmount}</b>
            </p>
          </div>
        </div>
      </div>
      <button className="place-order-btn" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default CheckoutDetails;
