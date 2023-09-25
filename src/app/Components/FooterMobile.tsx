import Link from "next/link";
import {AiOutlineHome,AiOutlineSearch} from 'react-icons/ai'
import {BiCategoryAlt} from 'react-icons/bi'
import {BsRocketTakeoff,BsPerson} from 'react-icons/bs'


export default function Footer() {
  return (
    <main className=" sticky bottom-[0vh] z-50">
      <footer>
        <nav className="bg-white border-t-[1px] border-gray-500  pt-4  h-[70px] flex items-center justify-center gap-10">
          <div >
            <Link href={'/'} className="flex flex-col items-center justify-center">
                <AiOutlineHome className="text-3xl"  />
                <span className="text-sm">Home</span>
            </Link>
          </div>
          <div >
            <Link href={'/categories'} className="flex flex-col items-center justify-center">
                <BiCategoryAlt className="text-3xl"  />
                <span className="text-sm">Categories</span>
            </Link>
          </div>
          {/* <div>
                <AiOutlineSearch className="text-3xl"  />
                <span>Search</span>
          </div> */}
          <div >
            <Link href={'/categories'} className="flex flex-col items-center justify-center">
                <BsRocketTakeoff className="text-3xl"  />
                <span className="text-sm">Explore</span>
            </Link>
          </div>
          <div >
            <Link href={'/profile'} className="flex flex-col items-center justify-center">
                <BsPerson className="text-3xl"  />
                <span className="text-sm">Profile</span>
            </Link>
          </div>
        </nav>
      </footer>
    </main>
  );
}
