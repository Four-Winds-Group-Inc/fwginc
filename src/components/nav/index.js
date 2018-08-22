import React, { Component } from 'react'
import './index.scss'

let initialArray = [
  [ 'Products', 'M-PET.NET', 'M-PET.WEB' ],
  [ 'Services', 'M-PET Hosted', 'Custom Programming' ],
  [ 'Turnkey', 'About', 'Project Management', 'IT Tasks', 'Maintenance' ],
  [ 'Key Industries', 'Transportation', 'Hospitality' ],
  [ 'Company', 'Team', 'History' ],
]

class Nav extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      initialState: initialArray,
      active: false,
    }
  }

  clickHandler = ( e ) => {
    e.preventDefault()
    if ( this.state.active ) {
      this.setState( { active: false } )
      e.target.className = this.state.active
    } else {
      let activeClass = document.querySelector( '.true' )
      if ( activeClass )
        activeClass.classList.remove( 'true' )
      this.setState( { active: true } )
      e.target.className = this.state.active
    }
  }

  componentWillMount() {
    let newStateArray = []
    for ( let i = 0; i < initialArray.length; i++ ) {
      for ( let j = 0; j < initialArray[ i ].length; j++ ) {
        let newStateLi = initialArray[ i ][ j ]
        let newStateUl = initialArray[ i ]

        if ( j === 0 ) {
          newStateArray.push( <li onClick={this.clickHandler}>{newStateLi}</li> )
        } else {
          newStateArray.push( <ul>{newStateUl}</ul> )
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