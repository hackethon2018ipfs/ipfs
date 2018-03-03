export const fetchAddresses = () => ({
  type: 'ADDRESSES_FETCH_REQUESTED'
})
export const setShowMore = (hash) => ({
  type: 'DETAIL_FETCH_REQUESTED',
  payload: hash
})
