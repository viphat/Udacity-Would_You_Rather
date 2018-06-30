import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const optionOneText = this.optionOneInput.value
    const optionTwoText = this.optionTwoInput.value
    if (optionOneText.length < 5 || optionTwoText.length < 5) {
      return alert('Each answer must have at least 5 characters.')
    }

    const { dispatch } = this.props
    dispatch(handleAddQuestion({ optionOneText, optionTwoText }))
    this.props.history.push('/')
  }

  render() {
    return (
      <div className='card'>
        <h5 className='card-header'>Create New Question</h5>
        <div className='card-block' style={{ padding: '10px' }}>
          <form className='new-question' onSubmit={this.handleSubmit}>
            <label>Would You Rather...?</label>
            <div className='form-group'>
              <input
                type='text'
                minLength={ 5 }
                ref={(input) => this.optionOneInput = input}
                className='form-control'
                placeholder='Option One'
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                minLength={ 5 }
                ref={(input) => this.optionTwoInput = input}
                className='form-control'
                placeholder='Option Two'
              />
            </div>
            <div className='form-group'>
              <button
                className='btn btn-primary'
                type='submit' >
                Add!
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(NewQuestion)
