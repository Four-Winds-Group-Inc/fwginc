import React, { Component } from 'react'
import Staff from './staff'
import History from './history'

class Company extends Component {
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
    return (
      <div>
        <div className={'tab-one' + toggleClass}><Staff /></div>
        <div className={'tab-two' + toggleClass}><History /></div>
        <button button onClick={this.clickHandler} className={'arrow-down' + toggleClass}> &#8595; </button>
        <button button onClick={this.clickHandler} className={'arrow-up' + toggleClass}> &#8593; </button>
      </div>

    )
  }
}

export default Company