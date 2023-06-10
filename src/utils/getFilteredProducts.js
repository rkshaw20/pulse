

const searchFilter=(products, appliedFilters)=>
    appliedFilters.searchFilter.length>0 ? products.filter((product)=>product.title.toLowerCase().includes(appliedFilters.searchFilter.toLowerCase()))  : products;


    export const getFilteredProducts=(products, appliedFilters)=>{
        const filterFunctions=[
            searchFilter
        ];

        return filterFunctions.reduce((acc,func)=>func(acc,appliedFilters),products)
    } 