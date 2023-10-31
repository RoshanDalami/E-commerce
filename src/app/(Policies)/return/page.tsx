'use client'
import React from 'react'
import Link from 'next/link'
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from 'next/navigation';
export default function Return() {
    const router = useRouter();
    const onBackHandler = () => {
        router.push("/");
      };
  return (
    <>
    
          <BiArrowBack
          className="text-5xl hidden md:block  mt-10 ml-10 cursor-pointer bg-gray-600/20  p-3 rounded-full   "
          onClick={onBackHandler}
        />
    <div className='p-20 flex flex-col gap-10 ' >
        <div className='flex flex-col gap-3'>
            <h1 className='text-3xl font-bold'>
            Return Policy
            </h1>
            <p className='text-xl opacity-80' >
            Thank you for shopping with us. At Weugly, we strive to provide you with the best shopping experience. Please note that all sales are final, and we do not accept any returns or exchanges unless the product is damaged or defective upon receipt.
            </p>
        </div>
        <div className='flex gap-8 flex-col'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl font-bold' >
                Damaged or Defective Items
                </h1>
                <p className='text-xl opacity-80' >
                In the unlikely event that you receive a damaged or defective item, please contact us within same day of receiving your order. To ensure a prompt resolution, please provide us with your order number, a description and photographs of the damaged or defective product, and any other relevant details.
                <br />
                Our team will assess your claim and, if applicable, provide further instructions on the return process. We may offer a replacement, store credit, or refund, depending on the specific situation
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl font-bold'>
                Contact Us
                </h1>
                <p className='text-xl opacity-80' >
                If you have any questions about our products or this policy, please don&apos;t hesitate to contact us at 
                <Link href={'https://wa.me/message/F2X4SSL5A4DRC1'} className='underline mx-3 font-bold text-orange-400' target='_blank' >
                  {" "}  Whatsapp
                </Link>


                </p>
            </div>

        </div>
      
    </div>
    </>
  )
}
