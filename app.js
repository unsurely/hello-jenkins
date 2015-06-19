var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('CI and CD success!!');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;