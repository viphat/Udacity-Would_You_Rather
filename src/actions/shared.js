import { showLoading, hideLoading } from 'react-redux-loading'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = null

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    dispatch(setAuthedUser(AUTHED_ID))
    dispatch(hideLoading())
  }
}
