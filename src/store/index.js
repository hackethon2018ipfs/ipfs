import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'
import { mySaga } from './saga'

let middlewares = []
const sagaMiddleware = createSagaMiddleware()
middlewares.push(sagaMiddleware)

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger)
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(mySaga)

export default store
