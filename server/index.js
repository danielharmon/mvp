const express = require('express');
const path = require('path')
const App = express();


App.get('/', function(req, res) {
  res.end('Working')
})




App.listen(3000, function() {
  console.log('App is listening on port 3000')
})