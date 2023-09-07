"use client";
import React, { useContext } from "react";
import CartContext from "@/app/Store/Cart-context";
import CartItem from "@/app/Components/CartItem";
import { useRouter } from "next/navigation";
import AddressForm from '@/app/Components/CustomerDetailsForm'


const Cart = (props: any) => {
  const cartCtx = useContext(CartContext);
  const router = useRouter();
  const totalAmount = `Rs ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item: []) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const goToProducts = () => {
    router.push("/");
  };
  const onOrder = () => {
    cartCtx.order();
    

    router.push("/orderplaced");
  };

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
      <div className="flex justify-between px-10 gap-7">
        <div className="flex items-center flex-col">
        <h1 className="text-black font-bold text-3xl">Cart Items</h1>
        <div>
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
          <h1 className="text-xl text-black font-semibold"> Total Amount : {totalAmount}</h1>
          <div className=" flex  gap-6 flex-wrap">
            <button
              onClick={goToProducts}
              className=" border-[1px] border-red-600 rounded-lg px-4 py-2 text-red-600 hover:bg-red-600 hover:text-white transition ease-in-out duration-300 "
            >
              Cancel
            </button>
            {hasItems && (
              <button onClick={onOrder} className="border-[1px] border-blue-600 rounded-lg px-5 py-2 bg-blue-600 text-white transition ease-in-out duration-300  ">
                Order
              </button>
            )}
          </div>
        </div>
        </div>
        {
            hasItems &&
        <div className="my-8 ">
            <AddressForm/>
        </div>
        }
      </div>
    </div>
  );
};

export default Cart;
