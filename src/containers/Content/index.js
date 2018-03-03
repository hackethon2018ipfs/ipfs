import { connect } from 'react-redux'
import styled from 'styled-components'
import createContent from './style'
import createPreviewList from '../PreviewList'
import mapStateToProps from './mapstate/previewlist'
import mapDispatchToProps from './mapdispatch/previewlist'

export default React => ({requestAddresses}) => {
  const Content_ = createContent(styled)
  const connectedPreviewList = createPreviewList(React)
  const PreviewList = connect(mapStateToProps, mapDispatchToProps)(connectedPreviewList)
  requestAddresses()

  return (
    <Content_>
      <PreviewList />
    </Content_>
  )
}
