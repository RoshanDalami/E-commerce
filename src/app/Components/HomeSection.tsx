'use client'
import Image from "next/image";
import { useRouter,redirect } from "next/navigation";
import HeroImage from "../../../public/assets/hero_image.jpg";
import HeroImage1 from "../../../public/assets/hero_image_1.png";
import HeroImage2 from "../../../public/assets/hero_image_2.png";
import HeroImage3 from "../../../public/assets/hero_image_3.jpg";
import { FormEvent } from "react";

export default function HomeSectionPage() {
  const router = useRouter();
  const onClickHandler =(e:FormEvent)=>{
    e.preventDefault();
    router.push('/#products');
  }
  return (
    <>
      <div className="flex flex-col  gap-4 md:flex-row -z-10 ">
        <section className="rounded-3xl group relative overflow-hidden cursor-pointer md:w-[430%]  ">
          <Image
            src={HeroImage1}
            alt="hero section Image"
            className="rounded-3xl h-full group-hover:scale-110  "
          />
          <div className=" hidden group-hover:block  ">
            <div className="bg-black absolute inset-0 opacity-30 "></div>
            <div className="absolute top-0 bottom-0 left-0 right-0 items-center justify-end  flex flex-col ">
              <h1 className="text-white text-xl md:text-2xl font-bold">
                Want Oversized T-shirts ?
              </h1>
              <button onClick={onClickHandler} className="border-2 border-sky-600 px-4 py-2 my-10 rounded text-white hover:bg-sky-600 hover:scale-125 transition ease-in-out duration-150 ">
                Buy now
              </button>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-2 md:gap-5 ">
          <section className=" h-[500px] overflow-hidden rounded-3xl relative">
            <Image
              src={HeroImage}
              alt="hero section Image"
              className="rounded-3xl"
            />
            <div className="">
              <div className="bg-black absolute inset-0 opacity-30  hidden sm:block  "></div>
              <h1 className="absolute top-0 bottom-0 right-0 left-0 text-white text-2xl md:text-3xl font-bold p-5 ">
                #Ugly by choice
              </h1>
            </div>
          </section>

          <div className="flex gap-3 ">
            <section className="h-[200px] overflow-hidden  rounded-3xl relative">
              <Image
                src={HeroImage2}
                alt="hero section Image"
                className="rounded-3xl"
              />
              <div className="">
                <div className="bg-black absolute inset-0 opacity-30 hidden sm:block  "></div>
                <h1 className="absolute top-0 bottom-0 right-0 left-0 text-white text-2xl md:text-3xl font-bold p-5 mt-20  ">
                  #Trending
                </h1>
              </div>
            </section>
            <section className="h-[200px] overflow-hidden  rounded-3xl relative">
              <Image
                src={HeroImage3}
                alt="hero section Image"
                className="rounded-3xl"
              />
              <div className="">
                <div className="bg-black absolute inset-0 opacity-30 hidden sm:block   "></div>
                <h1 className="absolute top-0 bottom-0 right-0 left-0 text-white text-2xl md:text-3xl font-bold p-5 mt-20  ">
                  #Stylish
                </h1>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
