import { fetchAddresses } from '../store/actions'

const mapDispatchToProps = (dispatch) => ({
  requestAddresses: () => {
    dispatch(fetchAddresses())
  }
})

export default mapDispatchToProps
