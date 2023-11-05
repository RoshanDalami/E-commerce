import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/newLogo.png'
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { FaFacebook,FaWhatsappSquare,FaInstagramSquare } from "react-icons/fa";
import { BsRocketTakeoff, BsPerson } from "react-icons/bs";

export default function Footer() {
  const Products = [
    {
      id: "1",
      title: "Hoodies",
      link: "/categories",
    },
    {
      id: "2",
      title: "Sweat Shirts",
      link: "/categories",
    },
    {
      id: "3",
      title: "Over Sized T-shirts",
      link: "/categories",
    },
    {
      id: "4",
      title: "Jogger",
      link: "/categories",
    },
  ];
  const Details = [
    {
      id: "1",
      title: "Why Weugly",
      link: "/",
    },
    {
      id: "2",
      title: "What are we",
      link: "/",
    },
    {
      id: "3",
      title: "Where are we",
      link: "/",
    },
  ];
  const Legal = [
    {
      id: "1",
      title: "Return Policy",
      link: "/return",
    },
    {
      id: "2",
      title: "Terms and Conditions",
      link: "/terms",
    },
    {
      id: "3",
      title: "Privacy Policy",
      link: "/privacy",
    },
  ];
  const Socials = [
    {
      id:'1',
      title:'facebook',
      link:'https://www.facebook.com/WeUgly.in',
      icons:<FaFacebook/>,
      class:'text-4xl text-blue-600'
    },
    {
      id:'2',
      title:'instagram',
      link:'https://instagram.com/weugly.in?igshid=MzMyNGUyNmU2YQ==',
      icons:<FaInstagramSquare/>,
      class:'text-4xl text-purple-600'
    },
    {
      id:'3',
      title:'Whatsapp',
      link:'https://wa.me/message/F2X4SSL5A4DRC1',
      icons:<FaWhatsappSquare/>,
      class:'text-4xl text-green-600'
    },
  ]
  return (
    <>
      <main className=" md:hidden sticky bottom-0 z-40">
        <footer>
          <nav className="bg-white border-t-[1px] border-gray-500  pt-4  h-[70px] flex items-center justify-center gap-10">
            <div>
              <Link
                href={"/"}
                className="flex flex-col items-center justify-center"
              >
                <AiOutlineHome className="text-3xl" />
                <span className="text-sm">Home</span>
              </Link>
            </div>
            <div>
              <Link
                href={"/categories"}
                className="flex flex-col items-center justify-center"
              >
                <BiCategoryAlt className="text-3xl" />
                <span className="text-sm">Categories</span>
              </Link>
            </div>
            <div>
              <Link
                href={"/wishlist"}
                className="flex flex-col items-center justify-center"
              >
                <AiOutlineHeart className="text-3xl" />
                <span className="text-sm">Wishlist</span>
              </Link>
            </div>
            <div>
              <Link
                href={"/profile"}
                className="flex flex-col items-center justify-center"
              >
                <BsPerson className="text-3xl" />
                <span className="text-sm">Profile</span>
              </Link>
            </div>
          </nav>
        </footer>
      </main>
      <main className="hidden md:flex bg-orange-700/10  mt-20  flex-col px-20  w-full  items-center ">
      
          <Image src={logo} alt="logo"  width={250} height={150} className="" />
        
        <div className="flex  px-20 py-5 w-full justify-between">
        <section>
          <h1 className="text-xl font-bold">Products</h1>
          <div>
            {Products.map((items) => {
              return (
                <Link href={items.link} key={items.id}>
                  <p>{items.title}</p>
                </Link>
              );
            })}
          </div>
        </section>
        <section>
          <h1 className="text-xl font-bold" >COMPANY</h1>
          <div>
            {Details.map((items) => {
              return (
                <Link href={items.link} key={items.id}>
                  <p>{items.title}</p>
                </Link>
              );
            })}
          </div>
        </section>
        <section>
          <h1 className="text-xl font-bold">Legal</h1>
          <div>
            {Legal.map((items) => {
              return (
                <Link href={items.link} key={items.id}>
                  <p>{items.title}</p>
                </Link>
              );
            })}
          </div>
        </section>
        <section className=" ">
          <h1 className="text-xl font-bold">CONNECT WITH US</h1>
          <div className="flex items-center justify-left gap-6" >
            {Socials.map((items) => {
              return (
                <Link href={items.link} target="_blank" key={items.id}>
                  <p className={items.class} >
                  {items.icons}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
        </div>
      </main>
    </>
  );
}
