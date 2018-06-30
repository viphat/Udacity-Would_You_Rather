export function formatQuestion(question, author, authedUser) {
  const { id, optionOne, optionTwo } = question
  const { avatarURL, name } = author
  const optionOneVotesCount = optionOne.votes.length
  const optionTwoVotesCount = optionTwo.votes.length
  const optionOneVotesPercent = Math.round(optionOneVotesCount / (optionOneVotesCount + optionTwoVotesCount) * 100.0)
  const optionTwoVotesPercent = 100.0 - optionOneVotesPercent

  return {
    id,
    optionOneText: optionOne.text,
    optionTwoText: optionTwo.text,
    optionOneVotesCount,
    optionTwoVotesCount,
    optionOneVotesPercent,
    optionTwoVotesPercent,
    avatar: avatarURL,
    authorName: name
  }
}
