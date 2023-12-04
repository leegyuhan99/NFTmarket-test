import { useAddress, ConnectWallet } from '@thirdweb-dev/react'
import React from 'react'
import { Box, Flex, Link, Heading, Text, Avatar } from '@chakra-ui/react'
import NextLink from 'next/link'

const Navbar = () => {
  const address = useAddress()
  return (
    <Box maxW={'1200px'} m={'auto'} py={'10px'} px={'40px'} bg={'pink'}>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Link as={NextLink} href="/">
          <Heading>Marketplace</Heading>
        </Link>

        {/* Added Flex to handle horizontal alignment */}
        <Flex direction={'row'}>
          <Link as={NextLink} href="/buy" mx={2.5}>
            <Text>Buy</Text>
          </Link>
          <Link as={NextLink} href="/sell" mx={2.5}>
            <Text fontSize={'1g'} as="b">
              Sell
            </Text>
          </Link>
        </Flex>

        <Flex direction={'row'} alignItems={'center'}>
          <ConnectWallet />
          {address && (
            <Link as={NextLink} href={`/profile/${address}`}>
              <Avatar src="https://bit.ly/broken-link" ml={'20px'} />
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
