import React, { Component } from 'react'
import fwgLogo from '../../assets/fwg_logo_1.svg'
import './index.scss'

class Header extends Component {
  render() {
    return (
      <header>
        <a href='/'><img src={fwgLogo}/></a>
      </header>

    )
  }
}

export default Header