const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const controller = require('./controller')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/docs', controller)
app.use('/docs/:id', controller)

app.listen(3001, () => console.log('👂🏼 listening... show me your data'));