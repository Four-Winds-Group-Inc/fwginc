import React, { Component } from 'react'

class Programming extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false,
    }
  }
  clickHandler = () => {
    this.setState( { open: !this.state.open } )
  }
  render() {
    let toggleClass = this.state.open ? 'open' : ''
    return (
      <div className='JSX-WRAP'>
        <div className={'card' + toggleClass}>
          <div className='card-container'>
            <div className='card-top'><h1>CUSTOM PROGRAMMING</h1></div>
            <p>Four Winds Group doesn't focus all our resources on M-PET, we can create custom, made-to-order applications as well.</p>
          </div>
          <button onClick={this.clickHandler}> &#8594; </button>
        </div>
        <div className={'card card-content' + toggleClass}>
          <p>Maybe you want a website that you can use from multiple workstations to access information on a central database.</p>
          <p><span>We can do that.</span></p>
          <p>Maybe you want an application on a smartphone or tablet that you can use out in the field.</p>
          <p><span>We can do that, too.</span></p>
          <p>If you have an existing system in place that you can't change but you'd like to use M-PET, let our IT staff come up with a plan. We will create a custom interface to import the information from your existing systems into M-PET where subsequent actions will take place.</p>

          <p>This allows you to continue using your legacy systems while taking advantage of M-PET's great features and benefits.</p>
          <button onClick={this.clickHandler}> &#8592; </button>
        </div>
      </div>
    )
  }
}

export default Programming