import { useDataContext } from "../../contexts/DataContextProvider";
import ProductCard from "../Product/components/ProductCard";

import "./Whislist.css";

const Wishlist = () => {
  const { wishlist } = useDataContext();
  console.log(wishlist);
  return (
    <div className="whislist-page">
      <h2 className="wishlist-header">Wishlist ({wishlist.length})</h2>
      <div className="wishlist-container">
        {wishlist.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
