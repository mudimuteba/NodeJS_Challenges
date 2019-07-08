const {ObjectID} = require('mongodb');
const router = require('express').Router();

const {Prospect} = require('../models/prospect');

router.put('/updateProspectById:id', (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) return res.status(404).send()

    Prospect.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true, useFindAndModify: false}).then( (updatedProspect) => {
            res.send(updatedProspect);
        }).catch( (err) => {
            res.status(400).send();
        });
});

module.exports = router;