import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLink } from "./NavLink";
import { nanoid } from "nanoid";
import logo from '../../../public/logo.png'
import { FaCartShopping } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="flex items-center justify-around my-2 ">
          {/* logo starts here  */}
          <div className="flex items-center justify-center ">
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
          <ul>
          {[
              ["T-shirts", "products"]
            ].map(([title, url]) => (
              <NavLink
                href={url}
                key={nanoid()}
                className={` px-2 sm:font-normal sm:font-xs md:px-4  md:font-bold  lg:px-4 lg:py-3 flex flex-wrap`}
              >
                <li>{title}</li>
              </NavLink>
            ))}
          </ul>
          {/* navigation menu ends here  */}
          <div className="flex items-center gap-7">
            <section>
              {/* search bar will be here  */}
              {/* <input className="border-2 border-gray-500 rounded px-3 py-1"/> */}
            </section>
            <section>
              {/* cart icon will be here 
               */}
               <div className="flex items-center gap-3 bg-slate-400 px-3 py-1 rounded-xl">
               <FaCartShopping className='text-3xl' />
               <span className="bg-red-600 rounded-full px-2 py-1" >
                <p className="text-white">0</p>
               </span>
               </div>

            </section>
            <section>
              {/* login or profile will go here  */}
               <RxAvatar className='text-3xl' />
            </section>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
