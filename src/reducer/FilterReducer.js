import { TYPE } from "../utils/constants";

export const filterInitialState = {
  searchFilter: "",
  priceFilter: 10000,
  categoryFilter: [],
  ratingFilter: "",
  sortByPrice: "",
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

    case TYPE.ADD_CATEGORY_FILTER: {
      return {
        ...state,
        categoryFilter: [...state.categoryFilter, action.payload],
      };
    }
    case TYPE.RATING_FILTER: {
      return {
        ...state,
        ratingFilter: action.payload,
      };
    }
    case TYPE.SORT_BY_PRICE: {
      return {
        ...state,
        sortByPrice: action.payload,
      };
    }
    case TYPE.CLEAR_FILTER: {
      return filterInitialState;
    }
    default:
      return;
  }
};
