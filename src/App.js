const ReactMarkdown = require('react-markdown')
const input = '# This is a header\n\nAnd this is a paragraph'

export default (React) => () => (
  <ReactMarkdown source={input} />
)
