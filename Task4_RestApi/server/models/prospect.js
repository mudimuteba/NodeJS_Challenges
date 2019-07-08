const mongoose = require('mongoose');

const Prospect = mongoose.model('Prospect', {
    name: {type: String},
    surname: {type: String},
    age: {type: Number},
    date: {type: String},
    time: {type: String},
    subject: {type: String},
    assistedBy: {type: String},
});

module.exports = {Prospect};