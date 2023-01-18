import React from 'react'
import { Box, Heading, Text } from "@chakra-ui/react"

export default function Header() {
    return (
        <Box
            as="section"
            color="gray.50"
            bg="#6B46C1"
            pt="90px"
            pl='5px'
            pb="198px"
            textAlign={['left', "left", "center"]}>
            <Heading fontWeight='extrabold' fontSize={['3xl', "3xl", '5xl']}>
                Simple pricing for your business</Heading>
            <Text fontSize={['lg', 'lg', '2xl']} pt='4'>Plans that are carefully crafted to suit your business.</Text>
        </Box>

    )
}
