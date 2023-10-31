/* eslint-disable react/no-unescaped-entities */
'use client'
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
export default function Terms() {
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
    <div className="p-20 flex flex-col gap-8">
      <div className="flex flex-col gap-3" >
        <h1 className="text-3xl font-bold" >Terms and Conditions</h1>
        <p className="text-xl opacity-80">
          Welcome to Weugly. These terms and conditions outline the rules and
          regulations for the use of our website. By accessing this website, we
          assume you accept these terms and conditions in full. Do not continue
          to use Weugly&apos;s website if you do not accept all of the terms and
          conditions stated on this page.
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold">
        The following terminology applies to these Terms and Conditions
        </h1>
        <ol className=" list-decimal mx-10 my-5 flex flex-col gap-2 " >
            <li className="text-md opacity-80">
            "Client," "You," and "Your" refers to you, the person accessing this website and accepting the company's terms and conditions.
            </li>
            <li className="text-md opacity-80">
            "The Company," "Ourselves," "We," "Our," and "Us," refers to Weugly.
            </li>
            <li className="text-md opacity-80">
            "Party," "Parties," or "Us," refers to both the Client and ourselves, or either the Client or ourselves.
            </li>
        </ol>
      </div>
      <div className="flex flex-col gap-3" >
        <h1 className="text-3xl font-bold" >Use of Cookies</h1>
        <p className="text-xl opacity-80">
        We employ the use of cookies. By accessing Weugly's website, you agreed to use cookies in agreement with Weugly's Privacy Policy.
        </p>
      </div>
      <div className="flex flex-col gap-3" >
        <h1 className="text-3xl font-bold" >License</h1>
        <p className="text-xl opacity-80">
        Unless otherwise stated, Weugly and/or its licensors own the intellectual property rights for all material on Weugly. All intellectual property rights are reserved. You may access this from Weugly for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold">
        You must not
        </h1>
        <ol className=" list-decimal mx-10 my-5 flex flex-col gap-2 " >
            <li className="text-md opacity-80">
            Republish material from Weugly
            </li>
            <li className="text-md opacity-80">
            Sell, rent, or sub-license material from Weugly
            </li>
            <li className="text-md opacity-80">
            Reproduce, duplicate, or copy material from Weugly
            </li>
        </ol>
      </div>
      <div className="flex flex-col gap-3" >
        <h1 className="text-3xl font-bold" >Limitation of liability</h1>
        <p className="text-xl opacity-80">
        In no event shall Weugly, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website, whether such liability is under contract. Weugly, including its officers, directors, and employees, shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
        </p>
      </div>
      <div className="flex flex-col gap-3" >
        <h1 className="text-3xl font-bold" >Variation of Terms</h1>
        <p className="text-xl opacity-80">
        Weugly is permitted to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis.
        </p>
      </div>
      <div className="flex flex-col gap-3" >
        <h1 className="text-3xl font-bold" >Entire Agreement</h1>
        <p className="text-xl opacity-80">
        These terms constitute the entire agreement between Weugly and you in relation to your use of this website and supersede all prior agreements and understandings.
        </p>
      </div>
      <div className="flex flex-col gap-3" >
        <h1 className="text-3xl font-bold" >Governing Law & Jurisdiction</h1>
        <p className="text-xl opacity-80">
        These terms will be governed by and interpreted in accordance with the laws of the jurisdiction of india and you submit to the non-exclusive jurisdiction of the state and federal courts located in Bangalore for the resolution of any disputes.
        <br />
        If you have any questions or concerns about this Privacy Policy or our practices, please contact us at
                <Link href={'https://wa.me/message/F2X4SSL5A4DRC1'} className='underline mx-3 font-bold text-orange-400' target='_blank' >
                  {" "}  Whatsapp
                </Link>
        </p>
      </div>
    </div>
    </>


  );
}
