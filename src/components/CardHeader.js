import React, { Component } from 'react'

class CardHeader extends Component {
  render() {
    const { question } = this.props
    return (
      <h5 className='card-header'>
        <span>Would you rather...?</span>
        <div className='user-avatar float-right'>
          <img src={question.avatar} alt={question.authorName} />
        </div>
      </h5>
    )
  }
}

export default CardHeader
