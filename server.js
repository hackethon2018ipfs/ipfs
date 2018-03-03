const express = require('express')

const app = express()

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization')
  next()
})

app.get('/api', (req, res) => {
  let q = req.query.q
  let d = req.query.d
  console.log(q, d)
  if (q) {
    if (/^preview1/ig.test(q)) {
      return res.json(require('./src/store/mocks/preview.1.json'))
    } else if (/^preview2/ig.test(q)) {
      return res.json(require('./src/store/mocks/preview.2.json'))
    } else if (/^preview3/ig.test(q)) {
      return res.json(require('./src/store/mocks/preview.3.json'))
    } else if (/^preview4/ig.test(q)) {
      return res.json(require('./src/store/mocks/preview.4.json'))
    } else if (/^preview5/ig.test(q)) {
      return res.json(require('./src/store/mocks/preview.5.json'))
    } else if (/^preview6/ig.test(q)) {
      return res.json(require('./src/store/mocks/preview.6.json'))
    }
  } else if (d) {
    if (/hash1/ig.test(d)) {
      return res.json(require('./src/store/mocks/previewd.1.json'))
    } else if (/hash2/ig.test(d)) {
      return res.json(require('./src/store/mocks/previewd.2.json'))
    } else if (/hash3/ig.test(d)) {
      return res.json(require('./src/store/mocks/previewd.3.json'))
    } else if (/hash4/ig.test(d)) {
      return res.json(require('./src/store/mocks/previewd.4.json'))
    } else if (/hash5/ig.test(d)) {
      return res.json(require('./src/store/mocks/previewd.5.json'))
    } else if (/hash6/ig.test(d)) {
      return res.json(require('./src/store/mocks/previewd.6.json'))
    }
  } else {
    return res.json({message: 'failed'})
  }
})
let port = process.env.PORT || 3003
app.listen(port, () => console.log('Listening on port ' + port))
