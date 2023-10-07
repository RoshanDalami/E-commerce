import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { nanoid } from 'nanoid';

//images
import croptop from '../../../public/categories/crop-top.jpg'
import clooerman from '../../../public/categories/clooerman.png'
import hoodies from '../../../public/categories/hoodie.png'
import zipHoodie from '../../../public/categories/zipperHoodie.png'
import jooger from '../../../public/categories/jooger.png'
import halfshirt from '../../../public/categories/halftshirt.png'
import fullsleeveman from '../../../public/categories/fullsleeveman.png'
import sweatShirt from '../../../public/categories/sweatshirt.png'
import shorts from '../../../public/categories/shorts.png'
import roundedneck from '../../../public/categories/roundneck.png'
import oversize from '../../../public/reduced/hero_image_3.jpg'


const Data = [
    {
        id:nanoid(),
        title:'Hoodies',
        image: hoodies,
        link:'/comingsoon',
    },
    {
        id:nanoid(),
        title:'Sweat Shirts',
        image: sweatShirt,
        link:'/comingsoon',
    },
    {
        id:nanoid(),
        title:'Shorts',
        image: shorts,
        link:'/comingsoon',
    },
    {
        id:nanoid(),
        title:'Over Sized T-shirts',
        image: oversize,
        link:'/tshirts',
    },
    {
        id:nanoid(),
        title:'Hoodies',
        image: hoodies,
        link:'/comingsoon',
    },
    {
        id:nanoid(),
        title:'Sweat Shirts',
        image: sweatShirt,
        link:'/comingsoon',
    },
    {
        id:nanoid(),
        title:'Shorts',
        image: shorts,
        link:'/comingsoon',
    },
    {
        id:nanoid(),
        title:'Over Sized T-shirts',
        image: oversize,
        link:'/tshirts',
    },
]

export default function CategoriesCard() {
  return (

    <main>
    </main>
  )
}
