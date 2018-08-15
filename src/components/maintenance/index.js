import React, { Component } from 'react'

class Maintenance extends Component {
  render() {
    return (
      <div className='div-container'>
        <h1>Maintenance Information Tasks</h1>
        <ul>
          <li>Identify all assets that will become part of the asset database</li>
          <li>Develop asset lists with nameplate data information</li>
          <li>Import asset data into the M-PET.NET database</li>
          <li>Develop preventive maintenance procedures for all maintainable assets</li>
          <li>Develop preventive maintenance schedules and link assets to tasks with frequencies</li>
          <li>Level preventive maintenance schedules to ensure work is evenly distributed</li>
          <li>Train users at all levels of interaction of M-PET.NET</li>
          <li>Provide on-going support</li>
        </ul>
      </div>
    )
  }
}

export default Maintenance