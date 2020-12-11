const express = require('express');
const path = require('path')
const App = express();
const db = require('../db/index.js')
const bodyParser = require('body-parser')

App.use(express.static('react-client/dist'))
App.use(bodyParser.json())
App.get('/quotes', function(req, res) {
  console.log('get request received')
  db.getAllQuotes()
    .then(documents => res.send(documents))
})
App.post('/quotes', (req, res) => {
  console.log('post request received')
  db.addQuote(req.body.quote)
    .then(documents => res.send(documents))
    .catch((err) => res.status(500).send(err))
})
App.patch('/quotes', (req, res) => {
  console.log('patch request received')
  db.updateQuote(req.body.quote)
    .then(() => db.getAllQuotes())
      .then(documents => res.send(documents))
    .catch((err) => res.status(500).send(err))
})
App.delete('/quotes', (req, res) => {
  console.log('delete request received')
  db.deleteQuote(req.body.quote)
    .then(() => db.getAllQuotes())
      .then((documents) => res.send(documents))
    .catch(err => res.status(500))
}
)




App.listen(3000, function() {
  console.log('App is listening on port 3000')
})