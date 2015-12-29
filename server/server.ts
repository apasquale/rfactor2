import * as express from "express";
import * as bodyParser from "body-parser";

var nodeApp = express();
var client_folder = __dirname + '/../build';

nodeApp.use(express.static(client_folder));

nodeApp.use('/bower_components',  express.static(__dirname + '/../bower_components'));

console.log('public folder: %s', client_folder)

nodeApp.get('/ping', function(req, res) {
  res.send('pong');
});

var port = process.env.PORT || 3080;

var server = nodeApp.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

export var NodeApp = nodeApp;