require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');

const app = express();

mongoose.connect( process.env.MONGODB, { 
  
  useNewUrlParser: true,
  useUnifiedTopology: true

});

// req.query = Acessar query params(filtros)
// req.params = Acessar route params(edição, delete)
// req.body = Acessar corpo da requisição(criação, edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);

app.listen(process.env.PORT, (req, res) => {
    console.log('running');
})