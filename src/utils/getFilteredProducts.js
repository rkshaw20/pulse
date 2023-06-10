

const searchFilter=(products, appliedFilters)=>
    appliedFilters.searchFilter.length>0 ? products.filter((product)=>product.title.toLowerCase().includes(appliedFilters.searchFilter.toLowerCase()))  : products;


    const priceFilter=(products,appliedFilters)=> appliedFilters.priceFilter.length>0 ? products.filter(({price})=>price < +appliedFilters.priceFilter) : products;


    const categoryFilter=(products,appliedFilters)=>
    appliedFilters.categoryFilter.length>0 ? products.filter(({category})=> appliedFilters.categoryFilter.some((item)=>item===category) ) :products

    const ratingFilter=(products,appliedFilters)=>
    appliedFilters.ratingFilter.length>0 ? products.filter(({rating})=>+rating > +appliedFilters.ratingFilter) : products

    export const getFilteredProducts=(products, appliedFilters)=>{
        const filterFunctions=[
            searchFilter,
            priceFilter,
            categoryFilter,
            ratingFilter
        ];

        return filterFunctions.reduce((acc,func)=>func(acc,appliedFilters),products)
    } 