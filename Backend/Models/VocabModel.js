const mongoose = require('mongoose');

const vocabSchema = new mongoose.Schema({
    term: String,
    definition: String,
})

const Vocab = mongoose.model('Vocab', vocabSchema);

module.exports = Vocab;