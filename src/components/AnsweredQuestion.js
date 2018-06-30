import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import CardHeader from './CardHeader'
import { Link, withRouter } from 'react-router-dom'

class AnsweredQuestion extends Component {
  render() {
    const { id, onDashboard, question, selectedAnswer } = this.props
    return (
      <div className='card'>
        { onDashboard === true
          ?
            <Link to={`/questions/${id}`} className='card-header-link' >
              <CardHeader question={question}/>
            </Link>
          :
            <CardHeader question={question}/>
        }
        <div className='card-block' style={{ padding: '10px' }}>
          <div
            className={ 'item ' + (selectedAnswer === 'optionOne' ? 'text-danger' : '')} >
            { question.optionOneText }: { question.optionOneVotesCount } votes ~ { question.optionOneVotesPercent } %
          </div>
          <div
            className={ 'item ' +  (selectedAnswer === 'optionTwo' ? 'text-danger' : '')}
            >
            { question.optionTwoText }: { question.optionTwoVotesCount } votes ~ { question.optionTwoVotesPercent }%
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
  const currentUser = users[authedUser]
  const question = questions[id]
  const author = users[question.author]
  const selectedAnswer = currentUser.answers[id]
  return {
    question: formatQuestion(question, author, authedUser),
    selectedAnswer,
  }
}

export default withRouter(connect(mapStateToProps)(AnsweredQuestion))
