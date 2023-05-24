import { TYPE } from "../utils/constants";

export const dataInitaialState = {
  products: [],
  categories: [],
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
    default:
      return;
  }
};
