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
          <span>Let us host it for you!</span>
          <p>With our high-end servers, we can handle all of your data safely and remotely. Have access to your data whenever you want, 24 hours a day, 7 days a week, 365 days a year. With business class security and automated daily backups, you can rest assured that your data is safe with us.</p>
          <h2>KEY FEATURES</h2>
          <ul>
            <li>Regular backups to external devices.</li>
            <li>Business-class security to protect your data.</li>
            <li>Access your data anytime you want.</li>
            <li>Access your data wherever you are.</li>
            <li>In-house IT team.</li>
          </ul>
          <button onClick={this.clickHandler}> &#8592; </button>
        </div>
      </div>
    )
  }
}

export default Hosted