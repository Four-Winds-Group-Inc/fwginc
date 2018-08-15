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
    console.log(this.state)
  }

  render() {
    let toggleClass = this.state.clicked ? 'clicked' : ''
    return (
      <nav>
        <ul>
          <li className={toggleClass} onClick={this.clickTracker}>Services
            <ul>
              <li>M-PET Hosted</li>
              <li>Turnkey</li>
              <li>Custom Programming</li>
            </ul>
          </li>
          <li className={toggleClass} onClick={this.clickTracker}>Products
            <ul>
              <li>M-PET.NET</li>
              <li>M-PET.WEB</li>
            </ul>
          </li>
          <li className={toggleClass} onClick={this.clickTracker}>Key Industries
            <ul>
              <li>Transportation</li>
              <li>Hospitality</li>
            </ul>
          </li>
          <li className={toggleClass} onClick={this.clickTracker}>Company
            <ul>
              <li>Team</li>
              <li>Partners</li>
            </ul>
          </li>
          <li>History</li>
        </ul>
      </nav>
    )
  }
}

export default Nav