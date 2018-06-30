import React, { Component } from 'react'
import { connect } from 'react-redux'

class AnsweredQuestion extends Component {
  render() {
    const { id } = this.props
    return (
      <div>{id}</div>
    )
  }
}

// function mapStateToProps({ }) {

// }

export default connect()(AnsweredQuestion)
