import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {
    return (
      <div>Leaderboard</div>
    )
  }
}

function mapStateToProps({ authedUser }, props) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Leaderboard)
