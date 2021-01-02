import React, { Component } from 'react'
import { Container, Button, Heading, Image, Box, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'

class NotFound extends Component {
  render () {
    return (
    <HomeLayout>
    <Box textAlign='center'>
      <Heading as="h2">404: Not found</Heading>
      <Center><Box boxSize="sm" ><Image src='/icons/beer-empty.svg' alt="test"/></Box></Center>
      <br/>
      <Button as={Link} to='/'>Back to home</Button>
    </Box>
    </HomeLayout>    
  )
  }
}

export default NotFound