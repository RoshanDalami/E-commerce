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
  const [address, setAddress]: any = useState({});
  const { user }: any = UserAuth();
  const router = useRouter();
  const totalAmount = `${wishCtx.totalAmount.toFixed(2)}`;
  const hasItems = wishCtx.wishItems.length > 0;
  const [userCouponCode, setUserCouponCode] = useState("");
  const [systemCoupon, setSystemCoupon] = useState([{}]);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [couponError, setCouponError] = useState("");
  const [amountAfterDiscount,setAmountAfterDiscount] = useState(0);

  const cartItemRemoveHandler = (id: string) => {
    wishCtx.removeItem(id);
    toast.success("Item has been removed from cart");
  };
  const cartItemAddHandler = (item: []) => {
    wishCtx.addItem({ ...item, amount: 1 });
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
    const items = wishCtx.wishItems;
    let totalAmount = wishCtx.totalAmount;
    const payload = user?.uid;
    if (Object.keys(address).length === 0) {
      router.replace("/address");
      return;
    }
    if(discountPercentage>0){
      totalAmount = amountAfterDiscount
    }
    try {
      const dbRef = collection(db, "orders");
      await addDoc(dbRef, { items, totalAmount, uid: payload, address });
      console.log("order complete");
      console.log(items);
      
      router.push("/orderplaced");
    } catch (error) {
      console.log("error" + error);
    }
  };
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
    systemCoupon.forEach((element:any) => {
      if (element?.code === userCouponCode) {
        console.log(element?.code);
        setDiscountPercentage(Number(element?.discount));
        const discountedAmount = (discountPercentage / 100) * +totalAmount;
        const totalAmountAfterDiscount = +totalAmount - discountedAmount;
        console.log(totalAmountAfterDiscount);
        setAmountAfterDiscount(totalAmountAfterDiscount)
        setCouponError('')
      } else {
        console.log("not matched");
        setCouponError('Invalid coupon')
      }
    });
    // console.log(systemCoupon)
    console.log(userCouponCode);
    
  };
  console.log(typeof discountPercentage);

  const cartItems = (
    <ul style={{ color: "white" }}>
      {wishCtx.wishItems.map((item: any) => {
        return (
          <CartItem
            key={item.id}
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
        <div className="flex justify-center items-center mx-3 md:px-10 gap-20 ">
          <div className="flex items-center flex-col">
            {hasItems ? (
              <h1 className="text-black font-bold text-3xl">Cart Items</h1>
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
