import { useReducer } from "react";
import { createContext,useContext } from "react";
import { dataReducer, dataInitaialState } from "../reducer/DataReducer";
import axios from "axios";
import { useEffect } from "react";



const DataContext=createContext();

export const useDataContext = () => useContext(DataContext);


const DataContextProvider=({children})=>{
    const [state,dispatch]=useReducer(dataReducer,dataInitaialState);

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
        <DataContextProvider.Provider value={{products:state.products}}>
            {children}
        </DataContextProvider.Provider>
    )
}