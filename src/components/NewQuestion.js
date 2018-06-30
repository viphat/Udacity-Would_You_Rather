import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {
  render() {
    return (
      <div>New Question</div>
    )
  }
}

function mapStateToProps({ authedUser }, props) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)
