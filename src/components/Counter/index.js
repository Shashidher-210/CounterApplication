import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }
  onReset = () => {
    this.setState(prevState => ({count: prevState.count - prevState.count}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Count</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
          <button className="button" onClick={this.onReset}>
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
