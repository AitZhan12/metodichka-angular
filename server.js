const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist'));
const PORT = app.listen(process.env.PORT || 8080);
// app.get('/*', function (req, res) {
//   res.sendFile(`./metodichka-angular/dist/index.html`); });

app.get('', function(req, res) {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));

