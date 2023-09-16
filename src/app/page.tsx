"use client";

import ProductCard from "./Components/Card";
import CategoriesPage from "./Components/Categories";
import HeroTextPage from "./Components/HeroText";
import HomeSectionPage from "./Components/HomeSection";
import CartProvider from "./Store/CartProvider";
import { nanoid } from "nanoid";
import cardImage from "../../public/assets/hero_image.jpg";
import { useEffect, useState } from "react";
import { db } from "./firebase/config";
import { getDocs, collection } from "firebase/firestore";
import Footer from "./Components/Footer";

const DATA = [
  {
    id: nanoid(),
    title: "Product 1",
    description: "Product Description",
    price: 900,
    image: cardImage,
  },
  {
    id: nanoid(),
    title: "Product 2",
    description: "Product Description",
    price: 900,
    image: cardImage,
  },
  {
    id: nanoid(),
    title: "Product 3",
    description: "Product Description",
    price: 900,
    image: cardImage,
  },
  {
    id: nanoid(),
    title: "Product 4",
    description: "Product Description",
    price: 900,
    image: cardImage,
  },
  {
    id: nanoid(),
    title: "Product 5",
    description: "Product Description",
    price: 900,
    image: cardImage,
  },
  {
    id: nanoid(),
    title: "Product 6",
    description: "Product Description",
    price: 900,
    image: cardImage,
  },
  {
    id: nanoid(),
    title: "Product 7",
    description: "Product Description",
    price: 900,
    image: cardImage,
  },
];

export default function Home() {
  const [products, setProducts] = useState([{}]);

  const getProducts = async () => {
    const dbRef = collection(db, "Products");
    const response = await getDocs(dbRef);
    const data = response.docs.map((doc) => ({ ...doc.data() }));
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <main className=" overflow-hidden p-10">
        <HomeSectionPage />
        <HeroTextPage />
        <div className="px-4 py-2 md:px-5 md:py-3">
          <span className="text-4xl font-bold px-6 md:px-10">Shop Here</span>
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
                id={nanoid()}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
