import { useReducer } from "react";
import { createContext, useContext } from "react";
import { dataReducer, dataInitialState } from "../reducer/DataReducer";
import { useEffect } from "react";
import { getProducts, getCategories } from "../services/dataServices";
import { useAuthContext } from "./AuthContextProvider";
import { TYPE } from "../utils/constants";
import { useState } from "react";

const DataContext = createContext({
  products: [],
  categories: [],
  cart: [],
  wishlist: [],
  dataDispatch:()=>{},
  setLoader: ()=>{},
});

export const useDataContext = () => useContext(DataContext);

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, dataInitialState);
  const [loader, setLoader]=useState(false);
  const { user } = useAuthContext();

  useEffect(() => {
    getProducts(setLoader,dispatch);
    getCategories(setLoader,dispatch);
  }, []);


  // useEffect(() => {
  //   if (user) {
  //     dispatch({ type: TYPE.ADD_TO_CART, payload: user.cart });
  //   }
  // }, [user]);

  return (
    <DataContext.Provider
      value={{
        products: state.products,
        categories: state.categories,
        cart: state.cart,
        dataDispatch:dispatch,
        loader,
        setLoader,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
