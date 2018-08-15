import React, { Component } from 'react'

class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {
      clicked: false,
    }
  }

  clickTracker = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    let toggleClass = this.state.clicked ? 'clicked' : ''
    return (
      <nav>
        <ul>
          <li className={toggleClass} onClick={this.clickTracker}>Services
            <ul>
              <a href='/services'><li>M-PET Hosted</li></a>
              <a href='/services'><li>Turnkey</li></a>
              <a href='/services'><li>Custom Programming</li></a>
            </ul>
          </li>
          <li className={toggleClass} onClick={this.clickTracker}>Products
            <ul>
              <a href='/products'><li>M-PET.NET</li></a>
              <a href='/products'><li>M-PET.WEB</li></a>
            </ul>
          </li>
          <li className={toggleClass} onClick={this.clickTracker}>Key Industries
            <ul>
              <a href='/key-industries'><li>Transportation</li></a>
              <a href='/key-industries'><li>Hospitality</li></a>
            </ul>
          </li>
          <li className={toggleClass} onClick={this.clickTracker}>Company
            <ul>
              <a href='/company'><li>Team</li></a>
              <a href='/company'><li>Partners</li></a>
              <a href='/company'><li>History</li></a>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav