import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>Services
            <ul>
              <li>M-PET Hosted</li>
              <li>Turnkey</li>
              <li>Custom Programming</li>
            </ul>
          </li>
          <li>Products
            <ul>
              <li>M-PET.NET</li>
              <li>M-PET.WEB</li>
            </ul>
          </li>
          <li>Key Industries
            <ul>
              <li>Transportation</li>
              <li>Hospitality</li>
            </ul>
          </li>
          <li>Company
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