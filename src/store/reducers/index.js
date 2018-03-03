import { combineReducers } from 'redux'
import addresses from './addresses'
import content from './content'
import detail from './detail'

const appReducer = combineReducers({
  addresses,
  content,
  detail
})

export default appReducer
