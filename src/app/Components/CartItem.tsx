import Image from "next/image";

const CartItem = (props:any) => {
    const price = `${props.price}`;
  
    return (
      <li className="text-black flex gap-2  md:gap-10 items-center justify-center md:flex-wrap my-2 border-[1px] border-black rounded px-8 py-2 md:p-4" >
        <Image src={props.image} alt="image" width={50} height={50} className="rounded-lg" />
        <div className="flex md:gap-6 items-center justify-evenly m,md:flex-wrap">
          <h2 className=" text-sm md:text-3xl">{props.title}</h2>
          <div className='flex gap-3'>
            <span className='text-sm md:text-xl'>{price}</span>
            <span className='text-sm md:text-xl'>x{' '} {props.amount}</span>
          </div>
        </div>
        <div className='flex gap-3'>
          <button onClick={props.onRemove} className="border-[1px] border-black px-1 text-sm md:text-xl rounded">−</button>
          <button onClick={props.onAdd} className="border-[1px] border-black px-1 text-sm md:text-xl rounded" >+</button>
        </div>
      </li>
    );
  };
  
  export default CartItem;