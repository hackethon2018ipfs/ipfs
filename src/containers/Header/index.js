import styled from 'styled-components'
import createHeader from './style'

export default React => () => {
  const Header_ = createHeader(styled)

  return (
    <Header_>
      <h1>IPFS content app</h1>
    </Header_>
  )
}
