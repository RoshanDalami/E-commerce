"use client";
import { useEffect, useState, useContext } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import SliderSingle from "./SingleCarousel";
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";
import CartContext from "../Store/Cart-context";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { UserAuth } from "../Context/AuthContext";

import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";

const product = {
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "XXL", inStock: true },
    { name: "XXXL", inStock: false },
  ],
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  console.log(selectedSize);

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
      size: selectedSize,
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
      <div className="  ">
        <BiArrowBack
          className="text-5xl hidden md:block  mt-10 ml-10 cursor-pointer bg-gray-600/20  p-3 rounded-full   "
          onClick={onBackHandler}
        />
      </div>
      <main className="md:mx-20 flex  items-center justify-center ">
        <div className="flex flex-col md:flex-row     gap-6   bg-slate-200 shadow-sm md:shadow-2xl  md:w-[900px]   rounded-lg p-10">
          <div className="w-[300px] mx-auto  ">
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
          <div className="md:ml-12 md:flex  md:flex-col justify-around  w-full ">
            <div className="flex flex-col gap-2 md:gap-10">
              <h1 className="text-3xl font-bold">{individualProduct?.title}</h1>
              <h1 className=" opacity-60">{individualProduct?.description}</h1>
              <h1 className="text-xl"> Rs {individualProduct?.price}</h1>
            </div>
            <div className="flex gap-2 flex-col   ">
              <div className="flex justify-between ">
                {/* <div className="flex gap-2 p-2 items-center">
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                  className="border-2 border-black rounded-md "
                >
                  <option value="small" >S</option>
                  <option value="medium">M</option>
                  <option value="large">L</option>
                  <option value="Extra large">XL</option>
                  <option value="Extra Extra large">XXL</option> 
                </select>
              </div> */}
                <div className=" mx-auto my-3 ">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-gray-900">Size</h4>
                    {/* <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a> */}
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-2 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <button
                className="md:px-6 px-3 py-3 bg-indigo-600 text-white rounded-xl hover:bgindigo-700 transition duration-300 text-sm"
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
