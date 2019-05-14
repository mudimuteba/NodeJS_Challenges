var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static('.'));
app.get('/form', function (req, res) {
   res.sendFile( __dirname + "/index.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.post("/formResponse", urlencodedParser, function(req, res) {
    let response = {
       First_Name: req.body.first_name,
       Last_Name: req.body.last_name
    };
    res.send(JSON.stringify(response));
  });

var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("listening at http://%s:%s", host, port)
})