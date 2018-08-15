import React, { Component } from 'react'
import Hosted from './hosted'
import Programming from './programming'
import Turnkey from './turnkey'

class Services extends Component {
  render() {
    return (
      <div>
        <Hosted />
        <Programming />
        <Turnkey />
      </div>
    )
  }
}

export default Services