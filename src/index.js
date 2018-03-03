import React from 'react'
import ReactDOM from 'react-dom'
import createApp from './App'

const App = createApp(React)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

if (process.env.NODE_ENV === `development`) {
  module.hot.accept()
}
