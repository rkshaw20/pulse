import { useDataContext } from "../../contexts/DataContextProvider";
import ProductCard from "../Product/components/ProductCard";

import "./Whislist.css";

const Wishlist = () => {
  const { wishlist } = useDataContext();
  return (
    <div className="wishlist-page">
      <h2 className="wishlist-header">Wishlist ({wishlist.length})</h2>
      {!wishlist.length ? <p className="wishlist-empty-message">Your Wishlist Is Empty ! ☹️</p> :

      (<div className="wishlist-container">
        {wishlist.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>)}
    </div>
  );
};

export default Wishlist;
