import React, { Component } from 'react'

class Hosted extends Component {
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
        <div className={'hosted card' + toggleClass}>
          <div className='hosted card-container'>
            <div className='hosted card-top'><h1>HOSTED SOLUTIONS</h1></div>
            <p>We've got you covered.</p>
          </div>
          <button onClick={this.clickHandler}> &#8594; </button>
        </div>
        <div className={'hosted card card-content' + toggleClass}>
          <p>Think that setting up and configuring a server just to be able to use our software is too much of a hassle?</p>
          <p className='let-us'>Let us host it for you!</p>
          <p>With our high-end servers, we can handle all of your data safely and remotely. Have access to your data whenever you want, 24 hours a day, 7 days a week, 365 days a year. With business class security and automated daily backups, you can rest assured that your data is safe with us.</p>
          <ul>
            <li><span>KEY FEATURES</span></li>
            <li>Regular Backups To External Devices</li>
            <li>Business-Class Security To Protect Your Data</li>
            <li>Access Your Data Anytime You Want</li>
            <li>Access Your Data Wherever You Are</li>
            <li>In-House IT Team</li>
          </ul>
          <button onClick={this.clickHandler}> &#8592; </button>
        </div>
      </div>
    )
  }
}

export default Hosted