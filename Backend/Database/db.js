const { MongoClient } = require('mongodb') //this will allow us to connect to db 

module.exports = {
    //this function connects to the database
    connectToDb: () =>{
        MongoClient.connect('mongodb://localhost:')
    },
    //this function will return db connection after we've connected
    getDb: () => {},
}