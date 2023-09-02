"use client";
import { NavLink } from "./NavLink";
import { nanoid } from "nanoid";
import { FaCartShopping } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import {motion} from 'framer-motion'
export default function SidebarPage() {
  return (
    <>
      <div className="absolute z-10 w-[50%] h-full " 
     
      >
        <div className="bg-black absolute z-10"></div>

        <div className="  h-full  bg-white">
          <div className="flex flex-col items-center justify-center gap-3">
            <ul>
              {[["T-shirts", "products"]].map(([title, url]) => (
                <NavLink
                  href={url}
                  key={nanoid()}
                  className={` px-2 sm:font-normal sm:font-xs md:px-4  md:font-bold  lg:px-4 lg:py-3 flex flex-wrap`}
                >
                  <li>{title}</li>
                </NavLink>
              ))}
            </ul>
            <section>
              {/* search bar will be here  */}
              {/* <input className="border-2 border-gray-500 rounded px-3 py-1"/> */}
            </section>
            <section>
              {/* cart icon will be here
               */}
              <div className="flex items-center gap-3 bg-slate-400 px-3 py-1 rounded-xl">
                <FaCartShopping className="text-3xl" />
                <span className="bg-red-600 rounded-full px-2 py-1">
                  <p className="text-white">0</p>
                </span>
              </div>
            </section>
            <section>
              {/* login or profile will go here  */}
              <RxAvatar className="text-3xl" />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
