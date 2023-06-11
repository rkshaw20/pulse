import { Link } from "react-router-dom";

import "./Home.css";
import CategoryCard from "../../components/CategoryCard";
import { useDataContext } from "../../contexts/DataContextProvider";
import { useFilterContext } from "../../contexts/FIlterContextProvider";
import { TYPE } from "../../utils/constants";

const Home = () => {
  const { categories } = useDataContext();
  const { appliedFilters, dispatchFilter } = useFilterContext();

  const handleCategoryFilter = ({ categoryName }) =>{
    dispatchFilter ({type:TYPE.CLEAR_FILTER})
    dispatchFilter({ type: TYPE.ADD_CATEGORY_FILTER, payload: categoryName.toLowerCase() });
  }
   
  console.log(appliedFilters);

  return (
    <div className="home">
      <div className="banner">
        <div className="banner-text">
          <p>Welcome to Pulse,</p>
          <p>Elevate Your Style With Our Irresistible Collection.</p>
          <Link to="/productPage" className="banner-btn">
            Shop
          </Link>
        </div>
      </div>
      <p className="category">Shop By Category</p>

      <div className="category-container">
        {categories.map((category) => (
          <Link
            to="/productPage"
            key={category._id}
            onClick={() => handleCategoryFilter(category)}
          >
            <CategoryCard key={category._id} category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Home;
