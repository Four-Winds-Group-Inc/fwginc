import React, { Component } from 'react'
import MpetNet from './m-pet-net'
import MpetWeb from './m-pet-web'
import './index.scss'

class Products extends Component {
  render() {
    return (
      <div className='card-container'>
        <div><MpetNet /></div>
        <div><MpetWeb /></div>
      </div>

    )
  }
}

export default Products