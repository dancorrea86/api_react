
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

data = {
  express: 'Hello World from express',
  userId: '',
  title: '',
  body: ''
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

function atualizarPagina() {
  console.log(data.express)
  app.get('/api', (req, res) => {
    
    res.json({ 
      express: data.express,
      userId: data.userId });
  });
}

app.get('/api', (req, res) => {
  console.log(data.express)
  res.json({ 
    express: data.express,
    userId: data.userId });
});

app.post('/post', (req, res) => {
  console.log('POST /')
  //console.dir(req.body.userId)
  data.userId = req.body.userId
  atualizarPagina()
})

app.listen(port, () => console.log(`Listening on port ${port}`));