
import {Link} from 'react-router-dom'

import './Home.css' 
import CategoryCard from "../../components/CategoryCard"
import { useDataContext } from '../../contexts/DataContextProvider'


const Home=()=>{
    const {categories}=useDataContext();
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