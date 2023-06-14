import { Link } from "react-router-dom"

const Error=()=>{
    <div className="error-page">
        <div>
            <h1>Error, Please Go to Home Page</h1>

            <Link to='/home'>
            <button className="error">
                Go To HomePage
            </button>
            </Link>
            
        </div>
    </div>
}

export default Error;