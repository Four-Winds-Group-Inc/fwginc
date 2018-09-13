import React, { Component } from 'react'
import MpetNet from './m-pet-net'
import MpetWeb from './m-pet-web'

class Products extends Component {
  constructor(props){
    super(props)
    this.state = {
      toggle: false,
    }
  }
  clickHandler = () => {
    this.setState( { toggle: !this.state.toggle } )
  }
  render() {
    let toggleClass = this.state.toggle ? 'toggle' : ''
    console.log(toggleClass)
    return (
      <div className='card-container'>
        <div className={'product-one' + toggleClass}><MpetNet /></div>
        <button button onClick={this.clickHandler} className='arrow-down'> &#8595; </button>
        <div className={'product-two' + toggleClass}><MpetWeb /></div>
      </div>

    )
  }
}

export default Products