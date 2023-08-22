const express = require('express')
const mongoose = require('mongoose')
const vocabRoutes = require('./routes/vocabRoute')
const PORT = 3000;

const app = express()

app.use('/api/vocab', vocabRoutes);

mongoose.connect('mongodb connection string goes here',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to Database');
}).catch(err => {
    console.error('error connecting to MongoDB');
});

app.use(express.json()); // this parses json requests

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});