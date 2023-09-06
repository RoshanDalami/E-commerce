"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLink } from "./NavLink";
import { nanoid } from "nanoid";
import logo from "../../../public/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { useContext } from "react";
import CartContext from "../Store/Cart-context";
import axios from 'axios'


const Navbar = () => {
  const cartCtx = useContext(CartContext);
  const [cartItemNumber , setCartItemNumber] = useState([])
  const {items} = cartCtx;
  // const numberOfCartItems = items.reduce((curNumber,item:any)=>{
  //   return curNumber + item.amount ;
  // },0);
  const numberOfCartItems = items.reduce((curNumber, item:any)=>{
    return curNumber + item.amount;
  },0)
  const getData = async()=>{

    const response =  axios.get('https://testing-760a8-default-rtdb.asia-southeast1.firebasedatabase.app/cartitems.json')
    const data = (await response).data;
    setCartItemNumber(data)
  }
  useEffect(()=>{getData();},[cartItemNumber])

  return (
    <>
    <div className="">

      <div className=" border-b-2 border-gray-300 w-full sticky">
        <nav className="my-2 flex  items-center justify-between  ">
          {/* logo starts here  */}
          <div className="flex items-center ">
            <Link href={"/"} className="text-2xl">
              <Image
                src={logo}
                alt=""
                className="rounded-[60%] w-[60px] h-[60px] ml-14 sm:h-[70px] sm:w-[70px] md:w-[80px] md:h-[80px] md:ml-[20px] lg:ml-[50px]"
              />
            </Link>
          </div>
          {/* logo ends here  */}

          {/* navigation menu starts here  */}
          <div className="flex gap-6 px-5">
            <section>
              {/* cart icon will be here
               */}
               <Link href={'/cart'}>
                <span className="bg-red-600 text-white px-1 absolute rounded-full top-4 ml-4  ">{numberOfCartItems}</span>
              <FaCartShopping className="text-3xl" />
               </Link>
            </section>
            <section>
              {/* login or profile will go here  */}
              <RxAvatar className="text-3xl" />
            </section>
          </div>
        </nav>
     
      </div>
    </div>
     
    </>
  );
};

export default Navbar;
