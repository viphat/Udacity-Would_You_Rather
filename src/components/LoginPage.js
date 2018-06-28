import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class LoginPage extends Component {
  state = {
    toHome: false,
  }

  handleChange = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const id = e.target.value
    if (id !== null && id !== undefined && id !== '') {
      dispatch(setAuthedUser(id))
      this.setState(() => ({
        toHome: true
      }))
    }
  }

  render() {
    const { authedUser, users } = this.props
    const { toHome } = this.state

    if (toHome === true || authedUser !== null) {
      return <Redirect to='/' />
    }

    return (
      <div className='row' style={{ paddingTop: '10px' }}>
        <form>
          { users && users.length >.0 && (
            <div className='form-group row'>
              <label htmlFor='selectUserToLogIn'>Select User to Log In</label>
              <select id='selectUserToLogIn' className='form-control' onChange={this.handleChange}>
                <option></option>
                { users.map((user) => (
                  <option value={user.id} key={user.id}>{user.name}</option>
                ))}
              </select>
            </div>
          )}
        </form>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  const usersArr = []
  Object.keys(users).forEach ((id) => {
    usersArr.push(users[id])
  })
  return {
    authedUser,
    users: usersArr
  }
}

export default connect(mapStateToProps)(LoginPage)
