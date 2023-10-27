'use client'
import React from "react";

const WishContext = React.createContext({
    wishItems:[],
    totalAmount: 0 ,
    addItem : (item:any)=>{},
    removeItem : (id:any)=>{},
});



export default WishContext
