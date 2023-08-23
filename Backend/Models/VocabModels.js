const mongoose = require("mongoose");

const programming_vocab = mongoose.Schema(
    {
        term:{
            type: String,
            required: [true, "please enter term"]
        },
        pinyin: {
            type: String,
            required: [true, "please enter pinyin"]
        },
        definition:{
            type: String,
            required: [true, "please enter definition"]
        }
    }
)
const Vocab = mongoose.model("Vocab", {
    name: {type: String},
    pinyin: {type: String},
    definition: {type: String}
});



const vocab = mongoose.model('vocab', programming_vocab);

Vocab.create = async(body) => {
    return await vocab.create(body);
};
module.exports = Vocab