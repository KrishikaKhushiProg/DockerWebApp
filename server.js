const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const appVersion = process.env.APP_VERSION || '1.0.0';

app.use(express.static('public'));

app.get('/api/info', (req, res) => {
  res.json({
    version: appVersion,
    env: process.env.NODE_ENV || 'development'
  });
});

app.listen(port, () => {
  console.log(Server running on port , version );
});