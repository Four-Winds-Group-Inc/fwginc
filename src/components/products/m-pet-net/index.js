import React, {Component} from 'react'

class MpetNet extends Component {
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
        <div className={'card' + toggleClass}>
          <div className='card-container'>
            <div className='card-top'><h1>M-PET.NET</h1></div>
            <p>Maintenance Productivity Enhancement Tool designed for superior performance in every environment from manufacturing to facilities and municipality environments.</p>
          </div>
          <button onClick={this.clickHandler}> &#8594; </button>
        </div>
        <div className={'card card-content' + toggleClass}>
          <div className='back-card-top'><h2>FEATURES</h2></div>
          <ul>
            <li><span>Assets</span> — Create, modify, and track any and all of your business's assets.</li>
            <li><span>Personnel</span> — Track all of your personnel through one easy and concise screen.</li>
            <li><span>Preventative Maintenance</span> — One of the biggest areas of focus of any maintenance division. A well orchestrated and followed preventative maintenance plan is invaluable down the road, saving work hours, materials, and money.</li>
            <li><span>Jobs</span> — Handle anything related to a particular Job all on one, easy to follow screen. Track and update Jobs real-time, as work is completed on them.</li>
            <li><span>Materials / Parts</span> — Stay on top of needed spares or material to plan and complete jobs.</li>
            <li><span>Production</span> — Keep track of everything from efficiency and downtime to repair time and breakdown response time quickly and easily.</li>
            <li><span>Reports</span> — Print reports directly from M-PET.</li>
            <li><span>Schedule</span> — Get a detailed overview of current jobs using our calendar scheduler.</li>
          </ul>
          <button onClick={this.clickHandler}> &#8592; </button>
        </div>
      </div>

    )
  }
}

export default MpetNet