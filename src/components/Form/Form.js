import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      tutorial: '',
      id: Date.now()
    }
  }

  render() {
    return (
      <div>
        <select name='stance' className='stance'>
          <option value='regular'>Regular</option>
          <option value='switch'>Switch</option>
        </select>
        <input type='text' placeholder='Name Of Trick'></input>
        <select name='obstacle' className='obstacle'>
          <option value='flatground'>Flatground</option>
          <option value='ledge'>Ledge</option>
          <option value='rail'>Rail</option>
          <option value='stairs'>Stairs</option>
          <option value='pool'>Pool</option>
        </select>
        <input type='text' placeholder='Tutorial Link'></input>
        <button>Submit</button>
      </div>
    )
  }
}

export default Form