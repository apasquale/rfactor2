var express = require("express");
var nodeApp = express();
nodeApp.use(express.static(__dirname + '/public'));
nodeApp.get('/ping', function (req, res) {
    res.send('pong');
});
nodeApp.listen(process.env.PORT || 3080, function () {
    console.log("Demo Express server listening on port %d in %s mode", 3000, nodeApp.settings.env);
});
exports.NodeApp = nodeApp;
