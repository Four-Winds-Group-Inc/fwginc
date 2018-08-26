import React, { Component } from 'react'
import landingImage from '../../assets/server_room.jpg'
import './index.scss'

class Landing extends Component {
  render() {
    return (
      <div>
        <a href='/'><img className='hero_1' src={landingImage} /></a>
      </div>
    )
  }
}

export default Landing