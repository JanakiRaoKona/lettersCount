// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  CountLetters = event => {
    console.log(event.target.value)
    this.setState(prevState => {
      console.log(`value count ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="image-container">
          <img
            className="image"
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          />
        </div>
        <div className="theory-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="mid-cont">
            <label htmlFor="username" className="paragraph">
              Enter the phrase
            </label>
            <input
              id="username"
              className="input-box"
              placeholder="Enter the phrase"
              type="text"
              onChange={this.CountLetters}
            />
          </div>

          <p className="count-bg">No.of letters: {count}</p>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
