/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../../../public/newLogo.png";
import image1 from "../../../public/reduced/hero_image_1.jpg";
import CartContext from "../Store/Cart-context";
import avatar from "../../../public/assets/avatar.svg";
import { UserAuth } from "../Context/AuthContext";
import { useContext } from "react";

import { BsSearchHeartFill } from "react-icons/bs";
import {AiOutlineHeart} from 'react-icons/ai'
const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "/comingsoon",
          imageSrc: image1,
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "/comingsoon",
          imageSrc: image1,
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Crop top", href: "/comingsoon" },
            { name: "t-shirt dress", href: "/comingsoon" },
            { name: "half sleeve tshirt", href: "/comingsoon" },
          ],
        },
        {
          id: "accessories",
          // name: "Accessories",
          items: [
            // { name: "Watches", href: "/comingsoon" },
            // { name: "Wallets", href: "/comingsoon" },
            // { name: "Bags", href: "/comingsoon" },
            // { name: "Sunglasses", href: "/comingsoon" },
            // { name: "Hats", href: "/comingsoon" },
            // { name: "Belts", href: "/comingsoon" },
          ],
        },
        // {
        //   id: "brands",
        //   name: "Brands",
        //   items: [
        //     { name: "Full Nelson", href: "/comingsoon"},
        //     { name: "My Way", href:"/comingsoon" },
        //     { name: "Re-Arranged", href: "/comingsoon" },
        //     { name: "Counterfeit", href: "/comingsoon"},
        //     { name: "Significant Other", href: "/comingsoon" },
        //   ],
        // },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "/comingsoon",
          imageSrc: image1,
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "/comingsoon",
          imageSrc:
            "https://firebasestorage.googleapis.com/v0/b/weugly-94422.appspot.com/o/blue2%20(1).png?alt=media&token=20cff6d6-e8aa-4412-b6a4-8798d5ee6596",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Rounded neck T-shirt", href: "/comingsoon" },
            { name: "collar T-shirt", href: "/comingsoon" },
            { name: "Oversized T-Shirts", href: "/tshirts" },
            { name: "Full sleeve T-shirt", href: "/comingsoon" },
            { name: "Pullover hoodie", href: "/comingsoon" },
            { name: "Zipper hoodie", href: "/comingsoon" },
            { name: "Zoggers", href: "/comingsoon" },
            { name: "Shorts", href: "/comingsoon" },
            { name: "Sweat shirt", href: "/comingsoon" },
          ],
        },
        {
          id: "accessories",
          // name: "Accessories",
          items: [
            // { name: "Watches", href: "/comingsoon" },
            // { name: "Wallets", href: "/comingsoon" },
            // { name: "Bags", href: "/comingsoon" },
            // { name: "Sunglasses", href: "/comingsoon" },
            // { name: "Hats", href: "/comingsoon"},
            // { name: "Belts", href: "/comingsoon"},
          ],
        },
        // {
        //   id: "brands",
        //   name: "Brands",
        //   items: [
        //     { name: "Re-Arranged", href: "#" },
        //     { name: "Counterfeit", href: "#" },
        //     { name: "Full Nelson", href: "#" },
        //     { name: "My Way", href: "#" },
        //   ],
        // },
      ],
    },
    {
      id: "men",
      name: "Kids",
      featured: [
        {
          name: "New Arrivals",
          href: "/comingsoon",
          imageSrc: image1,
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "/comingsoon",
          imageSrc:
            "https://firebasestorage.googleapis.com/v0/b/weugly-94422.appspot.com/o/blue2%20(1).png?alt=media&token=20cff6d6-e8aa-4412-b6a4-8798d5ee6596",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [{ name: "Rounded neck T-shirt", href: "/comingsoon" }],
        },
        {
          id: "accessories",
          // name: "Accessories",
          items: [
            // { name: "Watches", href: "/comingsoon" },
            // { name: "Wallets", href: "/comingsoon" },
            // { name: "Bags", href: "/comingsoon" },
            // { name: "Sunglasses", href: "/comingsoon" },
            // { name: "Hats", href: "/comingsoon"},
            // { name: "Belts", href: "/comingsoon"},
          ],
        },
        // {
        //   id: "brands",
        //   name: "Brands",
        //   items: [
        //     { name: "Re-Arranged", href: "#" },
        //     { name: "Counterfeit", href: "#" },
        //     { name: "Full Nelson", href: "#" },
        //     { name: "My Way", href: "#" },
        //   ],
        // },
      ],
    },
  ],
  pages: [
    // { name: 'Company', href: '#' },
    // { name: 'Stores', href: '#' },
  ],
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function TailwindNav() {
  const [open, setOpen] = useState(false);
  const { user }: any = UserAuth();
  const cartCtx = useContext(CartContext);
  const [cartItemNumber, setCartItemNumber] = useState([]);
  const { items,wishlist } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item: any) => {
    return curNumber + item.amount;
  }, 0);
  const numberOfWishlistItems = wishlist?.reduce((curNumber, item: any) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div className="bg-white z-50 sticky top-0 ">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10 z-50"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <Image
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                  width={50}
                                  height={50}
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                {/* <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div> */}

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    {user ? (
                      user.photoURL ? (
                        <>
                          <Link href={"/profile"}>
                            <Image
                              src={user?.photoURL}
                              alt=""
                              width={30}
                              height={30}
                              className="rounded-full"
                            />
                            <div>{user?.displayName}</div>
                          </Link>
                        </>
                      ) : (
                        <Link href={"/profile"}>
                          <Image
                            src={avatar}
                            alt="avatar"
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                        </Link>
                      )
                    ) : (
                      <Link
                        href="/profile"
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Sign in
                      </Link>
                    )}
                    {user ? (
                      <span className="text-xl  p-2">{user?.displayName}</span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flow-root">
                    {!user ? (
                      <Link
                        href="/signup"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Create account
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                {/* <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <Image
                      src="https://tailwindui.com/Image/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                      height={50}
                      width={50}
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <span className="sr-only">Your Company</span>
                  <Image
                    className=" w-auto"
                    src={logo}
                    alt=""
                    height={100}
                    width={100}
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500 z-50">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <Image
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center "
                                              height={50}
                                              width={500}
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <a
                                                  href={item.href}
                                                  className="hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {/* {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))} */}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="border-2 border-gray-300 rounded-md  flex items-center  mx-3 ">
                  <input
                    type="text"
                    className=" py-1 px-4 w-full rounded-md focus:outline-none "
                    placeholder="Search within Weugly "
                  />
                  <BsSearchHeartFill className="text-2xl mx-3" />
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? (
                    user.photoURL ? (
                      <Link href={"/profile"} className="flex items-center">
                        {/* <Image
                          src={user?.photoURL}
                          alt=""
                          width={50}
                          height={50}
                          className="rounded-full"
                        /> */}
                        <h1 className="text-xl font-semibold">
                          Hi,{user?.displayName}
                        </h1>
                      </Link>
                    ) : (
                      <Link href={"/profile"}>
                        <Image
                          src={avatar}
                          alt="avatar"
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                      </Link>
                    )
                  ) : (
                    <Link
                      href="/profile"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Sign in
                    </Link>
                  )}
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  {!user ? (
                    <Link
                      href="/signup"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Create account
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
                {/* COUNTRY FLAG AND LETTER  */}
                {/* <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <Image
                      src="https://tailwindui.com/Image/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                      height={50}
                      width={50}
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}

                {/* Search */}
                {/* <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </a>
                </div> */}

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    href="/cart"
                    className="group -m-2 flex items-center p-2"
                  >
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {numberOfCartItems}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
                {/* wishlist  */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    href="/wishlist"
                    className="group -m-2 flex items-center p-2"
                  >
                    <AiOutlineHeart
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {numberOfWishlistItems}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
