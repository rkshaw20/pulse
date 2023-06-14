import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../contexts/DataContextProvider";
import { useEffect, useState } from "react";

import "./CheckoutPage.css";
import AddressList from "./components/AddressList";
import CheckoutDetails from "./components/CheckoutDetails";

const CheckoutPage = () => {
  const { cart } = useDataContext();
  const navigate = useNavigate();

  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/productPage");
    }
  }, [cart, navigate]);

  return (
    <div className="checkout-page">
      <h2 className="checkout-header">Checkout</h2>
      <div className="checkout-container">
        <AddressList
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
        />

        <CheckoutDetails />
      </div>
    </div>
  );
};

export default CheckoutPage;
