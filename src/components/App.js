import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Nav from './Nav'
import Question from './Question'
import LoginPage from './LoginPage'
import NotFoundPage from './NotFoundPage'
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
            {
              this.props.loggedIn === false
              ? <LoginPage />
              : <Fragment>
                  <Switch>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/questions/:id' component={Question} />
                    <Route path='/login' component={LoginPage} />
                    <Route path='*' component={NotFoundPage} />
                  </Switch>
                </Fragment>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loggedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(App)
