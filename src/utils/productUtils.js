export const getPercentageOff=(base_price,price)=>{
   const percentage= Math.ceil(((base_price - price) / base_price) * 100);
   return percentage;
}