export default (state = [], action) => {
  switch (action.type) {
    case 'ADDRESSES_FETCH_SUCCEEDED':
      return state.concat(action.addresses)
    default:
      return state
  }
}
