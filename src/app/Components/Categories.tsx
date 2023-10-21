import Link from "next/link"
export default function CategoriesPage(){
    return(
        <main className="my-4 mx-11 md:mx-16"> 
            <div className="px-6 py-3 bg-black  rounded-full inline">
                <Link href={'/tshirts'}>
                
                <span className="text-white font-bold text-xl">Explore more</span>
                </Link>
            </div>
        </main>
    )
}