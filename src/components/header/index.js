import React, { Component } from 'react'
import fwgLogoLong from '../../assets/fwg_logo_l.png'
import './index.scss'

class Header extends Component {
  render() {
    return (
      <div className='headerClass'>
        <header>
          <a href='/'><img src={fwgLogoLong}/></a>
        </header>
      </div>

    )
  }
}

export default Header