import React, { Component } from 'react'
import { Box, Container, Heading, Button, ButtonGroup, Spinner, Center, Divider, UnorderedList, ListItem } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import HomeLayout from './layouts/HomeLayout'

class Divebars extends Component {
  constructor () {
    super()
    this.state = {
      divebar: []
    }
    this.getDivebars = this.getDivebars.bind(this)
    this.getDivebar = this.getDivebar.bind(this)
  }

  componentDidMount () {
    this.getDivebars()
  }

  async fetch (endpoint) {
    try {
      const response = await window.fetch(endpoint)
      return await response.json()
    } catch (error) {
      return console.log(error)
    }
  }

  getDivebars () {
    this.fetch('/api/divebars')
      .then(divebars => {
        if (divebars.length) {
          this.setState({divebars: divebars})
          divebars[0] && this.getDivebar(divebars[0].id)
        } else {
          this.setState({divebars: []})
        }
      })
  }

  getDivebar (id) {
    this.fetch(`api/divebars/${id}`)
      .then(divebar => this.setState({divebar: divebar}))
  }


  render () {
    const {divebars, divebar} = this.state

  
    return divebars
      ? <HomeLayout>
      <Box text>
        <Heading as='h2' icon textAlign='center' color='teal'>
        <StarIcon  />
          <br/>
            Divebars
        </Heading>
        {divebars && divebars.length
          ? <ButtonGroup fluid widths={divebars.length}>
            {Object.keys(divebars).map((key) => {
              return <Button active={divebar && divebar.id === divebars[key].id} fluid key={key} onClick={() => this.getDivebar(divebars[key].id)}>
                {divebars[key].title}
              </Button>
            })}
          </ButtonGroup>
          : <Container textAlign='center'>No divebars found.</Container>
        }
        <Divider section />
        {divebar &&
          <Container textAlign='center'>
            <Heading as='h2'>{divebar.title}</Heading>
            {divebar.description && <p>{divebar.description}</p>}
            {divebar.ratings &&
              <UnorderedList>
                {divebar.ratings.map((rating, i) => <ListItem key={i}>{rating.stars}</ListItem>)}
              </UnorderedList>
            }
            {divebar.stars && <p>{divebar.stars} </p>}
            {divebar.submitted_by && <Button basic size='tiny' color='teal'>Submitted by: {divebar.submitted_by}</Button>}
          </Container>
          
        }
      </Box>
      </HomeLayout>
      :
      <Box>
        <Center>
         <Spinner/>
        </Center>
      </Box>
  }
}

export default Divebars
