'use client'
import Image from "next/image";
import cardImage from "../../../public/assets/hero_image.jpg";
import Link from "next/link";

export default function ProductCard() {
  return (
    <>
   
      <div className="w-[350px] shadow-lg  ">
        <Link href={''}>
        <div className="group rounded-lg w-[350px] overflow-hidden">
          <div className="w-[350px] h-[400px] group-hover:scale-125 transition duration-300">
            <Image src={cardImage} alt="new" />
          </div>
          <div className="  shadow border-2 border-gray-400 flex flex-col overflow-hidden"></div>
        </div>
        </Link>
        <div className="bg-white px-4 py-2 rounded-lg ">
          <h1 className="text-xl font-bold">Product Title</h1>
          <p className=" opacity-50">Description of Product</p>
          <div className="flex justify-between items-center">
            <p>Price</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:scale-110 transition duration-300" onClick={()=>console.log('item added')} >add to cart</button>
          </div>
        </div>
      </div>
   
    </>
  );
}
