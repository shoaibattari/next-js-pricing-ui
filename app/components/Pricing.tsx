import { Box, Flex, Text, Heading, Button } from "@chakra-ui/react"

import React from 'react'

export default function Pricing() {
    return (
        <Box>
            <Flex>
                <Box bgColor="#F0EAFB" p="60px" textAlign="center">
                    <Text fontWeight="bold" fontSize="24px">Premium PRO</Text>
                    <Heading as="h3" fontSize="60px" mt="16px">$329</Heading>
                    <Text fontWeight="500px" fontSize="18px"  mt="8px">billed just once</Text>
                    <Button color="171923" colorScheme="purple" borderRadius="8px" size="lg" width="282px" mt="24px"> Get Started</Button>
                </Box>
            </Flex>
        </Box>
    )

}
