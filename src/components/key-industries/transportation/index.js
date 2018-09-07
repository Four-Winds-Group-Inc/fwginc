import React, { Component } from 'react'

class Transportation extends Component {
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
            <div className='card-top'><h1>TRANSPORTATION</h1></div>
          </div>
          <button onClick={this.clickHandler}> &#8594; </button>
        </div>
        <div className={'card card-content' + toggleClass}>
          <div className='back-card-top'><h2>FEATURES</h2></div>
          <ul>
            <li>
              <h2>GPS 3 Axis Location Assignment</h2>
              <p>This allows for both point and elevation location for a job or asset. The system currently will display this location on a map.</p>
            </li>
            <li>
              <h2>Mile Post + Highway Location</h2>
              <p>On the job, the system will allow the user to select the highway on which the maintenance activity took place, and the mile marker. For split multi-lane highways, the user can select increasing or decreasing to indicate the side of the highway.</p>
            </li>
            <li>
              <h2>Work Operation Codes</h2>
              <p>These codes are user-defined and allow the user to classify each code by department and unit of measure. The job allows one work operation code per step in addition to both estimated and actual units of production accomplished.</p>
            </li>
            <li>
              <h2>Daily Project Diary</h2>
              <p>This module is used by both the construction engineering and inspection staff to record their daily project inspections. Along with the details for the contractor(s) and equipment on site, this module records photos from the site and enforces best management practices as applicable. The project diary also integrates into the time card entry process.</p>
            </li>
            <li>
              <h2>Daily Time Card</h2>
              <p>Integrated into specific jobs, of which several may be accomplished in a single day, is the time card entry. This function allows the maintenance supervisor to record all activities for their crew on a daily basis, with details as to where they worked, what was accomplished, and what resources were utilized. Also features financial and payroll export options.</p>
            </li>
            <li>
              <span>Highway Section Cost Codes and function codes for all DOT Maintenance Activities.</span>
            </li>
          </ul>
          <button onClick={this.clickHandler}> &#8592; </button>
        </div>
      </div>
    )
  }
}

export default Transportation