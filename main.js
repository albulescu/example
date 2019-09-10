const PORT = 8080;
var bodyParser = require('body-parser')
var express = require('express')
var routing = require('./endpoints/routing');
var services = require('./services');
var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(services);

routing(app);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))