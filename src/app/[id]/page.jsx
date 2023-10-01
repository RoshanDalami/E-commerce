"use client";
import { useEffect, useState, useContext } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import SliderSingle from './SingleCarousel'
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";
import CartContext from "../Store/Cart-context";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { UserAuth } from "../Context/AuthContext";

export default function IndividualProduct() {
  const { id } = useParams();
  const { user } = UserAuth();
  const cartCtx = useContext(CartContext);
  const router = useRouter();
  const [size, setSize] = useState("small");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [individualProduct, setIndividualProduct] = useState({
    imageulr: "",
    price: "",
    title: "",
    description: "",
    id: "",
  });
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      title: individualProduct?.title,
      price: individualProduct?.price,
      amount: amount,
      image: individualProduct?.imageulr,
      size: size,
    });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = 1;
    if (enteredAmount < 1) {
      return;
    }
    if (!user) {
      router.replace("/profile");
      return;
    }
    try {
      addToCartHandler(enteredAmount);
      toast.success("Item has been added to cart");
    } catch (error) {
      console.log("error");
    }
  };

  const getIndividualProduct = async () => {
    const dbRef = doc(db, "Products", id);
    const response = await getDoc(dbRef);
    const data = response.data();
    setIndividualProduct(data);
  };
  useEffect(() => {
    getIndividualProduct();
  }, []);
  const onBackHandler = () => {
    router.push("/");
  };
  console.log(individualProduct);
  return (
    <>
      <BiArrowBack
        className="text-3xl mt-10 ml-10 cursor-pointer"
        onClick={onBackHandler}
      />
      <main className="md:mx-20 flex  items-center justify-center h-[90vh]">
        <div className="flex flex-col md:flex-row    gap-6   bg-white shadow-sm md:shadow-2xl  md:w-[900px]   rounded-lg p-10">
          <div className="w-[300px]  ">
            <SliderSingle>
              
                <Image
                  src={individualProduct?.imageulr}
                  alt="Product Image"
                  height={400}
                  width={400}
                  className="rounded-lg"
                />
              
             
                <Image
                  src={individualProduct?.imageulr1}
                  alt="Product Image"
                  height={400}
                  width={400}
                  className="rounded-lg"
                />
              
              
                <Image
                  src={individualProduct?.imageulr2}
                  alt="Product Image"
                  height={400}
                  width={400}
                  className="rounded-lg"
                />
              
              
                <Image
                  src={individualProduct?.imageulr3}
                  alt="Product Image"
                  height={400}
                  width={400}
                  className="rounded-lg"
                />
  
            </SliderSingle>
          </div>
          <div className="md:ml-12 md:flex  md:flex-col justify-around">
            <div className="flex flex-col gap-2 md:gap-10">
              <h1 className="text-3xl font-bold">{individualProduct?.title}</h1>
              <h1 className=" opacity-60">{individualProduct?.description}</h1>
              <h1 className="text-xl"> Rs {individualProduct?.price}</h1>
            </div>
            <div className="flex gap-2  ">
              <div className="flex gap-2 p-2 items-center">
                <p className="text-sm">Select size</p>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                  className="border-2 border-black rounded-md"
                >
                  <option value="small">S</option>
                  <option value="medium">M</option>
                  <option value="large">L</option>
                  <option value="Extra large">XL</option>
                  <option value="Extra Extra large">XXL</option>
                </select>
              </div>
              <button
                className="md:px-6 px-3 py-1 bg-blue-600 text-white rounded-xl hover:scale-110 transition duration-300 text-sm"
                onClick={onSubmitHandler}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
