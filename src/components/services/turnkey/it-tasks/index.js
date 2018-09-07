import React, { Component } from 'react'

class ItTasks extends Component {
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
              <h1>IT TASKS</h1></div>
          </div>
          <button onClick={this.clickHandler}> &#8594; </button>
        </div>
        <div className={'card card-content' + toggleClass}>
          <div className='back-card-top'><h2>FEATURES</h2></div>
          <ul>
            <li>Evaluate and recommend network, workstation and server requirements.</li>
            <li>Purchase and install any additional hardware and software.</li>
            <li>Configure existing workstations for the database and web server.</li>
            <li>Create custom reports and provide data analysis.</li>
          </ul>
          <button onClick={this.clickHandler}> &#8592; </button>
        </div>
      </div>
    )
  }
}

export default ItTasks