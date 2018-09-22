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
        <a className='nodes' href='/products'>{nodes[ 0 ].props.node.name}</a>
        <a className='nodes' href='/services'>{nodes[ 1 ].props.node.name}</a>
        <a className='nodes' href='/turnkey'>{nodes[ 2 ].props.node.name}</a>
        <a className='nodes' href='/key-industries'>{nodes[ 3 ].props.node.name}</a>
        <a className='nodes' href='/company'>{nodes[ 4 ].props.node.name}</a>
        <ul>
          <h2>Contact</h2>
          <li className='contact-b'>Four Winds Group Inc.</li>
          <li className='contact-b'>PO Box 3411</li>
          <li className='contact-b'>La Jolla, CA 92038</li>
          <li><a className='contact-a' href="mailto:info@fwginc.com" data-rel="external">info@fwginc.com</a></li>
          <li>1-800-793-8707</li>
        </ul>
      </nav>
    )
  }
}

export default NavContainer