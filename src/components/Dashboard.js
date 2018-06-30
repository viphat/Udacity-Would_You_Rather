import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'

class Dashboard extends Component {
  state = {
    questionsType: 'unanswered'
  }

  handleQuestionTypeChange = (e) => {
    const value = e.target.value
    this.setState(() => ({
      questionsType: value
    }))
  }

  render() {
    const { currentUser, answeredQuestionIds, unansweredQuestionIds} = this.props
    const { questionsType } = this.state
    return (
      <div>
        <div>Welcome <strong>{currentUser.name}</strong>, have a nice day!</div>
        <div className='row col-md-12'>
          <div className='custom-control custom-radio custom-control-inline'>
            <input type='radio' id='unansweredQuestionsRadio' name='questionsType' className='custom-control-input' value='unanswered' defaultChecked onChange={this.handleQuestionTypeChange}/>
            <label className='custom-control-label' htmlFor='unansweredQuestionsRadio'>Unanswered</label>
          </div>
          <div className='custom-control custom-radio custom-control-inline'>
            <input type='radio' id='answeredQuestionsRadio' name='questionsType' className='custom-control-input' value='answered' onChange={this.handleQuestionTypeChange}/>
            <label className='custom-control-label' htmlFor='answeredQuestionsRadio'>Answered</label>
          </div>
        </div>
        <div className='row col-md-12'>
          {
            questionsType === 'unanswered'
              ?
                <ul className='questions-list unanswered'>
                  { unansweredQuestionIds.map((questionId) => (
                    <li key={questionId}>
                      <UnansweredQuestion id={questionId} onDashboard/>
                    </li>
                  ))}
                </ul>
              :
                <ul className='questions-list answered'>
                  { answeredQuestionIds.map((questionId) => (
                    <li key={questionId}>
                      <AnsweredQuestion id={questionId} />
                    </li>
                  ))}
                </ul>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const currentUser = users[authedUser]
  const questionIds =  Object.keys(questions)
  const answeredQuestionIds = Object.keys(currentUser.answers)
  const unansweredQuestionIds = questionIds.filter((id) => answeredQuestionIds.indexOf(id) < 0)

  return {
    currentUser,
    answeredQuestionIds: answeredQuestionIds.sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    unansweredQuestionIds: unansweredQuestionIds.sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)
