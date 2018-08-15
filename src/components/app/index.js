import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Nav from '../nav'
import Landing from '../landing'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Landing}/>
          </div>
        </BrowserRouter>
      </div>

    )
  }
}

export default App