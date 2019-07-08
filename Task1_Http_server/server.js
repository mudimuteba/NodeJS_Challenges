var express = require('express');
var app = express();

app.use(express.static('./nodeApp'));

app.listen(8080);