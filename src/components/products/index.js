import React, { Component } from 'react'
import MpetNet from './m-pet-net'
import MpetWeb from './m-pet-web'

class Products extends Component {
  render() {
    return (
      <div className='position'>
        <div><MpetNet /></div>
        <div><MpetWeb /></div>
      </div>

    )
  }
}

export default Products