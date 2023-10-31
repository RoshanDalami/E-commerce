'use client'
import React from 'react'
import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

export default function Privacy() {
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
            Privacy Policy
            </h1>
            <p className='text-xl opacity-80' >
            At Weugly, we value the trust you place in us when providing us with your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website. By accessing or using our services, you agree to the terms of this Privacy Policy.
            </p>
        </div>
        <div className='flex gap-8 flex-col'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl font-bold' >
                Information We Collect
                </h1>
                <p className='text-xl opacity-80' >
                We may collect personal information, including but not limited to your name, email address, shipping and billing addresses, phone number, and payment details. We may also collect non-personal information such as browser type, operating system, and pages visited for analytical purposes.
                
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl font-bold'>
                How We Use Your Information
                </h1>
                <p className='text-xl opacity-80' >
                We use your information to process your orders, personalize your shopping experience, and provide customer support. Additionally, we may use your information for marketing purposes, such as sending you promotional emails, with your explicit consent.
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl font-bold'>
                Data Security
                </h1>
                <p className='text-xl opacity-80' >
                We take the security of your data seriously and implement various security measures to protect it from unauthorized access, disclosure, or alteration. We use secure socket layer (SSL) technology to encrypt sensitive information during transmission.
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl font-bold'>
                Data Sharing
                </h1>
                <p className='text-xl opacity-80' >
                We may share your information with third-party service providers to facilitate services such as payment processing, shipping, and marketing. However, we do not sell or rent your personal information to third parties for their marketing purposes.
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl font-bold'>
                Cookies
                </h1>
                <p className='text-xl opacity-80' >
                We use cookies to enhance your browsing experience and gather information about how you use our website. You can adjust your browser settings to refuse cookies, although this may affect your ability to access certain features of our site.
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl font-bold'>
                Changes to the Privacy Policy
                </h1>
                <p className='text-xl opacity-80' >
                We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page, and we encourage you to review this policy periodically.
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl font-bold'>
                Contact Us
                </h1>
                <p className='text-xl opacity-80' >
                If you have any questions or concerns about this Privacy Policy or our practices, please contact us at
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
