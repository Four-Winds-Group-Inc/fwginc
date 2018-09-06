import React, {Component} from 'react'

class MpetWeb extends Component {
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
            <div className='card-top'><h1>M-PET.WEB</h1></div>
            <p>A web-based solution that will run over the internet connection that links into the same database as the desktop. Giving your employees the advantage of a web-based system for many of the key features of our system without needing a full install on all workstations.</p>
          </div>
          <button onClick={this.clickHandler}> &#8594; </button>
        </div>
        <div className={' card card-content' + toggleClass}>
          <h2>CLIENT FEATURES</h2>
          <ul>
            <li>Submit a new job request with the same look and feel of the desktop application.</li>
            <li>Look up job requests and planned jobs with the ability to view, edit, and delete them.</li>
            <li>Edit planned jobs with the same benifits of the desktop application.</li>
            <li>Integrate mappable data with Microsoft's Bing Maps to be able to place that job along with general information.</li>
            <li>Search for nearby jobs within a user defined distance from the original job.</li>
            <li>Highlight and see selected jobs on the map.</li>
            <li>View your complete list of maintenance objects as well as detailed information for each one.</li>
            <li>View any reports you've created with the built-in crystal reports viewer.</li>
            <li>All lists support efficient sorting options, as well as exporting to excel.</li>
          </ul>
          <button onClick={this.clickHandler}> &#8592; </button>
        </div>
      </div>

    )
  }
}

export default MpetWeb