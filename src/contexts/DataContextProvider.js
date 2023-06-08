import { useReducer } from "react";
import { createContext,useContext } from "react";
import { dataReducer, dataInitialState } from "../reducer/DataReducer";
import axios from "axios";
import { useEffect } from "react";



const DataContext=createContext({products:[]});

export const useDataContext = () => useContext(DataContext);


const DataContextProvider=({children})=>{
    const [state,dispatch]=useReducer(dataReducer,dataInitialState);

    useEffect(()=>{
        getProducts();
    },[])

    const getProducts= async()=>{
        try{
            const response=await axios.get('/api/products');
            dispatch({
                type:"GET_PRODUCTS",
                payload:response.data.products,
            });

        }catch(error){
            console.log(error)
        }
    }

    return(
     <DataContext.Provider value={{products:state.products}}>
        {children}
     </DataContext.Provider>
    )
}

export default DataContextProvider;