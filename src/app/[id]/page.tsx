"use client";
import { useEffect, useState, useContext } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";

import Image from "next/image";
import {BiArrowBack} from 'react-icons/bi'
import CartContext from "../Store/Cart-context";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { UserAuth } from "../Context/AuthContext";

export default function IndividualProduct() {
  const { id } = useParams();
  const { user }: any = UserAuth();
  const cartCtx = useContext(CartContext);
  const router = useRouter();
  const [size, setSize] = useState("small");

  const [individualProduct, setIndividualProduct] = useState({
    imageulr: "",
    price: "",
    title: "",
    description: "",
    id: "",
  });
  const addToCartHandler = (amount: any) => {
    cartCtx.addItem({
      id: id,
      title: individualProduct?.title,
      price: individualProduct?.price,
      amount: amount,
      image: individualProduct?.imageulr,
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

  const getIndividualProduct = async () => {
    const dbRef = doc(db, "Products", id);
    const response = await getDoc(dbRef);
    const data = response.data();
    setIndividualProduct(data);
  };
  useEffect(() => {
    getIndividualProduct();
  }, []);
  const onBackHandler = ()=>{
    router.push('/')
  }
  return (
    <>
 <BiArrowBack className="text-3xl mt-10 ml-10 cursor-pointer" onClick={onBackHandler} />
    <main className="mx-20 flex items-center justify-center h-[90vh]">
      <div className="flex flex-col md:flex-row   gap-6   bg-white shadow-2xl  md:w-[800px]   rounded-lg p-10">
        <div>
          <Image
            src={individualProduct?.imageulr}
            alt="Product Image"
            height={400}
            width={400}
            className="rounded-lg"
          />
        </div>
        <div className="md:ml-20 md:flex  md:flex-col justify-around">
          <div className="flex flex-col gap-2 md:gap-10">
            <h1 className="text-3xl font-bold">{individualProduct?.title}</h1>
            <h1 className=" opacity-60">{individualProduct?.description}</h1>
            <h1 className="text-xl"> Rs {individualProduct?.price}</h1>
          </div>
          <div className="flex gap-10  ">
            <div className="flex gap-2 p-2 items-center">
              <p className="text-sm">Select size</p>
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
            <button
              className="md:px-6 px-3 py-1 bg-blue-600 text-white rounded-xl hover:scale-110 transition duration-300"
              onClick={onSubmitHandler}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
