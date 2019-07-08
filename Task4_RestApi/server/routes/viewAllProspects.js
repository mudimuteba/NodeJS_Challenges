const router = require('express').Router();
const {Prospect} = require('../models/prospect');

router.get('/viewAllProspects', (req, res) => {
    Prospect.find().then( (prospects) => {
        res.send({prospects})
    }, (err) => {
        res.status(400).send(err);
    });
});

module.exports = router;