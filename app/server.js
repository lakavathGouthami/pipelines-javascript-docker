'use strict';

const express = require('express');

const PORT = 8443;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Azure, Welcome to K8s services \n');
});



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
