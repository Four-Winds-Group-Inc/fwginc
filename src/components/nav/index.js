import React, { Component } from 'react'
import './index.scss'

let initialArray = [
  ['Products','M-PET.net','M-PET.web'],
  ['Services','M-PET Hosted','Custom Programming'],
  ['Turnkey','About', 'Project Management', 'IT Tasks', 'Maintenance'],
  ['KeyIndustries','Transportation', 'Hospitality'],
  ['Company','Team', 'History'],
].map((item, i) => <ul key={i}>{item}</ul>)

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialState: initialArray,
    }
  }

  render() {

    return (
      <nav>
        {this.state.initialState}
      </nav>
    )
  }
}

export default Nav