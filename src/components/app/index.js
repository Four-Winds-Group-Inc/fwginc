import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from '../header'
import Nav from '../nav'
import Landing from '../landing'
import Products from '../products'
import Services from '../services'
import Company from '../company'
import KeyIndustries from '../key-industries'
import TurnKey from '../services/turnkey'
import Hamburger from '../hamburger'
import '../../styles/main.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hamburger />
        <Nav />
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Landing} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/company' component={Company} />
            <Route exact path='/key-industries' component={KeyIndustries} />
            <Route exact path='/services/turnkey' component={TurnKey} />
          </div>
        </BrowserRouter>
      </div>

    )
  }
}

export default App