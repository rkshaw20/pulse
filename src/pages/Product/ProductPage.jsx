import { useState } from "react";
import { useDataContext } from "../../contexts/DataContextProvider";
import { useFilterContext } from "../../contexts/FIlterContextProvider";
import { getFilteredProducts } from "../../utils/getFilteredProducts";
import "./ProductPage.css";
import ProductCard from "./components/ProductCard";
import ProductFilterBar from "./components/ProductFilterBar";

import { BsFilter } from "react-icons/bs";

const ProductPage = () => {
  const { products } = useDataContext();
  const { appliedFilters } = useFilterContext();
  const [drawer, setDrawer] = useState(false);
  const toggleFilterIcon = () => setDrawer(!drawer);

  const filteredProduct = getFilteredProducts(products, appliedFilters);

  return (
    <div className="productPage">
          <div className="product-filter">
          <ProductFilterBar />
        </div> 
      
      {drawer && (
        <div className="product-filter-absolute">
          <div className="overlay" >
          <ProductFilterBar />

          </div>
        </div>)}
      <div className="main">
        <div className="page-header">
          <h2>
            <BsFilter className="filter-icon" onClick={toggleFilterIcon} />
          </h2>
          <h2 className="center" >Products ({filteredProduct.length})</h2>

        </div>

        <div className="productList">
          {filteredProduct.length > 0 ? (
            filteredProduct.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p className="no-product-found">No product for applied filter </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
