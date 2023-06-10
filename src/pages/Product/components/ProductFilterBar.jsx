import { useState } from "react";
import { useFilterContext } from "../../../contexts/FIlterContextProvider";
import { TYPE } from "../../../utils/constants";
import "./ProductFilterBar.css";
import StarIcon from "@mui/icons-material/Star";
import { useDataContext } from "../../../contexts/DataContextProvider";

const ProductFilterBar = () => {
  const { categories } = useDataContext();
  console.log(categories);
  const { appliedFilters, dispatchFilter } = useFilterContext();

  const rating = [1, 2, 3, 4];

  const handleFilter = (e, filterType) =>
    dispatchFilter({ type: filterType, payload: e.target.value });

  return (
    <div className="filter-container">
      <div className="filter-head">
        <p>
          <b>Filters</b>{" "}
        </p>

        <p className="clear-filter-btn">Reset</p>
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
            <label htmlFor={categoryName}>
              <input
                key={categoryName}
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
