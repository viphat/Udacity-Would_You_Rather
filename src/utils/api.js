import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
} from './_DATA.js'

export function getData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export { _saveQuestionAnswer as saveQuestionAnswer }
