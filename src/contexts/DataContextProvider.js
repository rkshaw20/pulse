import { useReducer } from "react";
import { createContext,useContext } from "react";
import { dataReducer, dataInitialState } from "../reducer/DataReducer";
import axios from "axios";
import { useEffect } from "react";
import { TYPE } from "../utils/constants";



const DataContext=createContext({products:[] ,categories:[]});

export const useDataContext = () => useContext(DataContext);


const DataContextProvider=({children})=>{
    const [state,dispatch]=useReducer(dataReducer,dataInitialState);

    useEffect(()=>{
        getProducts();
        getCategories();
    },[])

    const getProducts= async()=>{
        try{
            const response=await axios.get('/api/products');
            dispatch({
                type:TYPE.GET_PRODUCTS,
                payload:response.data.products,
            });

        }catch(error){
            console.log(error)
        }
    }
    const getCategories=async()=>{
        try{
            const response=await axios.get('/api/categories');
            dispatch({
                type:TYPE.GET_CATEGORIES,
                payload:response.data.categories,
            })
        }catch(error){
            console.log(error)
        }
    }

    return(
     <DataContext.Provider value={{products:state.products , categories:state.categories}}>
        {children}
     </DataContext.Provider>
    )
}

export default DataContextProvider;