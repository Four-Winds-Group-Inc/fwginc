import React, { Component } from 'react'
import './index.scss'

class Nav extends Component {

  clickTracker = (e) => {
    e.preventDefault()
    let activeClass = document.querySelector('.active')
    if(activeClass)
      activeClass.classList.remove('active')
    if(!activeClass)
      e.target.classList.toggle('active')
  }

  render() {

    return (
      <nav>
        <li className='' onClick={this.clickTracker}>Services</li>
        <ul>
          <a href='/services'><li>M-PET Hosted</li></a>
          <a href='/services'><li>Custom Programming</li></a>
        </ul>
        <li className='' onClick={this.clickTracker}>Turnkey</li>
        <ul>
          <a href='/services/turnkey'><li>About</li></a>
          <a href='/services/turnkey'><li>Project Management</li></a>
          <a href='/services/turnkey'><li>IT Tasks</li></a>
          <a href='/services/turnkey'><li>Maintenance</li></a>
        </ul>
        <li className='' onClick={this.clickTracker}>Products</li>
        <ul>
          <a href='/products'><li>M-PET.NET</li></a>
          <a href='/products'><li>M-PET.WEB</li></a>
        </ul>
        <li className='' onClick={this.clickTracker}>Key Industries</li>
        <ul>
          <a href='/key-industries'><li>Transportation</li></a>
          <a href='/key-industries'><li>Hospitality</li></a>
        </ul>
        <li className='' onClick={this.clickTracker}>Company</li>
        <ul>
          <a href='/company'><li>Team</li></a>
          <a href='/company'><li>History</li></a>
          <a href='/company'><li>Partners</li></a>
        </ul>
      </nav>
    )
  }
}

export default Nav