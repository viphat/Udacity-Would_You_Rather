import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {
    const { leaderboard, authedUser } = this.props

    return (
      <div>
        <h3>Leaderboard</h3>
        <table className='table' >
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>User</th>
              <th scope='col'> </th>
              <th scope='col'>Asked</th>
              <th scope='col'>Answered</th>
            </tr>
          </thead>
          <tbody>
            {
              leaderboard.map((item, index) => (
                <tr key={item.id} className={ item.id === authedUser ? 'table-success' : '' }>
                  <td>{index + 1}</td>
                  <td>
                    <div className='user-avatar'>
                      <img src={item.avatarURL} alt={item.name} />
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.asked}</td>
                  <td>{item.answered}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const leaderboard = []

  Object.keys(users).forEach((uid) => {
    const user = users[uid]
    const answered = Object.keys(user.answers).length
    leaderboard.push({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answered,
      asked: user.questions.length,
      point: answered + user.questions.length,
    })
  })

  return {
    authedUser,
    leaderboard: leaderboard.sort((a, b) => b.point - a.point)
  }
}

export default connect(mapStateToProps)(Leaderboard)
