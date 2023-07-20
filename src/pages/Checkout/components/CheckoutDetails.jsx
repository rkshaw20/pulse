import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

import { useDataContext } from "../../../contexts/DataContextProvider";

import { showToast } from "../../../utils/utils";
import { TYPE, ToastType } from "../../../utils/constants";
import { removeFromCart } from "../../../services/dataServices";
import { useAuthContext } from "../../../contexts/AuthContextProvider";
import { useFilterContext } from "../../../contexts/FIlterContextProvider";
import { toast } from "react-toastify";

const CheckoutDetails = ({ selectedAddress }) => {
  const { cart, dataDispatch } = useDataContext();
  const { dispatchFilter } = useFilterContext();

  const { token, user } = useAuthContext();
  const navigate = useNavigate();

  const totalItemPrice = cart.reduce(
    (acc, { price, qty }) => acc + price * qty,
    0
  );
  const totalDiscount = totalItemPrice * 0.05;
  const totalAmount = totalItemPrice - totalDiscount + 40;

  const handlePlaceOrder = () => {
    !selectedAddress
      ? showToast(ToastType.Warn, "Select a Address")
      : displayRazorpay();
  };

  const clearCartAndFilter = () => {
    dataDispatch({ type: TYPE.CLEAR_CART });
    dispatchFilter({ type: TYPE.CLEAR_FILTER });
    for (const item of cart) {
      removeFromCart(item._id, dataDispatch, token, () => {}, true);
    }
  };
  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const Popper = () => {
    var end = Date.now() + 2 * 1000;
    var colors = ["#392f5a", "#9583cf", "#ff6f61"];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 40,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 140,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const displayRazorpay = async () => {
    if (selectedAddress) {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        toast.error("Razorpay SDK failed to load");
        return;
      }

      const options = {
        key: "rzp_test_Dq1Ng0ZbzTVaEk",
        amount: totalAmount * 100,
        currency: "INR",
        name: "Pulse",
        description: "Thanks for placing order!",
        handler: function (response) {
          navigate("/orderPage");
          showToast(ToastType.Success, "Payment Confirmed");
          Popper();
          clearCartAndFilter();
        },
        prefill: {
          name: `${user?.firstName} ${user?.lastName}`,
          email: user?.email,
          contact: "9303203921",
        },
        theme: {
          color: "#617a55",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  };

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
