//library imports
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const {mongoose} = require('./db/mongoose.js');

//local imports
const {Prospect} = require('./models/prospect');


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/addNewProspect', (req, res) => {
    var prospect = new Prospect({
        nameAndSurname: req.body.nameAndSurname,
        age: req.body.age,
        date: time().date,
        time: time().time,
        subject: req.body.subject,
        assistedBy: req.body.assistedBy
    });

    prospect.save().then( (doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });

});

app.delete('/deleteProspect:id', (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) return res.status(404).send();

    Prospect.findByIdAndDelete(id).then( (prospect) => {
        if (!prospect) return res.status(404).send();
        res.send(prospect);
    }).catch( (err) => {
        res.status(400).send();
    });
});

app.delete('/deleteAllProspects', (req, res) => {
    Prospect.deleteMany().then( (result) => {
        res.send(result);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/viewProspects', (req, res) => {
    Prospect.find().then( (prospects) => {
        res.send({prospects})
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/viewProspect:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) return res.status(404).send();

    Prospect.findById(id).then((prospect) => {
        if (!prospect) return res.status(404).send();
        res.send({prospect});
    }).catch((err) => {
        res.status(400).send();
    });
});

app.put('/updateProspect:id', (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) return res.status(404).send()
    
    Prospect.findOneAndUpdate(
        { _id: req.params.id }, //filter
        { $set: req.body }, //update
        { new: true }).then( (updatedProspect) => { //options
            res.send(updatedProspect);
        }).catch( (err) => {
            res.status(400).send();
        });   
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});


module.exports = {app};


function time() {
    var today = new Date();
    var week = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    var noon;
    var hours = today.getHours();
    var result = {};
    
    noon = today.getHours() >= 12 ? "PM" : "AM";
    if (hours > 12) hours -= 12;
    result = {
        date: `${week[today.getDay()]} ${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,  
        time: `${hours} ${noon} ${today.getMinutes()} ${today.getSeconds()}` 
    };
    return result;
}