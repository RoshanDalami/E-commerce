import React from 'react'
import Link from 'next/link'
import CategoriesCard from '../Components/CategoriesCard'
export default function Categories() {
  return (
    <main className='min-h-screen my-10  '>
      <div className='px-8 py-5'>

      <h1 className='text-4xl font-bold px-4 py-3 w-fit bg-black text-white rounded-full' >Categories</h1>
      </div>
        <div className='flex items-center justify-center' >
            <CategoriesCard/>
        </div>
    </main>
  )
}
