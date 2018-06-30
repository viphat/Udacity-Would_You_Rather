import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  handleLogout = () => {
    const { loggedIn, dispatch} = this.props
    if (loggedIn === true) {
      dispatch(setAuthedUser(null))
    }
  }

  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <div className='container'>
          <NavLink to='/' exact className='navbar-brand'>
            Would You Rather...?
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className='nav-item'>
                <NavLink to='/' exact className='nav-link' activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/questions/new' className='nav-link' activeClassName='active'>
                  Ask
                </NavLink>
              </li>
              <li className='nav-item'>
                { this.props.loggedIn === false
                    ? <NavLink to='/login' className='nav-link' activeClassName='active'>
                        Log in
                      </NavLink>
                    : <a style={{cursor: 'pointer'}} onClick={this.handleLogout} className='nav-link'>Log out</a>
                }
              </li>
            </ul>
            { this.props.loggedIn === true && (
              <ul className='navbar-nav navbar-right'>
                <div className='navbar-avatar'>
                  <img src={this.props.userAvatar} alt={this.props.username} />
                </div>
              </ul>
            )}
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    loggedIn: authedUser !== null,
    userAvatar: authedUser === null ? null : users[authedUser].avatarURL,
    username: authedUser === null ? null : users[authedUser].name
  }
}

export default connect(mapStateToProps)(Nav)
