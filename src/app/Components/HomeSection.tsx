'use client'
import Image from "next/image";
import { useRouter,redirect } from "next/navigation";
import HeroImage from "../../../public/assets/hero_image.jpg";
import HeroImage1 from "../../../public/assets/hero_image_1.png";
import HeroImage2 from "../../../public/assets/hero_image_2.png";
import HeroImage3 from "../../../public/assets/hero_image_3.jpg";
import { FormEvent } from "react";
import SliderComp from "./Carousel";

export default function HomeSectionPage() {
  const router = useRouter();
  const onClickHandler =(e:FormEvent)=>{
    e.preventDefault();
    router.push('/#products');
  }
  return (
    <>
      <div>
          <SliderComp >
            <div className="">
              <Image src={HeroImage} alt="test"/>
            </div>
            <div className="">
              <Image src={HeroImage1} alt="test"/>
            </div>
            <div className="">
              <Image src={HeroImage2} alt="test"/>
            </div>
            <div className="">
              <Image src={HeroImage3} alt="test"/>
            </div>
          </SliderComp>
      </div>
    </>
  );
}
