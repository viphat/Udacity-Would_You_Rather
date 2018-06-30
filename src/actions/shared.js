import { getData } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { setAuthedUser } from '../actions/authedUser'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

const AUTHED_ID = null

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getData()
    .then(({ users, questions }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
      dispatch(setAuthedUser(AUTHED_ID))
      dispatch(hideLoading())
    })
  }
}

export function refreshData() {
  return (dispatch) => {
    return getData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
      })
  }
}
