var express = require('express');
var app = express();

app.use(express.static('./nodeApp'));

app.listen(8080);
console.log("Server running at localhost:8080");