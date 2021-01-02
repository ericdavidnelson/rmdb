import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Divebars from './Divebars';
import NotFound from './NotFound';
import SupportForm from './components/supportForm'

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}


class App extends Component {
  render () {
    return (
     <ChakraProvider theme={extendTheme({colors})}>     
      <Router>
        <Switch>
          <Route path='/' exact component={Divebars} />
          <Route path='/form' exact component={SupportForm} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ChakraProvider>
    )
  }
}

export default App