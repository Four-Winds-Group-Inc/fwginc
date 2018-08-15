import React, { Component } from 'react'
import Staff from './staff'
import History from './history'

class Company extends Component {
  render() {
    return (
      <div>
        <Staff />
        <History />
      </div>

    )
  }
}

export default Company