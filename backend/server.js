const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const data = require("./data")

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    // GET ENDPOINT
    res.send(data)
})

app.listen(3001, () => console.log('👂🏼 listening... show me your data'));

