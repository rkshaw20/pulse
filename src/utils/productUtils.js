export const getPercentageOff=(base_price,price)=>{
   const percentage= Math.ceil(((base_price - price) / base_price) * 100);
   return percentage;
}

export const isProductInCard= (cart, id)=>{
   return cart.some((product)=>product._id === id)
}

export const isProductInWishlist=(wishlist,id)=>{
   return wishlist.some((product)=>product._id === id)
}