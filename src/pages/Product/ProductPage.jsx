import { useDataContext } from "../../contexts/DataContextProvider";
import { useFilterContext } from "../../contexts/FIlterContextProvider";
import { getFilteredProducts } from "../../utils/getFilteredProducts";
import "./ProductPage.css";
import ProductCard from "./components/ProductCard";
import ProductFilterBar from "./components/ProductFilterBar";

const ProductPage = () => {
  const { products } = useDataContext();
  const { appliedFilters } = useFilterContext();

  const filteredProduct = getFilteredProducts(products, appliedFilters);

  return (
    <div className="productPage">
      <div className="product-filter">
        <ProductFilterBar />
      </div>
      <div className="page-header">
        <h2>Products ({filteredProduct.length})</h2>
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
