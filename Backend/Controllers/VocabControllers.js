const Vocab = require('../models/VocabModels')

module.exports = {
    getAllVocab: async (req, res) => {
        try{
            const vocab = await Vocab.find();
        } catch (err) {
            res.status(500),json({error: err.message})
        }
    }
}