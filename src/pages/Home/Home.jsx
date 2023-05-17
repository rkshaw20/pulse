
import {Link} from 'react-router-dom'

import './Home.css' 
import {categories} from '../../backend/db/categories'
import CategoryCard from "../../components/CategoryCard"


const Home=()=>{
    return(
        <div className='home'>
            <div className="banner">
               <div className="banner-text">
                <p>Welcome to Pulse,</p>
                <p>Elevate Your Style With Our Irresistible Collection.</p>
                <Link to='/productPage' className="banner-btn">Shop</Link>
               </div>
            </div>
            <p className="category">Shop By Category</p>

            <div className="category-container">
            {categories.map((category)=>(
               <CategoryCard  key={category._id} category={category}/>
            ))}
            </div>
        </div>
    )
}
export default Home;