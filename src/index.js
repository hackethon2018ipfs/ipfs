import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import createApp from './App'

const App = createApp(React)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

if (process.env.NODE_ENV === `development`) {
  module.hot.accept()
}
