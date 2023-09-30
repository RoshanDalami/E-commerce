"use client";
import Image from "next/image";

import Link from "next/link";
import { nanoid } from "nanoid";

import { useContext, useState } from "react";
import CartContext from "../Store/Cart-context";
import { useRouter, redirect } from "next/navigation";
import toast from "react-hot-toast";
import { UserAuth } from "../Context/AuthContext";
import axios from 'axios'

export default function ProductCard(props: any) {
  const { user }: any = UserAuth();
  const cartCtx = useContext(CartContext);
  const router = useRouter();
  const [size, setSize] = useState("small");

  const addToCartHandler = (amount: any) => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      price: props.price,
      amount: amount,
      image: props.image,
      size: size,
    });
  };
  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    const enteredAmount = 1;
    if (enteredAmount < 1) {
      return;
    }
    if (!user) {
      router.replace("/profile");
      return;
    }
    try {
      addToCartHandler(enteredAmount);
      toast.success("Item has been added to cart");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <>
      <div className="w-[350px] shadow-lg  ">
        <Link href={`/${props.id}`}>
          <div className="group rounded-lg w-[350px] overflow-hidden">
            <div className="w-[350px] h-[400px] group-hover:scale-125 transition duration-300">
              <Image src={props.image} alt="new" width={350} height={300} />
            </div>
            <div className="  shadow border-2 border-gray-400 flex flex-col overflow-hidden"></div>
          </div>
        </Link>
        <div className="bg-white px-4 py-2 rounded-lg ">
          <h1 className="text-xl font-bold">{props.title}</h1>
          <p className=" opacity-50">{props.description}</p>
          <div className="flex justify-between items-center">
            <p>Rs. {props.price}</p>
            <button
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:scale-110 transition duration-300"
              onClick={onSubmitHandler}
            >
              add to cart
            </button>
          </div>
        </div>
        <div className="flex gap-2 p-2">
          <p>Select size</p>
          <select
            name=""
            id=""
            onChange={(e) => {
              setSize(e.target.value);
            }}
            className="border-2 border-black rounded-md"
          >
            <option value="small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
            <option value="Extra large">XL</option>
            <option value="Extra Extra large">XXL</option>
          </select>
        </div>
      </div>
    </>
  );
}
