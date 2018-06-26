import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginPage from './LoginPage'

class Dashboard extends Component {
  render() {
    return (
      <div>
        { this.props.loggedIn === true
            ? <LoginPage />
            : <div>Home Page</div>
        }
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loggedIn: authedUser === null
  }
}

export default connect(mapStateToProps)(Dashboard)
