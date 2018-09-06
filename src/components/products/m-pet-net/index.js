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
        <div className={'initial card' + toggleClass}>
          <div className='card-container'>
            <h1>M-PET.NET</h1>
            <p>Maintenance Productivity Enhancement Tool designed for superior performance in every environment from manufacturing to facilities and municipality environments.</p>
          </div>
          <button onClick={this.clickHandler}> &#8594; </button>
        </div>
        <div className={'card card-content' + toggleClass}>
          <h2>Features:</h2>
          <ul>
            <li>Assets — Create, modify, and track any and all of your business's assets.</li>
            <li>Personnel — Track all of your personnel through one easy and concise screen.</li>
            <li>Preventative Maintenance — One of the biggest areas of focus of any maintenance division. A well orchestrated and followed preventative maintenance plan is invaluable down the road, saving work hours, materials, and money.</li>
            <li>Jobs — Handle anything related to a particular Job all on one, easy to follow screen. Track and update Jobs real-time, as work is completed on them.</li>
            <li>Materials / Parts — Stay on top of needed spares or material to plan and complete jobs.</li>
            <li>Production — Keep track of everything from efficiency and downtime to repair time and breakdown response time quickly and easily.</li>
            <li>Reports — Print reports directly from M-PET.</li>
            <li>Schedule — Get a detailed overview of current jobs using our calendar scheduler.</li>
          </ul>
          <button onClick={this.clickHandler}> &#8592; </button>
        </div>
      </div>

    )
  }
}

export default MpetNet