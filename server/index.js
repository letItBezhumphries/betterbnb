const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router.js');
const PORT = 8000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.use('/api', router);

app.listen(PORT, () => {
  console.log('app is listening on PORT:', PORT);
})