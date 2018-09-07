import React, { Component } from 'react'
import Hosted from './hosted'
import Programming from './programming'

class Services extends Component {
  render() {
    return (
      <div>
        <div><Hosted /></div>
        <div><Programming /></div>
      </div>
    )
  }
}

export default Services