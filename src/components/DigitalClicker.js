// Code DigitalClicker Component Here
import React, { Component } from 'react'

export class DigitalClicker extends Component {
  constructor() {
    super();

    this.state ={
      timesClicked: 0
    }
  }

  handleclick = () => {
    this.setState(previousState => {
      return {
        timesClicked: previousState.timesClicked + 1
      }
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleclick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker
