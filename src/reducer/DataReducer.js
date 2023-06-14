import { TYPE } from "../utils/constants";

export const dataInitialState = {
  products: [],
  categories: [],
  cart: [],
  wishlist: [],
  addresses: [
    {
      id: "1",
      name: "Raj Kishor Shaw",
      phone: "9809808021",
      addressText: "12/1 , Bara Bazaar",
      city: "Kolkata",
      pin: "700001",
      state: "West Bengal",
    },
  ],
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

    case TYPE.CLEAR_CART:
      return {
        ...state,
        cart: [],
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

    case TYPE.CLEAR_WISHLIST: {
      return {
        ...state,
        wishlist: [],
      };
    }
    case TYPE.ADD_ADDRESS:
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
      };

    case TYPE.EDIT_ADDRESS: {
      return {
        ...state,
        addresses: state.addresses.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    }

    case TYPE.DELETE_ADDRESS: {
      return {
        ...state,
        addresses: state.addresses.filter(({ id }) => id !== action.payload),
      };
    }
    default:
      return;
  }
};
