'use client'
import Image from "next/image";
import cardImage from "../../../public/assets/hero_image.jpg";
import Link from "next/link";

import { useContext,useState } from "react";
import CartContext from "../Store/Cart-context";



export default function ProductCard() {
  const cartCtx = useContext(CartContext);
  const title = 'product'
  const description = 'Product discription'
  const price = 20
  const id = 'sfsfsfs'
  const addToCartHandler = (amount:any) => {
    cartCtx.addItem({
     id:id,
     title: title,
     price: price,
     amount: amount,
   });
   
 };
 const onSubmitHandler = (event:any) => {
  event.preventDefault();
  const enteredAmount = 1;
  if (enteredAmount < 1) {
    return;
  }
  try {
    
    addToCartHandler(enteredAmount);
  } catch (error) {
   console.log('error') 
  }

};



  
  return (
    <>
   
      <div className="w-[350px] shadow-lg  ">
        <Link href={''}>
        <div className="group rounded-lg w-[350px] overflow-hidden">
          <div className="w-[350px] h-[400px] group-hover:scale-125 transition duration-300">
            <Image src={cardImage} alt="new" />
          </div>
          <div className="  shadow border-2 border-gray-400 flex flex-col overflow-hidden"></div>
        </div>
        </Link>
        <div className="bg-white px-4 py-2 rounded-lg ">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className=" opacity-50">{description}</p>
          <div className="flex justify-between items-center">
            <p>{price}</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:scale-110 transition duration-300" onClick={onSubmitHandler} >add to cart</button>
          </div>
        </div>
      </div>
   
    </>
  );
}
