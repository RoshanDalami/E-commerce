
import Image from 'next/image'
import Link from 'next/link'

export default function ImageCard({image}:any) {
  return (
    <Link href={'/comingsoon'} >
    <Image src={image} alt={''} className='rounded-lg shadow-md mx-2 px-1 md:px-0 hover:translate-y-3 transition ease-in-out duration-300 ' width={200} height={200}   />
    </Link>
    
  )
}
