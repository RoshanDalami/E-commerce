'use client'
import React from "react";

const CartContext = React.createContext({
    items:[],
    wishlist:[],
    totalAmount: 0 ,
    addItem : (item:any)=>{},
    removeItem : (id:any)=>{},
    order : ()=>void{},
    addToWish:(item:any)=>{},
    removeFromWish:(item:any)=>{},
});



export default CartContext
