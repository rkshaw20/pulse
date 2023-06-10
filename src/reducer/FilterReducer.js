import { TYPE } from "../utils/constants";

export const filterInitialState = {
  searchFilter: "",
  priceFilter: 10000,
  categoryFilter: [],
  ratingFilter: "",
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case TYPE.SEARCH_FILTER: {
      return {
        ...state,
        searchFilter: action.payload,
      };
    }
    case TYPE.PRICE_FILTER: {
      return {
        ...state,
        priceFilter: action.payload,
      };
    }
    case TYPE.CATEGORY_FILTER: {
      return state.categoryFilter.includes(action.payload)
        ? {
            ...state,
            categoryFilter: state.categoryFilter.filter(
              (item) => item !== action.payload
            ),
          }
        : {
            ...state,
            categoryFilter: [...state.categoryFilter, action.payload],
          };
    }
    case TYPE.RATING_FILTER:{
        return{
            ...state, ratingFilter: action.payload
        }
    }
    default:
      return;
  }
};
