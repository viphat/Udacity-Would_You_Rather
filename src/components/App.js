import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Nav from './Nav'
import LoginPage from './LoginPage'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{ zIndex: 9999 }} />
          <Nav />
          <div className='container' style={{ marginTop: '75px' }}>
            <Route path='/' exact component={Dashboard} />
            <Route path='/login' component={LoginPage} />
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App)
