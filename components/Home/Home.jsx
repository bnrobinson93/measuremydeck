import {Box, Button, Heading, Text} from '@chakra-ui/react'
import * as React from 'react'
import {useRouter} from 'next/router'

const Home = () => {
  const router = useRouter()

  const routeToLogin = (e) => {
    e.preventDefault()
    router.push('/login')
  }

  return (
    <Box as="section">
      <Box
        maxW="2xl"
        mx="auto"
        px={{base: '6', lg: '8'}}
        py={{base: '16', sm: '20'}}
        textAlign="center"
      >
        <Heading
          as="h2"
          size="3xl"
          fontWeight="extrabold"
          letterSpacing="tight"
        >
          How do you measure?
        </Heading>
        <Text mt="4" fontSize="lg">
          Create and maintain all of your decks. With built in integration with
          Magic the Gathering databases, our service will help you store and
          track every card and which deck its in.
        </Text>
        <Button
          mt="8"
          as="a"
          href="#"
          size="lg"
          colorScheme="blue"
          fontWeight="bold"
          onClick={routeToLogin}
        >
          Start Building
        </Button>
      </Box>
    </Box>
  )
}

export default Home
