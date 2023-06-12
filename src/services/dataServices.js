import axios from "axios"
import { TYPE } from "../utils/constants";


export const getProducts = async (setLoader, dispatch) => {
    try {
      setLoader(true)
      const response = await axios.get("/api/products");
      setLoader(false)
      dispatch({
        type: TYPE.GET_PRODUCTS,
        payload: response.data.products,
      });
    } catch (error) {
      console.log(error);
    }
  };
 export const getCategories = async (setLoader, dispatch) => {
    try {
      setLoader(true)
      const response = await axios.get("/api/categories");
      setLoader(false)
      dispatch({
        type: TYPE.GET_CATEGORIES,
        payload: response.data.categories,
      });
    } catch (error) {
      console.log(error);
    }
  };

  export const addToCart= async(dispatch, product, token, setBtnDisabled)=>{
    try{
      console.log('under add to cart')
      setBtnDisabled(true);
      const response= await axios.post("/api/user/cart",
      {
        product,
      },{
        headers:{
          authorization:token,
        },
      }
      );
      console.log(response)
      setBtnDisabled(false);

      dispatch({type:TYPE.ADD_TO_CART, payload:response.data.cart})
    }catch(error){
      console.log("error in addToCart", error)
    }

  }