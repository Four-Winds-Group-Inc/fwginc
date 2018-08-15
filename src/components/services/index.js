import React, { Component } from 'react'
import Hosted from './hosted'
import Programming from './programming'

class Services extends Component {
  render() {
    return (
      <div>
        <Hosted />
        <Programming />
      </div>
    )
  }
}

export default Services