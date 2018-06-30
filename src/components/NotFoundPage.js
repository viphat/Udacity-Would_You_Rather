import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class NotFoundPage extends Component {
  handleGoBack = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <h3>Sorry. We didn't found the page/item you are looking.</h3>
        <Link className='btn btn-link' to={'/'} >Go to Dashboard</Link>
        <button className='btn btn-link' onClick={this.handleGoBack}>Go Back</button>
      </div>
    )
  }
}

export default withRouter(NotFoundPage)
