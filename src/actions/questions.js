import { saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
// export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function answerQuestion(authedUser, qid, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  }
}

export function handleSaveQuestionAnswer ({ authedUser, qid, answer }) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    }).then(() => dispatch(answerQuestion(authedUser, qid, answer)))
    .then(() => dispatch(hideLoading()))
  }
}

