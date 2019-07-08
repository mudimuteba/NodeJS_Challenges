const {ObjectID} = require('mongodb');

const router = require('express').Router();
const {Prospect} = require('../models/prospect');

router.delete('/deleteProspectById:id', (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) return res.status(404).send();

    Prospect.findByIdAndDelete(id).then( (prospect) => {
        if (!prospect) return res.status(404).send();
        res.send(prospect);
    }).catch( (err) => {
        res.status(400).send();
    });
});

module.exports = router;