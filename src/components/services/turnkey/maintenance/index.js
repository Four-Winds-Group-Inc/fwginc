import React, { Component } from 'react'

class Maintenance extends Component {
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
              <h2>MAINTENANCE TASKS</h2></div>
          </div>
          <button onClick={this.clickHandler}> &#8594; </button>
        </div>
        <div className={'card card-content' + toggleClass}>
          <div className='back-card-top'><h2>FEATURES</h2></div>
          <ul>
            <li>Identify all assets that will become part of the asset database.</li>
            <li>Develop asset lists with nameplate data information.</li>
            <li>Import asset data into the M-PET.NET database.</li>
            <li>Develop preventive maintenance procedures for all maintainable assets.</li>
            <li>Develop preventive maintenance schedules and link assets to tasks with frequencies.</li>
            <li>Level preventive maintenance schedules to ensure work is evenly distributed.</li>
            <li>Train users at all levels of interaction of M-PET.NET.</li>
            <li>Provide on-going support.</li>
          </ul>
          <button onClick={this.clickHandler}> &#8592; </button>
        </div>
      </div>
    )
  }
}

export default Maintenance