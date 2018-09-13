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
        <div className={'product-two' + toggleClass}><MpetWeb /></div>
        <button button onClick={this.clickHandler} className={'arrow-down' + toggleClass}> &#8595; </button>
        <button button onClick={this.clickHandler} className={'arrow-up' + toggleClass}> &#8593; </button>
      </div>

    )
  }
}

export default Products