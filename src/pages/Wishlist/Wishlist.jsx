import { products } from "../../backend/db/products";
import ProductCard from "../Product/components/ProductCard";

import "./Whislist.css"

const Wishlist=()=>{

    return(
        <div className="whislist-page">
            <h2 className="wishlist-header">
                Wishlist ({products.length})
            </h2>
            <div className="wishlist-container">
            {products.map((product)=>(
             <ProductCard product={product}/>
            ))}
            </div>
        </div>
    )
}

export default Wishlist;