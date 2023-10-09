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
        <div className=" ">

        <HomeSectionPage />
        </div>
        <div>
          <div className="mx-8 my-6">
          <Link href={'/categories'}>
          <h1 className="bg-black text-white font-bold text-2xl inline px-3 py-3 rounded-full ">Categories</h1>
          </Link>
          </div>
        <CategoriesCard/>
        </div>
        <div className="px-4 py-10 md:px-5 md:py-3">
          <span className="text-4xl font-bold px-2 md:px-10">Shop Here</span>
        </div>
        <div id="products">
          <CategoriesPage />
        </div>

        <div className="px-5 py-4 flex gap-6 flex-wrap items-center justify-center ">
          {products?.map((item: any) => {
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
          })}
        </div>
      </main>
    </>
  );
}
