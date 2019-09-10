const PORT = 8080;

var express = require('express')
var routing = require('./endpoints/routing');
var services = require('./services');
var app = express()

app.use(services);

routing(app);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))