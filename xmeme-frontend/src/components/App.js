import React from 'react'
import { Layout } from './Layout'
import { Router } from '@reach/router'
import ThemeProvider from '../providers/ThemeProvider'
import { Wrapper } from './style'


import Header from './header'
import HomePage from './HomePage'

const App = () => {
  return (
    <>
    <ThemeProvider>
      <Layout />
      <Wrapper>
        <Header />
        <Router>
          <HomePage path='/' />
        </Router>
      </Wrapper>
    </ThemeProvider>
    </>
  );
}

export default App;
