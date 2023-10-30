import React, { useState, useEffect, FormEvent } from "react";
import Model from "./Model";
import Link from "next/link";
import Image from "next/image";
import { RiSearchLine } from "react-icons/ri";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default function SearchBar() {
  const [modelHandler, setModelHandler] = useState(false);
  const [products, setProducts] = useState([{}]);
  const [searchTerm, setSearchTerm] = useState("");
  const modelOpenHandler = () => {setModelHandler(true)};
  const modelCloseHandler = () => {
    setModelHandler(false)
    setSearchTerm('')
};

  const getProducts = async () => {
    const dbRef = collection(db, "Products");
    const response = await getDocs(dbRef);
    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  const onChangeHandler = (e:any)=>{
    setSearchTerm(e.target.value)
  }
  console.log(products);
  console.log(searchTerm)
  return (
    <div>
      <RiSearchLine
        className=" text-2xl md:text-3xl  mx-3 cursor-pointer"
        onClick={modelOpenHandler}
      />
      {modelHandler && (
        <Model closeHandler={modelCloseHandler}>
          <div className="bg-white flex-col  items-center rounded-lg  ">
            <div className="flex  items-center" >

            <RiSearchLine className="text-3xl mx-3" />
            <input
              type="text"
              placeholder="Search with Weugly"
              className="px-4 py-3 w-full outline-none  rounded-lg"
              onChange={onChangeHandler}
              value={searchTerm}
            />
            <button
              className="bg-red-600 px-4 py-2 text-white mx-2 rounded-lg"
              onClick={modelCloseHandler}
            >
              close
            </button>
            </div>
            <div className="">

                {
                    products.filter((item:any)=>{
                        let userSearchTerm = searchTerm.toLowerCase();
                        if(userSearchTerm !== ""){
                            return item.title.toLowerCase().includes(userSearchTerm)
                        }
                    }).map((item:any)=>{
                        return(
                            <Link href={item.id} key={item.id} onClick={modelCloseHandler} >
                            <div className="flex gap-2 my-2 mx-4 pb-3" >
                                <Image src={item.imageulr} alt="image" width={50} height={50} className="rounded-lg" />
                                <section>

                                <h1 className="text-xl mt-2 font-semibold ">{item.title}</h1>
                                <p className="font-xs opacity-70" >Rs. {item.price}</p>
                                </section>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>
          </div>
        </Model>
      )}
    </div>
  );
}
