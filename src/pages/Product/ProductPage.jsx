import { useDataContext } from '../../contexts/DataContextProvider';
import './ProductPage.css'
import ProductCard from './components/ProductCard';
import ProductFilterBar from './components/ProductFilterBar';

const ProductPage = () => {

const {products}=useDataContext();
// console.log('raj')
  console.log(products);
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
