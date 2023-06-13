import { TYPE } from "../utils/constants";

export const dataInitialState = {
  products: [],
  categories: [],
  cart: [],
  wishlist: [],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case TYPE.GET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
      };
    case TYPE.GET_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload],
      };
    case TYPE.ADD_TO_CART:
      return {
        ...state,
        cart: [...action.payload],
      };

    case TYPE.UPDATE_PRODUCT_QTY:
      return {
        ...state,
        cart: [...action.payload],
      };
    case TYPE.REMOVE_FROM_CART:
      return {
        ...state,
        cart: [...action.payload],
      };
    case TYPE.ADD_TO_WISHLIST: {
      return {
        ...state,
        wishlist: [...action.payload],
      };
    }
    case TYPE.REMOVE_FROM_WISHLIST: {
      return {
        ...state,
        wishlist: [...action.payload],
      };
    }
    default:
      return;
  }
};
