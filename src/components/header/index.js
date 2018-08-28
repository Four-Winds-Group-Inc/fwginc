import React, { Component } from 'react'
import fwgLogoLong from '../../assets/fwg_logo_l.png'
import './index.scss'

class Header extends Component {
  render() {
    return (
      <header>
        <a href='/'><img src={fwgLogoLong}/></a>
      </header>

    )
  }
}

export default Header