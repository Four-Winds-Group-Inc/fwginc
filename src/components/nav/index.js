import React, { Component } from 'react'
import './index.scss'

let items = [
  { id: 0, name: 'Products'},
  { id: 1, name: 'Services'},
  { id: 2, name: 'Turnkey'},
  { id: 3, name: 'Key Industries'},
  { id: 4, name: 'Company'},
]

class NavContainer extends Component {
  render() {
    let nodes = items.map( ( item ) => <li node={item} key={item.id} /> )
    return (
      <nav>
        <a href='/products'>{nodes[ 0 ].props.node.name}</a>
        <a href='/services'>{nodes[ 1 ].props.node.name}</a>
        <a href='/turnkey'>{nodes[ 2 ].props.node.name}</a>
        <a href='/turnkey'>{nodes[ 3 ].props.node.name}</a>
        <a href='/company'>{nodes[ 4 ].props.node.name}</a>
      </nav>
    )
  }
}

export default NavContainer