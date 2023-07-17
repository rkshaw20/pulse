import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../contexts/DataContextProvider";
import { useFilterContext } from "../../contexts/FIlterContextProvider";
import { TYPE } from "../../utils/constants";

const OrderPage = () => {
  const {dataDispatch}=useDataContext();
  const {dispatchFilter}=useFilterContext()
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    dataDispatch({ type: TYPE.CLEAR_CART });
    dispatchFilter({ type: TYPE.CLEAR_FILTER });
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="order-page">
      <h1>Your Order has been placed!</h1>
    </main>
  );
};

export default OrderPage;