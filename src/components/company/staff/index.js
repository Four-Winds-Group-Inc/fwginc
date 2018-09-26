import React, { Component } from 'react'

class Staff extends Component {
  render() {
    return (
      <div className='JSX-WRAP'>
        <div className='staff-card-container'>
          <div className='staff-card-top'><h1>KEY STAFF</h1></div>
          <div className='staff-card-content'>
            <h3>TOM THOMPSON</h3>
            <h4>NW Region</h4>
            <p><a className='contact-c' href="mailto:thompsont@fwginc.com" data-rel="external">thompsont@fwginc.com</a></p>
            <p>619.921.5846</p></div>
          <div className='staff-card-content'>
            <h3>JON MANGERICH</h3>
            <h4>Corporate</h4>
            <p><a className='contact-c' href="mailto:mangerichj@fwginc.com" data-rel="external">mangerichj@fwginc.com</a></p>
            <p>858.483.7654</p>
          </div>
          <div className='staff-card-content'>
            <h3>TOM HAMM</h3>
            <h4>Corporate</h4>
            <p><a className='contact-c' href="mailto:hammt@fwginc.com" data-rel="external">hammt@fwginc.com</a></p>
            <p>619.921-5845</p>
          </div>
          <div className='staff-card-content'>
            <h3>CHESTER WEST</h3>
            <h4>Software Engineer</h4>
            {/* <p><a className='contact-c' href="mailto:PLACEHOLDER@fwginc.com" data-rel="external">PLACEHOLDER@fwginc.com</a></p> */}
            <p>206.515.3457</p>
          </div>
        </div>
      </div>

    )
  }
}

export default Staff