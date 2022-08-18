// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({
      count: prevState.count + randomNumber,
    }))
  }

  goToButton = () => {
    const {count} = this.state

    if (count % 2 === 0) {
      return 'Even'
    }
    return 'Odd'
  }

  render() {
    const {count} = this.state
    const text = this.goToButton()

    // const text = count%2 ===0 ?Even :Odd

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {text}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
