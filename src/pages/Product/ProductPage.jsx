import './ProductPage.css'
import ProductCard from './components/ProductCard';
import ProductFilterBar from './components/ProductFilterBar';
import { products } from '../../backend/db/products';

// const data=products[1]
console.log(products);
const ProductPage = () => {
  return (
    <div className="productPage">
      <div className="product-filter">
       <ProductFilterBar/>
      </div>
      <div className="productList">
        {products.map((product)=>(
          
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default ProductPage;
