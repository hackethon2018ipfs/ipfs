import { connect } from 'react-redux'
import styled from 'styled-components'
import createApp from './style'
import createHeader from './containers/Header'
import createContent from './containers/Content'
import mapDispatch from './mapdispatch'

export default React => () => {
  const App_ = createApp(styled)
  const Header = createHeader(React)
  const connectedContent = createContent(React)
  const Content = connect(null, mapDispatch)(connectedContent)

  return (
    <App_>
      <Header />
      <Content />
    </App_>
  )
}
