import React, { Component } from 'react'

class Transportation extends Component {
  render() {
    return (
      <div className='div-container'>
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
            <h2>Highway Section Cost Codes</h2>
          </li>
        </ul>
      </div>
    )
  }
}

export default Transportation