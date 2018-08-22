import React, { Component } from 'react'
import fwgLogo from '../../assets/fwglogo_b.svg'
import './index.scss'

class Header extends Component {
  render() {
    return (
      <div>
        <a href='/'><img src={fwgLogo}/></a>
      </div>

    )
  }
}

export default Header