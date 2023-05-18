import "./ProductFilterBar.css";
import StarIcon from "@mui/icons-material/Star";

const ProductFilterBar = () => {
  return (
    <div className="filter-container">
        <div className="filter-head">
        <p>
        <b>Filters</b>{" "}</p>
        
          <p className="clear-filter-btn">Reset</p>
        
     
        </div>
    

      {/* price filter */}
      <div className="filter-price">
       
        <fieldset >
          <legend>
            {" "}
            <b>Price</b>{" "}
          </legend>
          <div className="price-range">
            <p>2k</p>
            <p>5k</p>
            <p>10k</p>
        </div>
          <input className="price" type="range" min="2000" max="10000" />
        </fieldset>
      </div>

      {/* category filter */}
      <div className="filter-category">
        <fieldset className="checkbox">
          <legend>
            {" "}
            <b>Category</b>
          </legend>
          <label htmlFor="analog">
            <input id="analog" type="checkbox" value="analog" />
            Analog
          </label>
          <label htmlFor="digital">
            <input id="digital" type="checkbox" value="digital" />
            Digital
          </label>
          <label htmlFor="smartwatch">
            <input id="smartwatch" type="checkbox" value="smartwatch" />
            Smartwatch
          </label>
        </fieldset>
      </div>
      <div className="filter-rating">
        <fieldset className="ratings">
          <legend>
            {" "}
            <b>Rating</b>
          </legend>
          <label htmlFor="1 star">
            <input type="radio" name="star" id="1 star" />1 <StarIcon/> & up
          </label>
          <label htmlFor="2 star">
            <input type="radio" name="star" id="2 star" />2 <StarIcon/> & up
          </label>
          <label htmlFor="3 star">
            <input type="radio" name="star" id="3 star" />3 <StarIcon/> & up
          </label>
          <label htmlFor="4 star">
            <input type="radio" name="star" id="4 star" />4 <StarIcon/> & up
          </label>
        </fieldset>
      </div>
    </div>
  );
};

export default ProductFilterBar;
