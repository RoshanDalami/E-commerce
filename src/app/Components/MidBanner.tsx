import React from 'react'

import {BsCashCoin} from 'react-icons/bs'
import {AiOutlineFieldTime} from 'react-icons/ai'
import {MdMoneyOff} from 'react-icons/md'


export default function MidBanner() {
  return (
    <div className='bg-black h-14 text-white md:flex items-center justify-between px-10 hidden  '>
        <section className='flex items-center gap-4'>
            <MdMoneyOff className="text-4xl" />
            <h1 className='text-2xl'>Free delivery above........</h1>
        </section>
        <section className='flex items-center gap-4'>
                <BsCashCoin  className="text-4xl" />
                <h1 className='text-2xl'>COD for all products</h1>
        </section>
        <section className='flex items-center gap-4'>
                <AiOutlineFieldTime className="text-4xl" />
                <h1 className='text-2xl'>Products to customers in 48 hours</h1>
        </section>
      
    </div>
  )
}
