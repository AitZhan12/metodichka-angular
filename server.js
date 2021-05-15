const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'metodichka-angular/dist/demo')));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: '.dist/demo'}),
  );

app.listen(process.env.PORT || 8080);
