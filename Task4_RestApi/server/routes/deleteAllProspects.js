const router = require('express').Router();
const {Prospect} = require('../models/prospect');

router.delete('/deleteAllProspects', (req, res) => {
    Prospect.deleteMany().then( (result) => {
        res.send(result);
    }, (err) => {
        res.status(400).send(err);
    });
});

module.exports = router;