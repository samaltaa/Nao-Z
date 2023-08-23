const express = require("express");
const mongoose = require("mongoose");
const Vocab = require("./Models/VocabModels")
const app = express();

app.use(express.json())

//routes
app.get('/', (req, res) =>{
    res.send('Hello lady')
})

app.get('/vocab', async (req, res) => {
    try{
        const vocab = await Vocab.find({});
        res.status(200).json(vocab)
    } catch (Error){
        res.status(500).json({message: Error.message})
    }
})

app.post('/vocab', async(req, res) =>{
    try {
        const vocab = await Vocab.create(req.body)
        res.status(200).json(vocab);

    } catch(Error) {
        console.log(Error.message)
        res.status(500).json({message: Error.message})
    }
})


mongoose.
connect("mongodb+srv://baalyshbhon:Diosesamor8090@cluster0.qvryjfv.mongodb.net/programming_vocab?retryWrites=true&w=majority")
.then(()=>{
    app.listen(3000, () => {
        console.log(`listening in port: 3000`)
    })
    console.log("connected to database")
}).catch(() => {
    console.log(Error)
})