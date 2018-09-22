import React, { Component } from 'react'

class ProjectManagement extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false,
    }
  }
  clickHandler = () => {
    this.setState( { open: !this.state.open } )
  }
  render() {
    let toggleClass = this.state.open ? 'open' : ''
    return (
      <div className='JSX-WRAP'>
        <div className={'initial card' + toggleClass}>
          <div className='card-container'>
            <div className='turnkey-card-top'>
              <h2>PROJECT MANAGEMENT</h2></div>
          </div>
          <button onClick={this.clickHandler}> &#8594; </button>
        </div>
        <div className={'card card-content' + toggleClass}>
          <div className='back-card-top'><h2>FEATURES</h2></div>
          <ul>
            <li>Single Project Manager assignment</li>
            <li>Track Scope of Work, Schedule of Implementation and Budget</li>
            <li>Lead Client status meetings and discussions where gathered Data is presented and decisions are required by the Client for subsequent implementation steps.</li>
          </ul>
          <button onClick={this.clickHandler}> &#8592; </button>
        </div>
      </div>
    )
  }
}

export default ProjectManagement