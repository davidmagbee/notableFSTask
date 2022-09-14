const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const controller = require('./controller')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use('/docs', controller)
app.use('/docs/:id', controller)

app.listen(3001, () => console.log('👂🏼 listening... show me your data'));