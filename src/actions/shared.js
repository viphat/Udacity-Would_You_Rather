import { getInitialData } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { setAuthedUser } from '../actions/authedUser'
import { receiveUsers } from './users'

const AUTHED_ID = null

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
    .then(({ users }) => {
      dispatch(receiveUsers(users))
      dispatch(setAuthedUser(AUTHED_ID))
      dispatch(hideLoading())
    })
  }
}
