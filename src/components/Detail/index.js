export default React => ({detail, hash}) => {
  console.log('hash: ', hash)
  console.log('detail: ', detail)
  if (detail.hash === hash) {
    return <div>{detail.content}</div>
  } else {
    return <div />
  }
}
