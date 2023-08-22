const express = require('express');
const router = express.Router();
const vocabController = require('./controllers/VocabControllers')

router.get('/api/users', vocabController.getAllVocab);
//TODO: add other routes for read, delete, update etc

module.exports = router;