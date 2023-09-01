import ProductCard from "./Components/Card"
import CategoriesPage from "./Components/Categories"
import HeroTextPage from "./Components/HeroText"
import HomeSectionPage from "./Components/HomeSection"

export default function Home() {
  return (
  <main className=" overflow-hidden p-10">
    
    <HomeSectionPage/>
    <HeroTextPage/>
    <div className="px-5">

    <span className="text-4xl font-bold px-10">Shop Here</span>
    </div>
    <CategoriesPage/>

    <div className="px-10 py-4">
      <ProductCard/>
    </div>
  </main>
  )
}
