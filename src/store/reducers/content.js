export default (state = [], action) => {
  switch (action.type) {
    case 'CONTENT_FETCH_SUCCEEDED':
      return action.content
    default:
      return state
  }
}
