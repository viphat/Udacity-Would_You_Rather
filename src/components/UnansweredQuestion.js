import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { handleSaveQuestionAnswer } from '../actions/questions'
import { refreshData } from '../actions/shared'
import { Link, withRouter } from 'react-router-dom'
import CardHeader from './CardHeader'

class UnansweredQuestion extends Component {
  state = {
    selectedAnswer: null
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState(() => ({
      selectedAnswer: value
    }))
  }

  handleAnswer = (e) => {
    e.preventDefault()
    const { selectedAnswer} = this.state
    const { dispatch, id, authedUser, onDashboard } = this.props

    if (selectedAnswer !== null) {
      dispatch(handleSaveQuestionAnswer({ authedUser, qid: id, answer: selectedAnswer }))
      dispatch(refreshData())
      if (!onDashboard) {
        this.props.history.push(`/questions/${id}`)
      }
    } else {
      alert('You must select an answer before submit!')
    }
  }

  render() {
    const { question, id, onDashboard } = this.props
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
        <div className='card-block'>
          <form className='answer-form' onSubmit={this.handleAnswer}>
            <div className='custom-control custom-radio'>
              <input type='radio' id={ id + '_optionOne' } name={ id + '_answers' } className='custom-control-input' value='optionOne' onChange={this.handleChange}/>
              <label className='custom-control-label' htmlFor={ id + '_optionOne' }>
                { question.optionOneText }
              </label>
            </div>
            <div className='custom-control custom-radio'>
              <input type='radio' id={ id + '_optionTwo' } name={ id + '_answers' } className='custom-control-input' value='optionTwo' onChange={this.handleChange}/>
              <label className='custom-control-label' htmlFor={ id + '_optionTwo' }>
                { question.optionTwoText }
              </label>
            </div>
            <button
              type='submit'
              className='btn btn-link'
              disabled={this.state.selectedAnswer === null} >
              Answer!
            </button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]
  const author = users[question.author]
  return {
    question: formatQuestion(question, author, authedUser),
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(UnansweredQuestion))
