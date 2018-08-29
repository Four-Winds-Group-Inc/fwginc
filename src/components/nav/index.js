import React, { Component } from 'react'
import './index.scss'

let items = [
  { id: 0, name: 'Products', items: [ { id: 2, name: 'M-PET.NET' }, { id: 3, name: 'M-PET.WEB' } ] },
  { id: 4, name: 'Services', items: [ { id: 5, name: 'M-PET Hosted' }, { id: 6, name: 'Custom Programming' } ] },
  { id: 7, name: 'Turnkey', items: [ { id: 8, name: 'About' }, { id: 9, name: 'Project Management' }, { id: 10, name: 'IT Tasks' }, { id: 11, name: 'Maintenance' } ] },
  { id: 12, name: 'Key Industries', items: [ { id: 13, name: 'Transportation' }, { id: 14, name: 'Hospitality' } ] },
  { id: 15, name: 'Company', items: [ { id: 15, name: 'Team' }, { id: 16, name: 'History' } ] },
]

class NavContainer extends Component {
  constructor( props ) {
    super( props )
    this.state = { active: false }
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

  render() {

    let nodes = items.map( ( item ) => <li node={item} children={item.items.map( x => x.name )} key={item.id} /> )

    return (
      <nav>
        <p onClick={this.clickHandler}>{nodes[ 0 ].props.node.name}</p>
        <ul className='nav'>
          <li><a href='/products'>{nodes[ 0 ].props.children[0]}</a></li>
          <li><a href='/products'>{nodes[ 0 ].props.children[1]}</a></li>
        </ul>
        <p onClick={this.clickHandler}>{nodes[ 1 ].props.node.name}</p>
        <ul className='nav'>
          <li><a href='/services'>{nodes[ 1 ].props.children[0]}</a></li>
          <li><a href='/services'>{nodes[ 1 ].props.children[1]}</a></li>
        </ul>
        <p onClick={this.clickHandler}>{nodes[ 2 ].props.node.name}</p>
        <ul className='nav'>
          <li><a href='/turnkey'>{nodes[ 2 ].props.children[0]}</a></li>
          <li><a href='/turnkey'>{nodes[ 2 ].props.children[1]}</a></li>
          <li><a href='/turnkey'>{nodes[ 2 ].props.children[2]}</a></li>
          <li><a href='/turnkey'>{nodes[ 2 ].props.children[3]}</a></li>
        </ul>
        <p onClick={this.clickHandler}>{nodes[ 3 ].props.node.name}</p>
        <ul className='nav'>
          <li><a href='/key-industries'>{nodes[ 3 ].props.children[0]}</a></li>
          <li><a href='/key-industries'>{nodes[ 3 ].props.children[1]}</a></li>
        </ul>
        <p onClick={this.clickHandler}>{nodes[ 4 ].props.node.name}</p>
        <ul className='nav'>
          <li><a href='/company'>{nodes[ 4 ].props.children[0]}</a></li>
          <li><a href='/company'>{nodes[ 4 ].props.children[1]}</a></li>
        </ul>
      </nav>
    )
  }
}

export default NavContainer