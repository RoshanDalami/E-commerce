'use client';

import { useRouter } from "next/navigation";

import Link from "next/link"
import { useEffect } from "react";

export default function OrderPlaced(){
    const router = useRouter();
    const onOrderPlaced=()=>{
        setTimeout(()=>{
            router.push('/')
        },1000)
    }

    useEffect(()=>{
        onOrderPlaced();
    },[])

    return(
        <div className="flex items-center justify-center">
            <div>
                <h1 className="text-2xl">Your order has been placed . Thank you for shopping with Ugly </h1>
            </div>
        </div>
    )
}