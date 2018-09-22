import React, { Component } from 'react'
import Staff from './staff'
import History from './history'

class Company extends Component {
  render() {
    return (
      <div>
        <div><Staff /></div>
        <div><History /></div>
      </div>

    )
  }
}

export default Company