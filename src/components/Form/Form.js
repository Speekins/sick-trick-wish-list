import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      tutorial: '',
    }
  }

  handleChange = (e) => {
    let name = e.target.name
    this.setState({ [name]: e.target.value })
  }

  handleClick = () => {
    this.props.submitTrick(this.state)
    this.setState({
      stance: '',
      name: '',
      obstacle: '',
      tutorial: '',
    })
  }

  render() {
    return (
      <div className='form'>
        <select name='stance' className='stance' onChange={(event) => this.handleChange(event)}>
          <option value=''>Select a stance</option>
          <option value='regular'>Regular</option>
          <option value='switch'>Switch</option>
        </select>
        <input type='text' className='name' name='name' placeholder='Name Of Trick'
          onChange={(event) => this.handleChange(event)}></input>
        <select name='obstacle' className='obstacle' onChange={(event) => this.handleChange(event)}>
          <option value=''>Select an Obstacle</option>
          <option value='flatground'>Flatground</option>
          <option value='ledge'>Ledge</option>
          <option value='rail'>Rail</option>
          <option value='stairs'>Stairs</option>
          <option value='pool'>Pool</option>
        </select>
        <input type='text' name='tutorial' className='tutorial' placeholder='Tutorial Link'
          onChange={(event) => this.handleChange(event)}></input>
        <button onClick={() => this.handleClick()} className='submit'>Submit</button>
      </div>
    )
  }
}

export default Form