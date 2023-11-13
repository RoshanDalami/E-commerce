import React from "react";
import Link from "next/link";
import Image from "next/image";
import { nanoid } from "nanoid";

//images
import croptop from "../../../public/categories/crop-top.jpg";
import clooerman from "../../../public/categories/clooerman.png";
import hoodies from "../../../public/categories/hoodie.png";
import zipHoodie from "../../../public/categories/zipperHoodie.png";
import jooger from "../../../public/categories/jooger.png";
import halfshirt from "../../../public/categories/halftshirt.png";
import fullsleeveman from "../../../public/categories/fullsleeveman.png";
import sweatShirt from "../../../public/categories/sweatshirt.png";
import shorts from "../../../public/categories/shorts.png";
import roundedneck from "../../../public/categories/roundneck.png";
import oversize from "../../../public/reduced/hero_image_3.jpg";

const Data = [
  {
    id: nanoid(),
    title: "Hoodies",
    image: hoodies,
    link: "/comingsoon",
  },
  {
    id: nanoid(),
    title: "Sweat Shirts",
    image: sweatShirt,
    link: "/comingsoon",
  },
  {
    id: nanoid(),
    title: "Shorts",
    image: shorts,
    link: "/comingsoon",
  },
  {
    id: nanoid(),
    title: "Over Sized T-shirts",
    image: oversize,
    link: "/tshirts",
  },
  {
    id: nanoid(),
    title: "Women Crop top",
    image: croptop,
    link: "/comingsoon",
  },
  {
    id: nanoid(),
    title: "Collar T-shirt",
    image: clooerman,
    link: "/comingsoon",
  },
  {
    id: nanoid(),
    title: "Zipper Hoodie",
    image: zipHoodie,
    link: "/comingsoon",
  },
  {
    id: nanoid(),
    title: "Joggers",
    image: jooger,
    link: "/comingsoon",
  },
  {
    id: nanoid(),
    title: "Half sleeve T-shirt",
    image: halfshirt,
    link: "/comingsoon",
  },
  {
    id: nanoid(),
    title: "Full sleeve T-shirt",
    image: fullsleeveman,
    link: "/comingsoon",
  },
  {
    id: nanoid(),
    title: "Rounded neck T-shirt",
    image: roundedneck,
    link: "/comingsoon",
  },
 
];

export default function CategoriesCard() {
  return (
    <main className="flex items-center flex-wrap gap-3 justify-center min-h-screen p-y ">
      {Data.map((items) => {
        return (
          <div
            key={items.id}
            className="border-[1px] border-gray-300 w-[300px] p-4 rounded-md cursor-pointer "
          >
            <Link href={items.link}>
            <div className=" overflow-hidden  ">
              <div className="hover:scale-110 flex items-center  transition ease-in-out duration-300 ">
                <Image
                  src={items.image}
                  alt=""
                  className="h-[300px] w-[300px] rounded-t-md "
                  height={300}
                  width={400}
                  />
              </div>
            </div>
            <div className="flex items-center h-[50px]  justify-center bg-white overflow-hidden  ">
              <h1 className=" text-xl font-medium px-3 ">{items.title}</h1>
            </div>
                  </Link>
          </div>
        );
      })}
    </main>
  );
}
