"use client";
import React, { useContext, useEffect, useState, useCallback } from "react";
import CartContext from "@/app/Store/Cart-context";
import WishContext from "../Store/Wish-context";
import CartItem from "@/app/Components/CartItem";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import { db } from "@/app/firebase/config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { UserAuth } from "../Context/AuthContext";
import EmptyCard from "../../../public/svgFiles/empty_cart.svg";
import ProductsItems from "../Components/ProductsItems";

const Wish = (props: any) => {
  const wishCtx = useContext(WishContext);

  const { user }: any = UserAuth();
  const router = useRouter();

  const hasItems = wishCtx.wishItems.length > 0;



  const cartItemRemoveHandler = (id: string) => {
    wishCtx.removeItem(id);
    toast.success("Item has been removed from cart");
  };
  const cartItemAddHandler = (item: []) => {
    wishCtx.addItem({ ...item, amount: 1 });
    toast.success("Item has been added from cart");
  };
  const cartItems = (
    <ul style={{ color: "white" }}>
      {wishCtx.wishItems.map((item: any) => {
        console.log(item.id)
        return (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            amount={item.amount}
            image={item.image}
            size={item.size.fullname}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );


  return (
    <main className="min-h-screen">
      <div className="text-black mx-5 my-5 py-5 md:px-5 border-[1px] border-black rounded-lg">
        <div className="flex justify-center items-center mx-3 md:px-10 gap-20 ">
          <div className="flex items-center flex-col">
            {hasItems ? (
              <h1 className="text-black font-bold text-3xl">Wishlist</h1>
            ) : (
              ""
            )}
            <div className="">
              {hasItems ? (
                cartItems
              ) : (
                <main>
                  <div>
                    <Image
                      src={'/svgFiles/wishlist.svg'}
                      alt=""
                      width={300}
                      height={300}
                      className="py-8 "
                    />
                    <h1 className=" md:text-3xl font-semibold opacity-50 text-center">
                      Your wishlist is empty
                    </h1>
                  </div>
                </main>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-10  hidden md:block">
        <h1 className="text-2xl ">Continue shopping with us</h1>
        <ProductsItems />
      </div>
      <div className="  md:hidden my-10">
        <div className="border-b-2 border-t-2 border-gray-500 mx-6 py-5">
          <Link href={"/"} className="text-2xl">
            continue shopping {"->"}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Wish;
