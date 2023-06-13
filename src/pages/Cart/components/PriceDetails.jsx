
const PriceDetails=({cart})=>{
const {price,base_price , qty}= cart;

const totalItemPrice = cart.reduce((acc, { price, qty }) => acc + price * qty, 0);
const totalDiscount= totalItemPrice * .05;
const totalCartPrice= totalItemPrice -totalDiscount + 40;
return(
    <div className="price-details">
        <div className="price-details-header">
            <h3>Price Details</h3>
        </div>
        <div className="price-calculation">
            <li>
                <ul><p className="bold-style">Price({cart.length} item)</p>
                <p className="cal-price">₹ {totalItemPrice}</p>
                </ul>
                <ul>
                    <p className="bold-style">Discount (5% off)</p>
                    <p className="cal-price">-₹ {totalDiscount.toFixed()}</p>
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
            <p className="cal-price">₹ {totalCartPrice.toFixed()}</p>
        </ul>
        <div className="price-details-checkout">
            <button className="checkout-btn">Checkout</button>
        </div>
    </div>
)
}
export default PriceDetails;