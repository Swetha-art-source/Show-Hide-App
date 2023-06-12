// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstNameVisible: false,
      lastNameVisible: false,
    }
  }

  firstName = () => {
    this.setState(prevState => ({
      firstNameVisible: !prevState.firstNameVisible,
    }))
  }

  lastName = () => {
    this.setState(prevState => ({lastNameVisible: !prevState.lastNameVisible}))
  }

  render() {
    const {firstNameVisible, lastNameVisible} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <button type="button" className="btn" onClick={this.firstName}>
            Show/Hide Firstname
          </button>
          <button type="button" className="btn" onClick={this.lastName}>
            Show/Hide Lastname
          </button>
        </div>
        {firstNameVisible && (
          <div className="name-container">
            <p>Joe</p>
          </div>
        )}
        {lastNameVisible && (
          <div className="name-container">
            <p>Jonas</p>
          </div>
        )}
      </div>
    )
  }
}

export default ShowHide
