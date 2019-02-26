const http=require('http');
const express = require('express');

const app = express();
app.set('port', 9500);
app.set('json spaces', 4);

const routes = require('./routes');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization,X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }
});
app.use(routes);

// start server
const server = http.createServer(app);
server.listen(app.get('port'), async () => {
  console.log('Express server listening on port ' + server.address().port);
});

// app.get('/', (request, response) => {
//   response.send('Hello from Express!')
// })