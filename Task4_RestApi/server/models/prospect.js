const mongoose = require('mongoose');

const Prospect = mongoose.model('Prospect', {
    nameAndSurname: {type: String,},
    age: {type: Number,},
    date: { type: String },
    time: {type: String,},
    subject: {type: String,},
    assistedBy: {type: String,},
});

module.exports = {Prospect};