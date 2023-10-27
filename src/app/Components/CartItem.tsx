import Image from "next/image";
import Link from "next/link";
const CartItem = (props:any) => {
    const price = `${props.price}`;
  
    return (
      
      <>
      <li className="text-black flex flex-col md:flex-row gap-2  md:gap-10 items-center justify-center md:flex-wrap my-2 border-b-[1px] border-t-[1px] border-black  px-8 py-2 md:p-4" >
      <Link href={props.id} className="flex gap-2" >
        <Image src={props.image} alt="image" width={50} height={50} className="rounded-lg" />
        <div className="flex flex-col md:flex-row  md:gap-6 items-center justify-evenly m,md:flex-wrap">
          <h2 className=" text-sm md:text-xl "> Title:  {props.title}</h2>
          <div>
          <div className='flex '>
            <span className='text-sm md:text-xl'> Price: {price}</span>
            <span className='text-sm md:text-xl'>x{' '} {props.amount}</span>
          </div>
          </div>
          <span>Size : {props.size}</span>
        </div>
      </Link>
        <div className='flex gap-3'>
          <button onClick={props.onRemove} className=" bg-gray-300  px-1 text-sm md:text-xl rounded">−</button>
          <button onClick={props.onAdd} className="bg-gray-300 px-1 text-sm md:text-xl rounded" >+</button>
        </div>
      </li>
      </>
    );
  };
  
  export default CartItem;