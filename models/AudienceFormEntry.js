const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    question_one: {
        type: String,
        required: true,
        trim: true,
    },
    question_second: {
        type: String,
        required: true,
        trim: true,
    },
    question_third: {
        type: String,
        required: true,
        trim: true,
    },
    question_four: {
        type: String,
        required: true,
        trim: true,
    },
});

const AudienceFormEntry = mongoose.model('AudienceFormEntry', formSchema);

module.exports = AudienceFormEntry;
