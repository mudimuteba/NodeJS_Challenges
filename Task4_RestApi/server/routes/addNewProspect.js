const router = require('express').Router();
const {Prospect} = require('../models/prospect');

router.post('/addNewProspect', (req, res) => {
    let prospect = new Prospect({
        name: req.body.name,
        surname: req.body.surname,
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

module.exports = router;

function time() {
    var today = new Date();
    var week = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    var am_pm;
    var hours = today.getHours();
    var result = {};
    
    am_pm = today.getHours() >= 12 ? "PM" : "AM";
    if (hours > 12) hours -= 12;
    result = {
        date: `${week[today.getDay()]} ${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,  
        time: `${hours} ${am_pm} ${today.getMinutes()} ${today.getSeconds()}` 
    };
    return result;
}