'use client'
import React from "react";

const CartContext = React.createContext({
    items:[],
    totalAmount: 0 ,
    wishlist:[],
    addItem : (item:any)=>{},
    removeItem : (id:any)=>{},
    order : ()=>void{},
    addToWish:(item:any)=>{},

});



export default CartContext
