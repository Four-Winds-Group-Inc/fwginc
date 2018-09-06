import React, { Component } from 'react'
import Hosted from './hosted'
import Programming from './programming'

class Services extends Component {
  render() {
    return (
      <div>
        <div className='test'><Hosted /></div>
        <div className='test'><Programming /></div>
      </div>
    )
  }
}

export default Services