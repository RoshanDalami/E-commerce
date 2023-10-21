
import Image from 'next/image'
import Link from 'next/link'

export default function ImageCard({image}:any) {
  return (
    <Link href={'/comingsoon'} >
    <Image src={image} alt={''} className='rounded-md shadow-md px-2 md:px-0 ' width={200} height={200}   />
    </Link>
    
  )
}
