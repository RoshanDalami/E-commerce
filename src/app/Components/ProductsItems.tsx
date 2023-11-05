'use client'
import { useState,useEffect } from 'react';
import ProductCard from './Card';
import { db } from '@/app/firebase/config';
import { getDocs, collection } from "firebase/firestore";

export default function ProductsItems(){
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
    console.log(products)
    return(
        <div className="px-5 py-4 flex gap-6 flex-wrap items-center justify-center ">
        {products?.map((item: any) => {
          if(item.section === 'men' && item.category === 'oversizeTshirt'){
            return (
              <ProductCard
                key={item.id}
                image={item.imageulr}
                price={item.price}
                afterDiscount={item.afterDiscountPrice}
                title={item.title}
                description={item.description}
                id={item.id}
              />
            );
          }
        })}
      </div>
    )
}