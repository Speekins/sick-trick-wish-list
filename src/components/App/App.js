import { Component } from 'react'
import './App.css'
import Tricks from '../Tricks/Tricks'
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .then(data => this.setState({ tricks: data }))
  }

  submitTrick = (newTrick) => {
    const currentTricks = this.state.tricks
    //this.setState({ tricks: [...currentTricks, newTrick] })
    fetch('http://localhost:3001/api/v1/tricks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTrick)
    })
    .then(response => response.json())
    .then(data => this.setState({ tricks: [...currentTricks, data] }))
  }

  removeTrick = (id) => {
    const tricksToKeep = this.state.tricks.filter(trick => trick.id !== id)
    this.setState({ tricks: [...tricksToKeep]})
    fetch(`http://localhost:3001/api/v1/tricks/${id}`, { method: 'DELETE' })
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form submitTrick={this.submitTrick} />
        <Tricks tricks={this.state.tricks} removeTrick={this.removeTrick}/>
      </div>
    )
  }
}

export default App