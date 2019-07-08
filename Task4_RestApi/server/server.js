const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/', require('./routes/addNewProspect'));
app.use('/', require('./routes/viewAllProspects'));
app.use('/', require('./routes/viewProspectById'));
app.use('/', require('./routes/updateProspectById'));
app.use('/', require('./routes/deleteProspectById'));
app.use('/', require('./routes/deleteAllProspects'));

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};