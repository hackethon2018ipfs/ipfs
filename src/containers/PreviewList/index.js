import { connect } from 'react-redux'
import createDetail from '../../components/Detail'
import mapStateToProps from './mapstate/detail'

export default React => ({previewList, onClick}) => {
  const connectedDetail = createDetail(React)
  const Detail = connect(mapStateToProps)(connectedDetail)
  return (
      previewList.map((previewItem, index) => (
        <div key={index}>
          {previewItem.content}
          <button onClick={() => onClick(previewItem.hash)}>ver +</button>
          <Detail hash={previewItem.hash} />
        </div>
      ))
  )
}
