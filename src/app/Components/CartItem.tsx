import Image from "next/image";

const CartItem = (props:any) => {
    const price = `${props.price.toFixed(2)}`;
  
    return (
      <li className="text-black flex gap-10 items-center justify-center flex-wrap my-2 border-[1px] border-black rounded p-4" >
        <Image src={props.image} alt="image" width={100} height={100} className="rounded-lg" />
        <div className="flex gap-6 items-center justify-evenly flex-wrap">
          <h2 className="text-3xl">{props.title}</h2>
          <div className='flex gap-3'>
            <span className='text-xl'>{price}</span>
            <span className='text-xl'>x{' '} {props.amount}</span>
          </div>
        </div>
        <div className='flex gap-3'>
          <button onClick={props.onRemove} className="border-[1px] border-black px-1 text-xl rounded">−</button>
          <button onClick={props.onAdd} className="border-[1px] border-black px-1 text-xl rounded" >+</button>
        </div>
      </li>
    );
  };
  
  export default CartItem;