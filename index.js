var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/83e7f1ce-d56f-40cd-9859-4a0225e664a9', function(req, res) {
  console.log(req.body)
  res.send('OK')
})

app.listen(3000)
