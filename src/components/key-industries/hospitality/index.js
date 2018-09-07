import React, { Component } from 'react'

class Hospitality extends Component {
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
            <div className='card-top'><h1>HOSPITALITY</h1></div>
          </div>
          <button onClick={this.clickHandler}> &#8594; </button>
        </div>
        <div className={'card card-content' + toggleClass}>
          <div className='back-card-top'><h2>FEATURES</h2></div>
          <p>We can help you achieve next-level maintenance management by providing both software and services geared to deliver the right data to help you better gain focus and control of your operations.</p>
          <p>Clients using our system, such as Hilton Hotels, have been able to increase their Service and Loyalty Tracker (SALT) score which is the metric used to measure customer approval and satisfaction. Using M-PET.NET, our clients may quickly enter job requests, track progress, and review historical jobs to mine data and predict trends. Job requests can be entered either through the full desktop application or remotely via the hosted website.</p>
          <p>We add value by helping you gain focus and control in the following:</p>
          <ul>
            <li>Accurate asset list</li>
            <li>Documented and solidified project management processes</li>
            <li>Generation of project management and corrective jobs</li>
            <li>Control and documentation of corrective work through open prioritized lists</li>
            <li>Review and analysis of completed project management and corrective work</li>
            <li>Parts inventory</li>
            <li>Searchable data using a varity of modern methodologies</li>
          </ul>
          <button onClick={this.clickHandler}> &#8592; </button>
        </div>
      </div>
    )
  }
}

export default Hospitality