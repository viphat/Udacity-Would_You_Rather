export function formatQuestion(question, author, authedUser) {
  const { id, optionOne, optionTwo } = question
  const { avatarURL, name } = author
  return {
    id,
    optionOneText: optionOne.text,
    optionTwoText: optionTwo.text,
    avatar: avatarURL,
    authorName: name
  }
}
