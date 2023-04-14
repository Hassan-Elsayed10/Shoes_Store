import { createSlice,createSelector } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    deliveryfee: 15 ,
    freedeliveryfee: 200

}
 

export const cartSclice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCartItems:(state,action)=>{
            const newProduct = action.payload.product;
            const cartItem = state.items.find((item)=> item.product.id === newProduct.id);
            if(cartItem){
                cartItem.quantity +=1;
            }else{
                   state.items.push({product: newProduct, quantity:1})
         
            }
        },

        changeQuantity:(state,action)=>{
            const {productId, amount} = action.payload;
            const cartItem = state.items.find((item)=> item.product.id === productId)
            if(cartItem){
                cartItem.quantity += amount;
            }
            if(cartItem.quantity <= 0){
                state.items = state.items.filter((item)=> item !== cartItem);
            }

        }


    }
})
export const selectsubtol = (state) => state.cart.items.reduce(
    (sum,cartItem)=> sum + cartItem.product.price * cartItem.quantity ,0
);

const cartselector = (state) => state.cart;

export const selectdelevery = createSelector(
    cartselector,
    selectsubtol,
    (cart,subtotal) => (subtotal > cart.freedeliveryfee? 0 : cart.deliveryfee)
)


export const selectTotlat = createSelector(
    selectsubtol,
    selectdelevery,
    (subtotal,Delivery) => subtotal + Delivery

)

export const selectNumerOfItems = (state) => state.cart.items.length;