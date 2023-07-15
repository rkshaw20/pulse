import { useState } from "react";
import { useFilterContext } from "../../../contexts/FIlterContextProvider";
import { TYPE } from "../../../utils/constants";
import "./ProductFilterBar.css";
import StarIcon from "@mui/icons-material/Star";
import { useDataContext } from "../../../contexts/DataContextProvider";

const ProductFilterBar = () => {
  const { categories } = useDataContext();
  const { appliedFilters, dispatchFilter } = useFilterContext();

  const rating = [1, 2, 3, 4];

  const handleFilter = (e, filterType) =>
    dispatchFilter({ type: filterType, payload: e.target.value });

  const handleClearFilter = (filterType) =>
    dispatchFilter({ type: filterType });

  return (
    <div className="filter-container scrollbar ">
      <hr />
      <div className="filter-head">
        <p>
          <b>Filters</b>{" "}
        </p>

        <p
          className="clear-filter-btn"
          onClick={() => handleClearFilter(TYPE.CLEAR_FILTER)}
        >
          Reset
        </p>
      </div>

      <div className="price-sort">
        <fieldset>
          <legend>Sort By Price</legend>
          <label htmlFor="highToLow">
            <input
              type="radio"
              name="price-sort"
              id="highToLow"
              value="HIGH_TO_LOW"
              checked={appliedFilters.sortByPrice === "HIGH_TO_LOW"}
              onChange={(e) => handleFilter(e, TYPE.SORT_BY_PRICE)}
            />
            High to Low
          </label>
          <label htmlFor="lowToHigh">
            <input
              type="radio"
              name="price-sort"
              id="lowToHigh"
              value="LOW_TO_HIGH"
              checked={appliedFilters.sortByPrice === "LOW_TO_HIGH"}
              onChange={(e) => handleFilter(e, TYPE.SORT_BY_PRICE)}
            />
            Low to High
          </label>
        </fieldset>
      </div>

      {/* price filter */}
      <div className="filter-price">
        <fieldset>
          <legend>
            {" "}
            <b>Price</b>{" "}
          </legend>
          <div className="price-range">
            <p>1k</p>
            <p>5k</p>
            <p>10k</p>
          </div>
          <input
            className="price"
            type="range"
            min="1000"
            max="10000"
            step="100"
            value={appliedFilters.priceFilter}
            onChange={(e) => handleFilter(e, TYPE.PRICE_FILTER)}
          />
        </fieldset>
      </div>

      {/* category filter */}
      <div className="filter-category">
        <fieldset className="checkbox">
          <legend>
            {" "}
            <b>Category</b>
          </legend>
          {categories.map(({ categoryName }) => (
            <label key={categoryName} htmlFor={categoryName}>
              <input
                id={categoryName}
                type="checkbox"
                value={categoryName.toLowerCase()}
                checked={appliedFilters.categoryFilter.includes(
                  categoryName.toLowerCase()
                )}
                onChange={(e) => handleFilter(e, TYPE.CATEGORY_FILTER)}
              />
              {categoryName}
            </label>
          ))}
        </fieldset>
      </div>
      <div className="filter-rating">
        <fieldset className="ratings">
          <legend>
            {" "}
            <b>Rating</b>
          </legend>
          {rating.map((item) => (
            <label htmlFor={item} key={item}>
              <input
                type="radio"
                name="star"
                value={item}
                id={item}
                checked={item === +appliedFilters.ratingFilter}
                onChange={(e) => handleFilter(e, TYPE.RATING_FILTER)}
              />
              {item} <StarIcon /> & up{" "}
            </label>
          ))}
        </fieldset>
      </div>
    </div>
  );
};

export default ProductFilterBar;
