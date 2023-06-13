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

  useEffect(() => {
    getProducts(setLoader,dispatch);
    getCategories(setLoader,dispatch);
  }, []);

  return (
    <DataContext.Provider
      value={{
        products: state.products,
        categories: state.categories,
        cart: state.cart,
        wishlist:state.wishlist,
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
