import React, { Component } from 'react'
import AboutTurkney from './about-turnkey'
import Maitenance from './maintenance'
import Management from './project-management'
import IT from './it-tasks'

class TurnKey extends Component {
  render() {
    return (
      <div>
        <h1 className='combined-header'>TURNKEY SERVICES</h1>
        <AboutTurkney />
        <Management />
        <IT />
        <Maitenance />
      </div>

    )
  }
}

export default TurnKey