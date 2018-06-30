import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'

class Question extends Component {
  render() {
    const { id, answered } = this.props

    return (
      <Fragment>
        { answered === false
          ? <UnansweredQuestion id={id} />
          : <AnsweredQuestion id={id} />
        }
      </Fragment>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params
  const currentUser = users[authedUser]

  return {
    id,
    answered: Object.keys(currentUser.answers).indexOf(id) >= 0
  }
}

export default connect(mapStateToProps)(Question)
