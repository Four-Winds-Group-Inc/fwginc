import React, { Component } from 'react'
import MpetNet from './m-pet-net'
import MpetWeb from './m-pet-web'

class Products extends Component {
  render() {
    return (
      <div>
        <MpetNet/>
        <MpetWeb />
      </div>

    )
  }
}

export default Products