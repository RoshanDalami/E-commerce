import Link from "next/link";
import {AiOutlineHome,AiOutlineSearch} from 'react-icons/ai'
import {BiCategoryAlt} from 'react-icons/bi'
import {BsRocketTakeoff,BsPerson} from 'react-icons/bs'


export default function Footer() {
  return (
    <main className=" sticky bottom-[0vh] z-50">
      <footer>
        <nav className="bg-white border-t-[1px] border-gray-500  pt-4  h-[70px] flex items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center">
            <Link href={'/'}>
                <AiOutlineHome className="text-3xl"  />
                <span className="text-sm">Home</span>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link href={'/categories'}>
                <BiCategoryAlt className="text-3xl"  />
                <span className="text-sm">Categories</span>
            </Link>
          </div>
          {/* <div>
                <AiOutlineSearch className="text-3xl"  />
                <span>Search</span>
          </div> */}
          <div className="flex flex-col items-center justify-center">
            <Link href={'/categories'}>
                <BsRocketTakeoff className="text-3xl"  />
                <span className="text-sm">Explore</span>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link href={'/profile'}>
                <BsPerson className="text-3xl"  />
                <span className="text-sm">Profile</span>
            </Link>
          </div>
        </nav>
      </footer>
    </main>
  );
}
