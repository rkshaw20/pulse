// _id: "T1206073704100",
// image: "https://res.cloudinary.com/dn5zs5sqx/image/upload/v1684398099/T067.417.11.031.01_R_ktgfch.png",
// category: "Analog",
// rating: "3.9",
// description:
//   "The Tissot Seastar 1000 is the ultimate watersport watch, with its high water-resistance up to a pressure of 30 bar (300 m/1000 ft), screw-down crown and caseback as well as its unidirectional bezel.",
// title: "Tissot Mens PRS",
// trending: false,
// base_price: "9990",
// price: "7190",
// delivery_time: "9",
// reviews: "2.9k",
// in_stock: true,
import './CartProductCard.css'

import { getPercentageOff } from "../../../utils/productUtils";

// stock_count: "4"
const CartProductCard = ({ product }) => {
  const { _id, image, title, base_price, price } = product;

  const percentageOff = getPercentageOff(base_price, price);
  return (
    <div className="cart-product-card">
      {/* <div className="cart-product-details"> */}
        <div className="cart-product-image">
          <img src={image} alt={title} className='cart-img' />
        </div>
        <div className="cart-product-info">
          <h3>{title}</h3>
          <div className="card-price">
            <p className="discount-price">₹{price}</p>
            <p className="original-price">₹{base_price}</p>
            <p className="percentage-off">({percentageOff}% OFF)</p>
          </div>
          <div className="cart-quantity">
            <button className="dec-btn">-</button>
            <span className="quantity-value">3</span>
            <button className="inc-btn">+</button>
          </div>
          <div className="cart-product-btn-group">
            <button className="cart-remove-btn">Remove</button>
            <button className="cart-addToWishlist-btn">Add To Wishlist</button>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default CartProductCard;
