//tech
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//models
const Vocab = require("./Models/VocabModels");
const Courses = require("./Models/CoursesModels");
const app = express();

//environment variables

//cors middleware
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))
app.use(express.json())


app.get('/', (req, res) =>{
    res.send('Hello lady')
})

//routes for vocab collection
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

//routes for courses collection 
app.get('/Courses', async (req, res) => {
    try{
        const courses = await Courses.find({});
        res.status(200).json(courses)
    } catch (Error){
        res.status(500).json({message: Error.message})
    }
})

app.post('/Courses', async(req, res) =>{
    try {
        const courses = await Courses.create(req.body)
        res.status(200).json(courses);

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