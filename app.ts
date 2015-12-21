import * as express from "express";
import * as bodyParser from "body-parser";

var nodeApp = express();

nodeApp.use(express.static(__dirname + '/public'));

nodeApp.get('/ping', function(req, res) {
  res.send('pong');
});

nodeApp.listen(3000, function(){
    console.log("Demo Express server listening on port %d in %s mode", 3000, nodeApp.settings.env);
});

export var NodeApp = nodeApp;