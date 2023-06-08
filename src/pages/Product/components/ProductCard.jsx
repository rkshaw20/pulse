import { useNavigate } from "react-router-dom";

import "./ProductCard.css";

import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from "@mui/icons-material/Star";
import { getPercentageOff } from "../../../utils/productUtils";



//   const toggleWishlist=()=>{}
const ProductCard = ({ product }) => {
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

  const navigate=useNavigate();

  const percentageOff = getPercentageOff(base_price,price) ;
  return (
    <div  className="productCard">
      <img className="card-image" src={image} alt={title} 
      onClick={()=>navigate(`/product/${product._id}`)}
      />
      {trending && <span className="card-trending">Trending</span>}
      <span>
        <FavoriteIcon className="wishlist-icon"/>  
      </span>
      <div className="card-info">
        <div className="card-header">
          <div className="card-title">{title}</div>
          <div className="card-rating">
          {rating}
            <StarIcon className="rating-star" />
          </div>
        </div>

        <div className="card-price">
          <p className="discount-price">
          ₹{price}
          </p>
          <p className="original-price">
            ₹{base_price}
          </p>
          <p className="percentage-off">({percentageOff}% OFF)</p>
        </div>
        <div>
          <button className="add-to-cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
