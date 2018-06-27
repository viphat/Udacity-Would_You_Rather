import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
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
                  Ask new question
                </NavLink>
              </li>
              <li className='nav-item'>
                { this.props.loggedIn === true
                    ? <NavLink to='/login' className='nav-link' activeClassName='active'>
                        Log in
                      </NavLink>
                    : <a>Log out</a>
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loggedIn: authedUser === null
  }
}

export default connect(mapStateToProps)(Nav)
