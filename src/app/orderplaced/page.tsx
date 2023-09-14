'use client';

import { useRouter } from "next/navigation";
import { Box, Heading, Text } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
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

    return (
        <Box textAlign="center" py={10} px={6}>
          <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
          <Heading as="h2" size="xl" mt={6} mb={2}>
            Order placed successfully
          </Heading>
          <Text color={'gray.500'}>
            We will ship your order shortly.
          </Text>
        </Box>
      )
}