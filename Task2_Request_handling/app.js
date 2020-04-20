var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static('./'));

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.get("/form", function (req, res) {
    res.sendFile(__dirname+"/form.html");
});

app.post("/form", urlencodedParser, function (req, res) {
    var email = req.body.email;
    var password = req.body.pwd;
    res.send(req.body);
});

app.listen(8000);
console.log("sever running at localhost:8000");