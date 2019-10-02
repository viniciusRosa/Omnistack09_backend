require('dotenv').config()
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect( process.env.MONGODB, { 
  
  useNewUrlParser: true,
  useUnifiedTopology: true

});

// req.query = Acessar query params(filtros)
// req.params = Acessar route params(edição, delete)
// req.body = Acessar corpo da requisição(criação, edição)

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, (req, res) => {
    console.log('running');
})