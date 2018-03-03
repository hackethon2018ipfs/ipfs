import { setShowMore } from '../../../store/actions'

const mapDispatchToProps = (dispatch) => ({
  onClick: (hash) => {
    dispatch(setShowMore(hash))
  }
})

export default mapDispatchToProps
