import React, { Component } from 'react'
import './index.scss'

let item = [
  { id: 0, name: 'Products', item: [{ id: 2, name: 'M-PET.NET' }, { id: 3, name: 'M-PET.WEB' }]},
  { id: 4, name: 'Services', item: [{ id: 5, name: 'M-PET Hosted' }, { id: 6, name: 'Custom Programming' }]},
  { id: 7, name: 'TurnKey', item: [{ id: 8, name: 'About' }, { id: 9, name: 'Project Management' }, { id: 10, name: 'IT Tasks' }, { id: 11, name: 'Maintenance' }]},
  { id: 12, name: 'Key Industries', item: [{ id: 13, name: 'Transportation' }, { id: 14, name: 'Hospitality' }]},
  { id: 15, name: 'Company', item: ['Team', 'History']},
]

class Nav extends Component {
  render() {
    let navItems = item.map((items) => <navItems node={items} children={items.item} key={items.id}/>)
    console.log(navItems)
    return (
      <div>
        <ul className='nav'>
          {navItems}
        </ul>
      </div>
    )
  }
}

export default Nav