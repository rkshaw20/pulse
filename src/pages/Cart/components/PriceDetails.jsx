
const PriceDetails=({cart})=>{
const {price,base_price}=cart;

return(
    <div className="price-details">
        <div className="price-details-header">
            <h3>Price Details</h3>
        </div>
        <div className="price-calculation">
            <li>
                <ul><p className="bold-style">Price({cart.length})</p>
                <p className="cal-price">₹ 12121</p>
                </ul>
                <ul>
                    <p className="bold-style">Discount</p>
                    <p className="cal-price">-₹ 1222</p>
                </ul>
                <ul>
                    <p className="bold-style">Delivery Fee</p>
                    <p className="cal-price">₹ 40</p>
                </ul>
            </li>
            <hr />
        </div>
        <ul className="total-amount">
            <p className="bold-style">Total Amount</p>
            <p className="cal-price">₹ 11000</p>
        </ul>
        <div className="price-details-checkout">
            <button className="checkout-btn">Checkout</button>
        </div>
    </div>
)
}
export default PriceDetails;