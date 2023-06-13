import axios from "axios";
import { TYPE } from "../utils/constants";
import { toast } from "react-toastify";

export const getProducts = async (setLoader, dispatch) => {
  try {
    setLoader(true);
    const response = await axios.get("/api/products");
    // console.log(response.data.products , 'checking product')
    setLoader(false);
    dispatch({
      type: TYPE.GET_PRODUCTS,
      payload: response.data.products,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getCategories = async (setLoader, dispatch) => {
  try {
    setLoader(true);
    const response = await axios.get("/api/categories");
    setLoader(false);
    dispatch({
      type: TYPE.GET_CATEGORIES,
      payload: response.data.categories,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = async (dispatch, product, token, setBtnDisabled) => {
  try {
    setBtnDisabled(true);
    const response = await axios.post(
      "/api/user/cart",
      {
        product,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    setBtnDisabled(false);
    dispatch({ type: TYPE.ADD_TO_CART, payload: response.data.cart });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = async (id, dispatch, token, setBtnDisabled) => {
  try {
    setBtnDisabled(true);
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: token,
      },
    });
    setBtnDisabled(false);

    dispatch({ type: TYPE.REMOVE_FROM_CART, payload: response.data.cart });
  } catch (error) {
    console.log("error while removing item", error);
  }
};

export const addToWishlist = async (
  dispatch,
  product,
  token,
  setBtnDisabled
) => {
  try {
    setBtnDisabled(true);
    const response = await axios.post(
      "/api/user/wishlist",
      {
        product,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    setBtnDisabled(false);
    dispatch({ type: TYPE.ADD_TO_WISHLIST, payload: response.data.wishlist });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromWishlist = async (
  id,
  dispatch,
  token,
  setBtnDisabled
) => {
  try {
    setBtnDisabled(true);
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: {
        authorization: token,
      },
    });
    setBtnDisabled(false);
    dispatch({
      type: TYPE.REMOVE_FROM_WISHLIST,
      payload: response.data.wishlist,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleProduct = async (id, setProduct, setLoader) => {
  try {
    setLoader(true);
    const response = await axios.get(`/api/products/${id}`);
    setLoader(false);
    setProduct(response.data.product);
  } catch (error) {
    console.log("error getCartProduct", error);
  }
};

export const updateProductQty = async (
  dispatch,
  id,
  token,
  type,
  setBtnDisabled
) => {
  try {
    setBtnDisabled(true);
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: type === "INC" ? "increment" : "decrement",
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log(response)
    setBtnDisabled(false);
    dispatch({ type: TYPE.UPDATE_PRODUCT_QTY, payload: response.data.cart });
  } catch (error) {
    console.log(error);
  }
};
