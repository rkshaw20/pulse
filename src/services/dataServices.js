import axios from "axios";
import { TYPE, ToastType } from "../utils/constants";
import { showToast } from "../utils/utils";
import { toast } from "react-toastify";


export const getProducts = async (setLoader, dispatch) => {
  try {
    setLoader(true);
    const response = await axios.get("/api/products");
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
    showToast(ToastType.Success, 'Added To Cart')
    dispatch({ type: TYPE.ADD_TO_CART, payload: response.data.cart });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = async (id, dispatch, token, setBtnDisabled,isClear) => {
  try {
    setBtnDisabled(true);
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: token,
      },
    });
    setBtnDisabled(false);
    if(!isClear){
      showToast(ToastType.Warn, "Removed From Cart")
    }
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
    showToast(ToastType.Success, "Added To Wishlist")
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
    showToast(ToastType.Warn, 'Removed From Wishlist')
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
    setBtnDisabled(false);
    dispatch({ type: TYPE.UPDATE_PRODUCT_QTY, payload: response.data.cart });
    showToast(ToastType.Success, 'Quantity Updated')
  } catch (error) {
    console.log(error);
  }
};
