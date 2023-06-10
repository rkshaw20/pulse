import { createContext, useContext, useReducer } from "react";
import { filterInitialState, filterReducer } from "../reducer/FilterReducer";


const FilterContext=createContext({
    appliedFilters:{},
    dispatchFilter:()=>{}
});

export const useFilterContext=()=>useContext(FilterContext);

const FilterContextProvider=({children})=>{
    const [state, dispatch]=useReducer(filterReducer,filterInitialState);

    return(
        <FilterContext.Provider value={{appliedFilters:state,dispatchFilter:dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider;