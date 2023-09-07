import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar";
import CartProvider from "./Store/CartProvider";
import SessionProvider from '@/app/Components/SessionProvider';
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "We ugly",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>

        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
