import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { handleSaveQuestionAnswer } from '../actions/questions'
import { refreshData } from '../actions/shared'

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
      if (onDashboard === true) {
        dispatch(refreshData())
        this.forceUpdate()
      }
    } else {
      alert('You must select an answer before submit!')
    }
  }

  render() {
    const { question, id } = this.props
    return (
      <div className='card'>
        <h5 className='card-header'>
          <span>Would you rather...?</span>
          <div className='user-avatar float-right'>
            <img src={question.avatar} alt={question.authorName} />
          </div>
        </h5>
        <div className='card-block'>
          <form onSubmit={this.handleAnswer}>
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

export default connect(mapStateToProps)(UnansweredQuestion)
