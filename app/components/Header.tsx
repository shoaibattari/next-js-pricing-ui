import React from 'react'
import { Box, Heading, Text } from "@chakra-ui/react"

export default function Header() {
    return (
        <Box 
        as="section" 
        color="#F7FAFC" 
        bg="#6B46C1" 
        pt="90px" 
        pb="198px" 
        textAlign="center">
            <Heading fontWeight='800' fontSize="48px" >Simple pricing for your business</Heading>
            <Text fontWeight="500" fontSize="24px">Plans that are carefully crafted to suit your business.</Text>
        </Box>

    )
}
