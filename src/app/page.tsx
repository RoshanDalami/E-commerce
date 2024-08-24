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

//image import
import SeasonalPormo from "../../public/seasonal.jpg";

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
  console.log(products);
  return (
    <>
      <main className=" overflow-hidden  ">
        <TopMarquee />
        <div className=" ">
          <HomeSectionPage />
        </div>

        <div className="md:my-10 ">
          <Promo />
        </div>

        <div className="mt-5 md:mt-0">
          <Link href={"/comingsoon"}>
            <Image src={SeasonalPormo} alt="seasonl discount" />
          </Link>
        </div>
        <div className="my-10">
          <div className="mx-4 my-4 md:mx-8 md:my-6">
            <Link href={"/categories"}>
              <h1 className="inline rounded-full bg-black px-3 py-3 font-bold text-white md:text-2xl ">
                New Arrivals
              </h1>
            </Link>
          </div>
          <div className="md:mx-10 md:my-10 md:px-10  ">
            <HomeNewArrival />
          </div>
        </div>
        <div className="my-10">
          <div className="mx-4 my-4 md:mx-8 md:my-6">
            <Link href={"/categories"}>
              <h1 className="inline rounded-full bg-black px-3 py-3 font-bold text-white md:text-2xl ">
                Winter Deals
              </h1>
            </Link>
          </div>
          <div className="md:mx-10 md:my-10 md:px-10  ">
            <HomeNewArrival />
          </div>
        </div>

        <div className="px-4 py-10 md:px-5 md:py-3">
          <span className="px-2 text-4xl font-bold md:px-10">
            OverSized T-shirts
          </span>
        </div>
        <div className="flex items-center justify-center">
          <CategoriesPage link="tshirts" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 px-5 py-4 ">
          {products?.map((item: any, index: number) => {
            if (index % 2 === 0) {
              return (
                <ProductCard
                  key={nanoid()}
                  image={item.imageulr}
                  afterDiscount={item.afterDiscountPrice}
                  price={item.price}
                  title={item.title}
                  description={item.description}
                  id={item.id}
                />
              );
            }
            return null;
          })}
        </div>

        <div className="px-4 py-10 md:px-5 md:py-3">
          <span className="px-2 text-4xl font-bold md:px-10">Hoodies</span>
        </div>
        <div className="flex items-center justify-center">
          <CategoriesPage link="comingsoon" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 px-5 py-4 ">
          {products?.map((item: any, index: number) => {
            if (index % 2 === 0) {
              return (
                <ProductCard
                  key={nanoid()}
                  image={item.imageulr}
                  afterDiscount={item.afterDiscountPrice}
                  price={item.price}
                  title={item.title}
                  description={item.description}
                  id={item.id}
                />
              );
            }
            return null;
          })}
        </div>
        <Link href={"https://wa.me/message/F2X4SSL5A4DRC1"}>
          <Image
            src={"/svgFiles/whatsappNew.svg"}
            alt=""
            width={50}
            height={50}
            className="fixed bottom-20 right-3 z-50 md:hidden   "
          />
        </Link>
      </main>
    </>
  );
}
