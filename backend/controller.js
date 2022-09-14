const express = require('express');
const router = express.Router();

const data = require('./data');

router
    .get('/', (req, res) => {
        res.json(data)
    });

router
    .get('/docs', (req, res) => {
        let docs = data.map(doc => doc.physician)
        res.send(docs)
    })





module.exports = router;