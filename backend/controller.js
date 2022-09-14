const express = require('express');
const router = express.Router();

const data = require('./data');

router
    .get('/', (req, res) => {
        res.json(data)
    });

router
    .get('/docs', (req, res) => {
        const docs = data.map(doc => doc.physician)
        res.send(docs)
    })

router
    .get('/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const appts = data.find(appt => appt.id === id)
        console.log(appts);
        res.send(appts)
    })

module.exports = router;