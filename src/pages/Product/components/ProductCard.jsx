import "./ProductCard.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";



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

  const percentageOff = Math.ceil(((base_price - price) / base_price) * 100) ;
  return (
    <div  className="productCard">
      <img className="card-image" src={image} alt={title} />
      {trending && <span className="card-trending">Trending</span>}
      <span>
        <FavoriteBorderIcon className="wishlist-icon" />
      </span>
      <div className="card-info">
        <div className="card-header">
          <h4 className="card-title">{title}</h4>
          <span className="card-rating">
            {rating}
            <StarIcon className="rating-star" />
          </span>
        </div>

        <div className="card-price">
          <p className="discount-price">
            <CurrencyRupeeIcon />
            {price}
          </p>
          <p className="original-price">
            <CurrencyRupeeIcon />
            {base_price}
          </p>
          <p className="percentage-off">({percentageOff}% OFF)</p>
        </div>
        <div>
          <button className="add-to-cart-btn">
            <ShoppingBagIcon />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
