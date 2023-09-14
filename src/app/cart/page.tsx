"use client";
import React, { useContext, useEffect, useState, useCallback } from "react";
import CartContext from "@/app/Store/Cart-context";
import CartItem from "@/app/Components/CartItem";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { db } from "@/app/firebase/config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { UserAuth } from "../Context/AuthContext";

const Cart = (props: any) => {
  const cartCtx = useContext(CartContext);
  const [address, setAddress]: any = useState({});
  const { user }: any = UserAuth();
  const router = useRouter();
  const totalAmount = `Rs ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    cartCtx.removeItem(id);
    toast.success("Item has been removed from cart");
  };
  const cartItemAddHandler = (item: []) => {
    cartCtx.addItem({ ...item, amount: 1 });
    toast.success("Item has been added from cart");
  };
  const goToProducts = () => {
    router.push("/");
  };

  const getAddress = useCallback(async () => {
    const dbRef = collection(db, "address");
    try {
      const response = await getDocs(dbRef);
      const data = response.docs.map((doc) => ({ ...doc.data() }));
      for (let i = 0; i <= data.length; i++) {
        // Use < instead of <= here
        if (data[i]?.uid === user?.uid) {
          setAddress(data[i]?.details);
        }
      }
    } catch (error) {
      console.error("Error fetching address data:", error);
    }
  }, [user?.uid]);
  useEffect(() => {
    getAddress();
  }, [getAddress]);
  const onOrder = async () => {
    const items = cartCtx.items;
    const totalAmount = cartCtx.totalAmount;
    const payload = user?.uid;
    if(Object.keys(address).length === 0){
      router.replace('/address');
      return;
    }
    try {
      const dbRef = collection(db, "orders");
      await addDoc(dbRef, { items, totalAmount, uid: payload, address });
      console.log("order complete");

      cartCtx.order();
      router.push("/orderplaced");
    } catch (error) {
      console.log("error" + error);
    }
  };

  console.log(address);
  const cartItems = (
    <ul style={{ color: "white" }}>
      {cartCtx.items.map((item: any) => {
        return (
          <CartItem
            key={item.id}
            title={item.title}
            price={item.price}
            amount={item.amount}
            image={item.image}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    <div className="text-black mx-10 my-5 py-5 px-5 border-[1px] border-black rounded-lg">
      <div className="flex justify-center items-center px-10 gap-20 ">
        <div className="flex items-center flex-col">
          <h1 className="text-black font-bold text-3xl">Cart Items</h1>
          <div className="">
            {hasItems ? (
              cartItems
            ) : (
              <h2 className="text-black font-bold text-2xl text-center">
                Your Cart is Empty...
                <br />
                <p
                  onClick={goToProducts}
                  className="font-normal underline cursor-pointer"
                >
                  {" "}
                  Go to products
                </p>
              </h2>
            )}
          </div>
          <br />
          <br />
          <div className="flex items-center flex-col md:flex-row gap-6">
            <h1 className="text-xl text-black font-semibold">
              {" "}
              Total Amount : {totalAmount}
            </h1>
            <div className=" flex  gap-6 flex-wrap">
              <button
                onClick={goToProducts}
                className=" border-[1px] border-red-600 rounded-lg px-4 py-2 text-red-600 hover:bg-red-600 hover:text-white transition ease-in-out duration-300 "
              >
                Cancel
              </button>
              {hasItems && (
                <button
                  onClick={onOrder}
                  className="border-[1px] border-blue-600 rounded-lg px-5 py-2 bg-blue-600 text-white transition ease-in-out duration-300  "
                >
                  Order
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;