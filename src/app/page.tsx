import ProductCard from "./Components/Card"
import CategoriesPage from "./Components/Categories"
import HeroTextPage from "./Components/HeroText"
import HomeSectionPage from "./Components/HomeSection"
import CartProvider from "./Store/CartProvider"

export default function Home() {
  return (


  <main className=" overflow-hidden p-10">
    
    <HomeSectionPage/>
    <HeroTextPage/>
    <div className="px-4 py-2 md:px-5 md:py-3">
    <span className="text-4xl font-bold px-6 md:px-10">Shop Here</span>
    </div>
    <CategoriesPage/>

    <div className="px-5 py-4 flex gap-6 flex-wrap items-center justify-center ">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  </main>
  )
}
