'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLink } from "./NavLink";
import { nanoid } from "nanoid";
import logo from '../../../public/logo.png';
import {RxHamburgerMenu,RxCross1 } from "react-icons/rx";

import SidebarPage from "./Sidebar";
import { useSearchParams } from "next/navigation";


const Navbar = () => {
  const[menu,setMenu] = useState(false);
  return (
    <>
      <div className=" border-b-2 border-gray-300 flex items-center justify-center">
        <nav className="flex items-center justify-center my-2 ">
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
          {/* <ul>
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
          </ul> */}
          {/* navigation menu ends here  */}
          
        </nav>
         {
          !menu ?
         <RxHamburgerMenu className='text-3xl absolute ml-[85%] cursor-pointer' onClick={()=>{setMenu(prevState => !prevState)}} /> : <RxCross1 className='text-3xl absolute ml-[85%] cursor-pointer' onClick={()=>{setMenu(prevState => !prevState)}}/>
        }
          
      </div>
      {
        menu &&
      <div className=" flex justify-end z-10 transition origin-right duration-1000 " >
      <SidebarPage />
      </div>
      }
    </>
  );
};

export default Navbar;
