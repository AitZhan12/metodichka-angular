function requireHTTPS(req, res, next) {
  if (!req.secure && req.get('forwarded-proto') !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

const express = require('express');
const path = require('path');
const app = express();

//app.use(requireHTTPS);

app.use(express.static(`./dist/metodichka-angular`));
const PORT = app.listen(process.env.PORT || 3000);
// app.get('/*', function (req, res) {
//   res.sendFile(`./metodichka-angular/dist/index.html`); });

app.get('', function(req, res) {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get(`/*`, function(req, res) {
  res.sendFile(`index.html`, {root: 'dist/metodichka-angular'});
});
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));

