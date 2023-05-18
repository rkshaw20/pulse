import { useParams } from "react-router-dom";

import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import "./Product.css";
import { products } from "../../backend/db/products";

const Product = () => {
  const { productId } = useParams();
  const product = products?.find((product) => product._id === productId);

  const {
    _id,
    image,
    category,
    rating,
    description,
    title,
    trending,
    base_price,
    price,
    reviews,
    in_stock,
    stock_count,
  } = product;

  const percentageOff = Math.ceil(((base_price - price) / base_price) * 100);

  return (
    <div className="single-card-container">
      <div className="single-card">
        <div className="card-left">
          <img className="card-image" src={image} alt={title} />
          {trending && <span className="product-trending-icon">Trending</span>}
          <span>
            <FavoriteIcon className="product-wishlist-icon" />
          </span>
        </div>

        <div className="card-details">
          <div className="product-header">
            <h3>{title}</h3>
            <div className="review">
              <div className="product-rating">
                {rating} <StarIcon />
              </div>
              <div className="product-review">{reviews} Reviews</div>
            </div>

            <div className="product-price">
              <p className="discount-price">₹{price}</p>
              <p className="original-price">₹{base_price}</p>
              <p className="percentage-off">({percentageOff}% OFF)</p>
            </div>
          </div>
          <div className="product-info">
            <p className="product-category">
              {" "}
              <b>Category:</b> {category}{" "}
            </p>
            <p className="availability">
              <b>Availability :</b>
              {stock_count > 0 ? " In Stock" : " Out Of Stock"}{" "}
            </p>
            {/* <p className="product-left">{stock_count < 0 ? '' :}</p> */}
            <p className="product-description">
              {" "}
              <b>Description :</b> {description}
            </p>
          </div>
          <div>
            <button className="add-to-cart-btn">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
