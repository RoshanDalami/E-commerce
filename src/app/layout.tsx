'use client'
import "./globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar";
import CartProvider from "./Store/CartProvider";
import WishProvider from './Store/WishProvider';
import { getServerSession } from "next-auth";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./Context/AuthContext";
import Footer from "./Components/FooterMobile";
import TailwindNav from "./Components/TailwindNav";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "We ugly",
//   description: "",
// };

export default  function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <title>We ugly</title>
      <body className={inter.className}>
        <AuthContextProvider>
          <CartProvider>
            <WishProvider>

            <Toaster position="top-center" reverseOrder={false} />
            {/* <Navbar /> */}
            <TailwindNav/>
            {children}
            <Footer/>
            </WishProvider>
          </CartProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
