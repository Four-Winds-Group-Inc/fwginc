import React, { Component } from 'react'
import './index.scss'

let initialArray = [
  ['Products','M-PET.NET','M-PET.WEB'],
  ['Services','M-PET Hosted','Custom Programming'],
  ['Turnkey','About', 'Project Management', 'IT Tasks', 'Maintenance'],
  ['Key Industries','Transportation', 'Hospitality'],
  ['Company','Team', 'History'],
]

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialState: initialArray,
    }
  }

  componentWillMount() {
    let newStateArray = []
    for (let i = 0; i < initialArray.length; i++ ) {
      for ( let j = 0; j < initialArray[ i ].length; j++ ) {
        let newState = initialArray[ i ][ j ]
        if ( j === 0 ) {
          newStateArray.push( <ul>{newState}</ul> )
        } else {
          newStateArray.push( <li>{newState}</li> )
        }
      }
    }
    this.setState( { initialState: newStateArray } )
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