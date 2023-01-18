import { Box, Icon, Flex, Text, Heading, Button, HStack, StackProps, Stack } from "@chakra-ui/react"

import React from 'react'
import { CheckIcon } from "../icons/icons"

export const Listitem = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
        <HStack as='li' spacing='20px' {...rest}>
            <Icon as={CheckIcon} w='22px' h='22px' />
            <text>{children}</text>
        </HStack>
    )
}

export default function Pricing() {
    return (
        <Box mx='2' as='section'>
    <Box 
        display='flex'
        flexDirection={['column', 'column', 'row']}
        maxW='994px'
        margin='auto'
        mt='-160px'
        borderRadius='12px'
        overflow='hidden'
        boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
    >
       
            <Flex >
                <Box bgColor="#F0EAFB" p="60px" textAlign="center">
                    <Text fontWeight="bold" fontSize="24px">Premium PRO</Text>
                    <Heading as="h3" fontSize="60px" mt="16px">$329</Heading>
                    <Text fontWeight="500px" fontSize="18px" mt="8px">billed just once</Text>
                    <Button color="white" colorScheme="purple" borderRadius="8px" size="lg" width="282px" mt="24px"> Get Started</Button>
                </Box>
            </Flex>
       
    
        <Box
            maxW="994px" height={['425px','350px','300px']}
            p='60px' fontSize="16px" bg="white" >
            <Text>
                Access these features when you get this pricing package for your business.
            </Text>
            <Stack as="ul" spacing='20px' pt='24px'>
                <Listitem>International calling and messaging API</Listitem>
                <Listitem>Additional phone numbers</Listitem>
                <Listitem>Automated messages via Zapier</Listitem>
                <Listitem>24/7 support and consulting</Listitem>
            </Stack>
        </Box>
    </Box>
    </Box>



    )

}
