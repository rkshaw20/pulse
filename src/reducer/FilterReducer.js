import { TYPE } from "../utils/constants"

export const filterInitialState={
searchFilter:'',
priceFilter:10000,
categoryFilter:[],
ratingFilter:''
}

export const filterReducer=(state,action)=>{
    switch(action.type){
        case TYPE.SEARCH_FILTER:{
            return{
                ...state,searchFilter:action.payload,
            };
        }
        default:
            return;
    }
}