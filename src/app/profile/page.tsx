'use client'

import Image from 'next/image';
import {useSession , signIn , signOut} from 'next-auth/react'

export default function Profile(){
    const {data:session} = useSession();
    if(!session || !session.user){
        return(
            <>
            <button className='bg-blue-600 px-4 py-2 rounded-lg' onClick={()=>signIn()}>Sign in</button>
            </>
        )
    }
    console.log(session)
    return(
        <div>
            {
                <>
                <Image src={session?.user?.image || ''} alt='' height={200} width={200} />
                <h1>{session?.user?.name}</h1>
                </>
            }
            <button className='bg-blue-600 px-4 py-2 rounded-lg' onClick={()=>{signOut()}} >Sign out</button>
        </div>
    )
}