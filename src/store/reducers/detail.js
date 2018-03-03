export default (state = {}, action) => {
  switch (action.type) {
    case 'DETAIL_FETCH_SUCCEEDED':
      return action.detail
    default:
      return state
  }
}
