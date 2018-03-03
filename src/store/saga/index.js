import { call, all, put, takeLatest, takeEvery } from 'redux-saga/effects'
import fetch from 'cross-fetch'

function fetchContentAPI (url) {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(res => res.json())
    .then(res => resolve(res))
    .catch(error => resolve({error}))
  })
}
function fetchAddressesAPI () {
  return Promise.resolve({
    res: {
      hash1: 'http://127.0.0.1:3003/api?q=preview1',
      hash2: 'http://127.0.0.1:3003/api?q=preview2',
      hash3: 'http://127.0.0.1:3003/api?q=preview3',
      hash4: 'http://127.0.0.1:3003/api?q=preview4',
      hash5: 'http://127.0.0.1:3003/api?q=preview5',
      hash6: 'http://127.0.0.1:3003/api?q=preview6'
    }
  })
}

function * fetchAddresses () {
  const { res, error } = yield call(fetchAddressesAPI)

  if (res) {
    yield put({
      type: 'ADDRESSES_FETCH_SUCCEEDED',
      addresses: res
    })
  } else {
    yield put({
      type: 'ADDRESSES_FETCH_FAILED',
      addresses: error
    })
  }
}

function * fetchContent (action) {
  const myContents = yield all([
    Object.keys(action.addresses).map(async hash => {
      const { content } = await fetchContentAPI(action.addresses[hash])
      return {content, hash}
    })
  ])
  console.log('my contents:', myContents)
  if (myContents) {
    yield put({
      type: 'CONTENT_FETCH_SUCCEEDED',
      content: myContents[0]
    })
  } else {
    yield put({
      type: 'CONTENT_FETCH_FAILED',
      content: 'error fetching contents'
    })
  }
}
function * fetchDetail (action) {
  const { content } = yield call(fetchContentAPI, `http://127.0.0.1:3003/api?d=${action.payload}`)

  if (content) {
    yield put({
      type: 'DETAIL_FETCH_SUCCEEDED',
      detail: { content, hash: action.payload }
    })
  } else {
    yield put({
      type: 'DETAIL_FETCH_FAILED',
      detail: 'error fetching detail'
    })
  }
}

export function * mySaga () {
  yield takeLatest('ADDRESSES_FETCH_REQUESTED', fetchAddresses)
  yield takeEvery('ADDRESSES_FETCH_SUCCEEDED', fetchContent)
  yield takeEvery('DETAIL_FETCH_REQUESTED', fetchDetail)
}
