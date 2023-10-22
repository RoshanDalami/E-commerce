"use client";

import ProductCard from "./Components/Card";
import CategoriesPage from "./Components/Categories";
import HomeSectionPage from "./Components/HomeSection";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { db } from "./firebase/config";
import { getDocs, collection } from "firebase/firestore";
import CategoriesCard from "./Components/CategoriesCard";
import Link from "next/link";
import Image from "next/image";
import MidBanner from "./Components/MidBanner";
import TopMarquee from "./Components/TopMarquee";
import HomeNewArrival from "./Components/HomeNewArrival";
import Promo from "./Components/Promo";

export default function Home() {
  const [products, setProducts] = useState([{}]);

  const getProducts = async () => {
    const dbRef = collection(db, "Products");
    const response = await getDocs(dbRef);
    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <main className=" overflow-hidden ">
        <TopMarquee />
        <div className=" ">
          <HomeSectionPage />
        </div>
        {/* <MidBanner /> */}
        <div className="md:my-10 " >
        <Promo/>
        </div>
        {/* <div>
          <div className="mx-8 my-6">
            <Link href={"/categories"}>
              <h1 className="bg-black text-white font-bold text-2xl inline px-3 py-3 rounded-full ">
                Categories
              </h1>
            </Link>
          </div>
          <CategoriesCard />
        </div> */}
        <div className="my-10">
          <div className="md:mx-8 mx-4 md:my-6 my-4">
            <Link href={"/categories"}>
              <h1 className="bg-black text-white font-bold md:text-2xl inline px-3 py-3 rounded-full ">
                New Arrivals
              </h1>
            </Link>
          </div>
          <div className="md:my-10 md:px-10 md:mx-10  ">
            <HomeNewArrival />
          </div>
        </div>
        <div className="px-4 py-10 md:px-5 md:py-3">
          <span className="text-4xl font-bold px-2 md:px-10">OverSized T-shirts</span>
        </div>
        <div className="flex items-center justify-center" >
          <CategoriesPage />
        </div>


        <div className="px-5 py-4 flex gap-6 flex-wrap items-center justify-center ">
          {products?.map((item: any,index:number) => {
            if(index%2 === 0){
              return (
                <ProductCard
                  key={nanoid()}
                  image={item.imageulr}
                  price={item.price}
                  title={item.title}
                  description={item.description}
                  id={item.id}
                />
              );
            }
            return null
          })}
        </div>
        <Link href={'https://wa.me/message/F2X4SSL5A4DRC1'} >
        
        <Image src={'/svgFiles/whatsappNew.svg'} alt="" width={50} height={50} className="fixed right-3 bottom-20 md:hidden z-50   " />
        </Link>
      </main>
    </>
  );
}
