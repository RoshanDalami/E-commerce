"use client";
import React, { useContext, useEffect, useState, useCallback } from "react";
import CartContext from "@/app/Store/Cart-context";
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

const Cart = (props: any) => {
  const cartCtx = useContext(CartContext);
  const [address, setAddress]: any = useState({});
  const { user }: any = UserAuth();
  const router = useRouter();
  let totalAmount = Number(`${cartCtx.totalAmount.toFixed(2)}`);
  const hasItems = cartCtx.items.length > 0;
  const [userCouponCode, setUserCouponCode] = useState("");
  const [systemCoupon, setSystemCoupon] = useState([{}]);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [couponError, setCouponError] = useState("");
  const [amountAfterDiscount, setAmountAfterDiscount] = useState(0);
  const [orders, setOrders] = useState([{}]);
  const [firstOrder, setFirstOrder] = useState(false);

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
  }, []);
  const getOrders = async () => {
    const dbRef = collection(db, "orders");
    try {
      const response = await getDocs(dbRef);
      const data = response.docs.map((doc) => ({ ...doc.data() }));
      for (let i = 0; i <= data.length; i++) {
        if (data[i].uid !== user.uid) {
          setFirstOrder(true);
        } else {
          console.log("Not first Order");
        }
      }
    } catch (error) {
      console.error("Error fetching orders");
    }
  };
  useEffect(() => {
    getOrders();
  }, []);

  const coupons = async () => {
    try {
      const dbRef = collection(db, "coupon");
      const response = await getDocs(dbRef);
      const data = response.docs.map((doc) => ({ ...doc.data() }));
      setSystemCoupon(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    coupons();
  }, []);
  const onApplyCoupon = () => {
    systemCoupon.forEach((element: any) => {
      if (element?.code === userCouponCode) {
        setDiscountPercentage(Number(element?.discount));
        if (discountPercentage !== 0) {
          const discountedAmount = (discountPercentage / 100) * +totalAmount;
          const totalAmountAfterDiscount = +totalAmount - discountedAmount;
          console.log(totalAmountAfterDiscount);
          setAmountAfterDiscount(totalAmountAfterDiscount);
          setCouponError("");
        }
      } else {
        console.log("not matched");
        setCouponError("Invalid coupon");
      }
    });
  };
  const onOrder = async () => {
    const items = cartCtx.items;
    let totalAmount = cartCtx.totalAmount;
    let status = 'packing'
    const payload = user?.uid;
    if (Object.keys(address).length === 0) {
      router.replace("/address");
      return;
    }
    if (discountPercentage > 0) {
      totalAmount = amountAfterDiscount;
    }
    try {
      const dbRef = collection(db, "orders");
      await addDoc(dbRef, {
        items,
        totalAmount,
        uid: payload,
        address,
        userCouponCode,
        status
      });
      console.log("order complete");
      console.log(userCouponCode)
      console.log(items);
      cartCtx.order();
      router.push("/orderplaced");
    } catch (error) {
      console.log("error" + error);
    }
  };

  const cartItems = (
    <ul style={{ color: "white" }}>
      {cartCtx.items.map((item: any) => {
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
  console.log(systemCoupon, "system coupon");

  return (
    <main className="min-h-screen">
      <div className="text-black mx-5 my-5 py-5 md:px-5 border-[1px] border-black rounded-lg">
        {hasItems ? (
          <h1 className="text-black font-bold text-3xl">Cart Items</h1>
        ) : (
          ""
        )}
        <div className="flex justify-center items-center mx-3 md:px-10 gap-20 ">
          <div className="flex flex-col md:flex-row items-center justify-evenly  w-full ">
            <div className="">
              {hasItems ? (
                cartItems
              ) : (
                <main>
                  <div>
                    <Image
                      src={EmptyCard}
                      alt=""
                      width={300}
                      height={300}
                      className="py-8 "
                    />
                    <h1 className=" md:text-3xl font-semibold opacity-50 text-center">
                      Your cart is empty
                    </h1>
                  </div>
                </main>
              )}
            </div>
            <br />
            <br />

            {hasItems ? (
              <div className="flex items-center flex-col  gap-6">
                <div>
                  <h1 className="text-2xl">use coupon</h1>
                  <input
                    type="text"
                    value={userCouponCode}
                    onChange={(e) =>
                      setUserCouponCode(e.target.value.toUpperCase())
                    }
                    className="border-2 border-gray-300 rounded-md px-2 py-2 uppercase "
                    placeholder="apply coupon"
                  />
                  <button
                    className="px-4 py-2 bg-blue-600 rounded-lg text-white"
                    onClick={onApplyCoupon}
                  >
                    Apply
                  </button>
                </div>
                {couponError && <p className="text-red-600">{couponError}</p>}
                <div>
                  <h1 className="text-xl text-black font-semibold">
                    {" "}
                    Total Amount :{" "}
                    {amountAfterDiscount > 0
                      ? amountAfterDiscount
                      : +totalAmount}
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
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className="mx-10  hidden md:block">
        <div className="flex items-center justify-between px-20">
          <h1 className="text-2xl ">Continue shopping with us</h1>
          <Link href={"/order"}>
            <button className="rounded-md bg-indigo-600 text-white px-4 py-2">
              View Orders
            </button>
          </Link>
        </div>
        <ProductsItems />
      </div>
      <div className="  md:hidden my-5">
        <div className="border-b-2 border-t-2 border-gray-500 mx-6 py-5">
          <Link href={"/"} className="text-2xl">
            continue shopping {"->"}
          </Link>
        </div>
      </div>
      <div className="  md:hidden my-5">
        <div className="border-b-2 border-t-2 border-gray-500 mx-6 py-5">
          <Link href={"/order"} className="text-2xl">
            Your Order {"->"}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Cart;
