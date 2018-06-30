import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'
import NotFoundPage from './NotFoundPage'

class Question extends Component {
  render() {
    const { id, question, answered } = this.props

    if (question === null || question === undefined) {
      return ( <NotFoundPage /> )
    }

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
  const question = questions[id]

  if (question === null || question === undefined) {
    return {
      question
    }
  }

  return {
    id,
    question,
    answered: Object.keys(currentUser.answers).indexOf(id) >= 0
  }
}

export default connect(mapStateToProps)(Question)
