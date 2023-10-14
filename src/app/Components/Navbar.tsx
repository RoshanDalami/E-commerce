"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo1.png";
import { FaCartShopping } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { useContext } from "react";
import CartContext from "../Store/Cart-context";
import avatar from "../../../public/assets/avatar.svg";
import { UserAuth } from "../Context/AuthContext";

const Navbar = () => {
  const { user }: any = UserAuth();
  const cartCtx = useContext(CartContext);
  const [cartItemNumber, setCartItemNumber] = useState([]);
  const { items } = cartCtx;

  // const numberOfCartItems = items.reduce((curNumber,item:any)=>{
  //   return curNumber + item.amount ;
  // },0);
  const numberOfCartItems = items.reduce((curNumber, item: any) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <>
      <main className=" bg-white sticky top-0 z-50">
        <div className=" ">
          <div className=" border-b-2 border-gray-300 w-full sticky">
            <nav className="my-2 flex  items-center justify-between  ">
              {/* logo starts here  */}
              <div className="flex items-center ">
                <Link href={"/"} className="text-2xl">
                  <Image
                    src={logo}
                    width={400}
                    height={400}
                    alt=""
                    className="rounded-[60%] w-[60px] h-[60px] ml-14 sm:h-[70px] sm:w-[70px] md:w-[80px] md:h-[80px] md:ml-[20px] lg:ml-[50px]"
                  />
                </Link>
              </div>
              {/* logo ends here  */}

              {/* navigation menu starts here  */}
              <div className="flex gap-6 px-5 items-center">
                <section>
                  {/* cart icon will be here
                   */}
                  <Link href={"/cart"}>
                    <span className="bg-red-600 text-white px-1 absolute rounded-full top-4 ml-4  ">
                      {numberOfCartItems}
                    </span>
                    <FaCartShopping className="text-3xl" />
                  </Link>
                </section>
                <section className="flex  items-center">
                  {/* login or profile will go here  */}

                  {!user || !user.email ? (
                    <Link href={"/profile"}>
                      <RxAvatar className="text-3xl" />
                    </Link>
                  ) : (
                    <Link href={"/profile"}>
                      {user.photoURL ? (
                        <div>
                          <Image
                            src={user?.photoURL}
                            alt="profile Image"
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                          <h1>{user.displayName}</h1>
                        </div>
                      ) : (
                        <Image
                          src={avatar}
                          alt="avatar"
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                      )}
                    </Link>
                  )}
                </section>
              </div>
            </nav>
          </div>
        </div>
      </main>
      <main className="hidden md:hidden">
        <div className=" bg-white sticky top-0 z-50">
          <div className=" border-b-2 border-gray-300 w-full sticky">
            <nav className="my-2 flex  items-center justify-between  ">
              {/* logo starts here  */}
              <div className="flex items-center ">
                <Link href={"/"} className="text-2xl">
                  <Image
                    src={logo}
                    width={400}
                    height={400}
                    alt=""
                    className="rounded-[60%] w-[60px] h-[60px] ml-14 sm:h-[70px] sm:w-[70px] md:w-[80px] md:h-[80px] md:ml-[20px] lg:ml-[50px]"
                  />
                </Link>
              </div>
              {/* logo ends here  */}

              {/* navigation menu starts here  */}
              <div className="flex gap-6 px-5 items-center">
                <section>
                  {/* cart icon will be here
                   */}
                  <Link href={"/cart"}>
                    <span className="bg-red-600 text-white px-1 absolute rounded-full top-4 ml-4  ">
                      {numberOfCartItems}
                    </span>
                    <FaCartShopping className="text-3xl" />
                  </Link>
                </section>
                <section className="flex  items-center">
                  {/* login or profile will go here  */}

                  {!user || !user.email ? (
                    <Link href={"/profile"}>
                      <RxAvatar className="text-3xl" />
                    </Link>
                  ) : (
                    <Link href={"/profile"}>
                      {user.photoURL ? (
                        <Image
                          src={user?.photoURL}
                          alt="profile Image"
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                      ) : (
                        <Image
                          src={avatar}
                          alt="avatar"
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                      )}
                    </Link>
                  )}
                </section>
              </div>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;
